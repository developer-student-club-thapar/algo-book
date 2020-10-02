<div align = "center">

<img height=200px src="https://github.com/developer-student-club-thapar/officialWebsite/blob/master/src/assets/dsc_logo.png">

# DEVELOPER STUDENT CLUBS TIET

<a href="https://medium.com/developer-student-clubs-tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/medium-icon.png?raw=true" width="60"></a>
<a href="https://twitter.com/dsctiet"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a>
<a href="https://www.linkedin.com/company/developer-student-club-thapar"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>
<a href="https://facebook.com/dscthapar"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>
<a href="https://instagram.com/dsc.tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

</div>
This is the repo for the **Algo Book** by Developer Student Clubs, TIET, Patiala , Punjab.
Kindly go through the entire README.md for getting familiar with contribution steps

## ALGO-BOOK

##### To Start

```
1. Clone the repository
2. npm i or yarn install
3. npm start
```

##### Scripts

1. **Dev frontend server (no SSR or api server)**

    > npm run dev (all axios requests are proxied to 'http:localhost:\${process.env.SERVER_HOST}/api')(configured in webpack.development.js)

2. **Dev backend server (only api server)**

    > npm run dev:server
    > (make sure there is a .env.dev file with server=true and SERVER_PORT set)

3. **Prod build**

    > npm run prod

4. **Run linter**

    > npm run lint

5. **Run prettier**

    > npm run format

6. **Start Server and Use SSR**

    > npm start
    
## Contribution to the project

We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Commits

- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

---
-- this project is live on [Website](https://algo-book.dsctiet.tech)
All feedback and suggestions are welcome!

- 💬 Join the community on [Discord](https://discord.gg/3C4TESX)
