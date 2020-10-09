# CONTRIBUTION GUIDELINES

## Before contributing

Before contributing, please ensure you have **read the complete guidelines**. If there are any doubts please open an issue, and clearly state your concerns

## Contributing
### Contributor

We are happy to see that you want to implement algorithms for others, and would like your submissions. We request that before you implement an algorithm you ensure the following:
- The algorithms are not duplicates
- Your work fulfills the guidelines as stated here

We follow a systematic Git Workflow -
- Create a fork of this repo
- Clone your fork onto your pc
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- Make sure that before you create a new branch for new changes, [syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary

**New Implementations**
- Name your file accordingly, in increasing number. For example if `quicksort.cpp` already exists, please name your implementation as `quicksort2.cpp`
- Please update the **MarkDown** file with an explanation of your method

### Making Changes

#### Code

Add your files to the respective directory. If it is a new algorithm, please create a directory accordingly

The following to be kept in mind when implementing algorithms:
- If you are adding a new directory
  - **MarkDown** file with an explanation, and pseudocode as provided in [algo README template](ALGO_README_TEMPLATE.md)
  - Your source code files
- Try to implement your algorithm in languages commonly used, but any language is acceptable
- If you have modified code in an existing file, please make sure your commit tells what changes you have made, and that the file still compiles, and is easy to follow and comprehend
- Adding more tests or reimplementing the algorithm is welcome. Tests should work, and the reimplementation should not be a duplicate
- **Be consistent with these guidelines.**

#### Documentation

- You can write a **MarkDown** file if it does not exist for the algorithm or directory
- Commenting the code is welcome. Please do not add things that are obvious
- Try to avoid grammar mistakes with your documentation
- Do not update this or any other **MarkDown** files. First create an issue mentioning what the problem is and why you want to change the corresponding file

### Commit Guidelines

- All commits are to be on a branch. Any on master will be closed
- It is mandated that your branch is in [sync with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork), before you create a PR
- If your PR is to fix an issue, make sure it contain's GitHub's [keyword reference](https://github.com/blog/1506-closing-issues-via-pull-requests), which closes the related issue on PR merge
- If changes are made to your PR, before merge(new commits to fix minor issues, like a failing Travis build), please [squash](https://davidwalsh.name/squash-commits-git) your commits, so you don't have an absurd number of them
- If your commit is for a UI change, it would be **awesome** if you add a screenshot, or a link to a deployment where it can be tested out, in your PR. Makes it easy to review and merge
- Write [clear, meaningful](http://chris.beams.io/posts/git-commit/) git commits
  - We recommend that changes be grouped locally with semantic prefixes to make it easier to understand, but not mandated. For example:
```
fix: fixed a bug in foo
feat: added foo in c++
test: new tests for foo in py
docs: added missing md
```

### Pull Requests

Check out the [pull request template](.github/pull_request_template.md) here

**Happy Coding.**
