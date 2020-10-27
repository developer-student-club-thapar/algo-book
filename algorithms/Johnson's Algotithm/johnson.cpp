#include <iostream>
#include <fstream>
#include <vector>
#include <climits>
#include <exception>
#include <set>

using namespace std;

struct Edge {
  int head;
  long cost;
};

using Graph = vector<vector<Edge>>;
using SingleSP = vector<long>;
using AllSP = vector<vector<long>>;
const long INF = LONG_MAX;

// first line is in the format <N> <M> where N is the number of vertices, M is the number of edges that follow
// each following line represents a directed edge in the form <Source> <Dest> <Cost>
Graph loadgraph(istream& is) {
  Graph g;

  int n, m;
  is >> n >> m;
  cout << "Graph has " << n << " vertices and " << m << " edges." << endl;
  g.resize(n+1);
  while (is) {
    int v1, v2, c;
    is >> v1 >> v2 >> c;
    if (is) {
      g[v1].push_back({v2, c});
    }
  }

  return g;
}

Graph addZeroEdge(Graph g) {
  // add a zero-cost edge from vertex 0 to all other edges
  for (int i = 1; i < g.size(); i++) {
    g[0].push_back({i, 0});
  }

  return g;
}

SingleSP bellmanford(Graph &g, int s) {
  vector<vector<long>> memo(g.size()+2, vector<long>(g.size(), INF));

  // initialise base case
  memo[0][s] = 0;

  for (int i = 1; i < memo.size(); i++) {
    // compute shortest paths from s to all vertices, with max hop-count i
    for (int n = 0; n < g.size(); n++) {
      if (memo[i-1][n] < memo[i][n]) {
        memo[i][n] = memo[i-1][n];
      }
      for (auto& e : g[n]) {
        if (memo[i-1][n] != INF) {
          if (memo[i-1][n] + e.cost < memo[i][e.head]) {
            memo[i][e.head] = memo[i-1][n] + e.cost;
          }
        }
      }
    }
  }

  // check if the last iteration differed from the 2nd-last
  for (int j = 0; j < g.size(); j++) {
    if (memo[g.size()+1][j] != memo[g.size()][j]) {
      throw string{"negative cycle found"};
    }
  }

  return memo[g.size()];
}

SingleSP djikstra(const Graph& g, int s) {
  SingleSP dist(g.size(), INF);
  set<pair<int,long>> frontier;

  frontier.insert({0,s});

  while (!frontier.empty()) {
    pair<int,long> p = *frontier.begin();
    frontier.erase(frontier.begin());

    int d = p.first;
    int n = p.second;

    // this is our shortest path to n
    dist[n] = d;

    // now look at all edges out from n to update the frontier
    for (auto e : g[n]) {
      // update this node in the frontier if we have a shorter path
      if (dist[n]+e.cost < dist[e.head]) {
        if (dist[e.head] != INF) {
          // we've seen this node before, so erase it from the set in order to update it
          frontier.erase(frontier.find({dist[e.head], e.head}));
        }
        frontier.insert({dist[n]+e.cost, e.head});
        dist[e.head] = dist[n]+e.cost;
      }
    }
  }

  return dist;
}

AllSP johnson(Graph &g) {
  // now build "g prime" which is g with a new edge added from vertex 0 to all other edges, with cost 0
  Graph gprime = addZeroEdge(g);

  // now run Bellman-Ford to get single-source shortest paths from s to all other vertices
  SingleSP ssp;
  try {
    ssp = bellmanford(gprime, 0);
  } catch (string e) {
    cout << "Negative cycles found in graph.  Cannot compute shortest paths." << endl;
    throw e;
  }

  // no re-weight each edge (u,v) in g to be: cost + ssp[u] - ssp[v].
  for (int i = 1; i < g.size(); i++) {
    for (auto &e : g[i]) {
      e.cost = e.cost + ssp[i] - ssp[e.head];
    }
  }

  // now that we've re-weighted our graph, we can invoke N iterations of Djikstra to find
  // all pairs shortest paths
  AllSP allsp(g.size());
  for (int i = 1; i < g.size(); i++) {
    allsp[i] = djikstra(g, i);
  }

  // now re-weight the path costs back to their original weightings
  for (int u = 1; u < g.size(); u++) {
    for (int v = 1; v < g.size(); v++) {
      if (allsp[u][v] != INF) {
        allsp[u][v] += ssp[v] - ssp[u];
      }
    }
  }

  return allsp;
}

int main (int argc, char *argv[]) {
  if (argc < 2) {
    cerr << "Usage: " << argv[0] << " <infile>" << endl;
    return 1;
  }

  ifstream is {argv[1]};
  if (!is) {
    cerr << "Couldn't open input file: " << argv[1] << endl;
    return 1;
  }

  Graph g = loadgraph(is);

  // run Johnson's algorithm to get all pairs shortest paths
  AllSP asp = johnson(g);

  // find the "shortest shortest path", ie. the path with lowest cost,
  // amongst all shortest path pairs.
  long shortest = INF;
  for (int i = 1; i < g.size(); i++) {
    for (int j = 1; j < g.size(); j++) {
      if (asp[i][j] < shortest) {
        shortest = asp[i][j];
      }
    }
  }

  cout << "Shortest shortest path = " << shortest << endl;
}
