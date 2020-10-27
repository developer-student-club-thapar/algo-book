# Johnson's Algorithm

Johnson's algorithm is a way to find the **shortest paths between all pairs of vertices in an edge-weighted, directed graph**. It allows some of the edge weights to be negative numbers, but no negative-weight cycles may exist. It works by using the **Bellman–Ford algorithm** to compute a transformation of the input graph that removes all negative weights, allowing **Dijkstra's algorithm** to be used on the transformed graph.

## Johnson's algorithm consists of the following steps
1. First, a new node q is added to the graph, connected by zero-weight edges to each of the other nodes.
2. Second, the **Bellman–Ford** algorithm is used, starting from the new vertex ***q***, to find for each vertex _v_ the minimum weight ***h(v)*** of a path from ***q*** to ***v***. If this step detects a negative cycle, the algorithm is terminated.
3. Next the edges of the original graph are reweighted using the values computed by the **Bellman–Ford** algorithm: an edge from ***u*** to ***v***, having length ***w(u, v)***, is given the new length ***w(u,v) + h(u) − h(v)***.
4. Finally, q is removed, and **Dijkstra's algorithm** is used to find the shortest paths from each node s to every other vertex in the reweighted graph. The distance in the original graph is then computed for each distance ***D(u , v)***, by adding ***h(v) − h(u)*** to the distance returned by Dijkstra's algorithm.

### Compiling the `johnson.cpp` file

> MacOSX <br/>
> `xcrun clang++ -std=c++2a -stdlib=libc++ ./johnson.cpp -o ./johnson`

> Linux <br />
> `clang++ -std=c++2a -stdlib=libc++ ./johnson.cpp -o ./johnson`
> <br />**OR**<br />
> `g++ -std=c++2a ./johnson.cpp -o ./johnson`

### Running the file
The file can be run by `./johnson path/to/input/file`

**Example**

`./johnson graph`