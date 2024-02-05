# Algorand Fix The Bug Challenge #3

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

This project includes a simple `helloWorld` smart contract written with [TEALScript](https://tealscript.netlify.app/) inside of `./contract/helloWorld.algo.ts` file. The smart contract is already compiled with artifacts generated inside of the `./contracts/artifacts` folder and the application typed client inside of `./contracts/clients/helloWorldClient.ts` file. 

The `index.ts` file in the root level is a script that deploys the `helloWorld` smart contract and calls the `helloWorld` method.

However, if you try to run the `index.ts` file with `bun run index.ts` after cloning this repo, it will fail.

**Find out what is wrong and fix the bug.**

## Prerequisites
1. [Install Bun](https://bun.sh/docs/installation). Bun was used because it can [directly run TypeScript files.](https://bun.sh/docs/runtime/typescript)
```bash
# with install script (recommended)
curl -fsSL https://bun.sh/install | bash

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```
1. [Install AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.

## Instructions

### 1. Set up your development environment
1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Go to the directory you want to work in with your terminal and clone the forked repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing. The below code example works only if you are using VSCode as your default editor and have the `code .` shorthand set up.
```bash
cd [CLONED_REPO]
code . 
```
4. Install dependencies using AlgoKit. Run the below command inside of the `challenge-3` folder.
```bash
algokit bootstrap all
```

Now you are ready to fix the bug!

### 2. Steps to fix the bug
1. Go to `./contracts/helloWorld.algo.ts` to read the `helloWorld` TEALScript smart contract and understand what it does.
2. Go to `./index.ts` and read the comments on the file and fix the bug!
3. After fixing the bug run: 
```bash
bun run index.ts
```
and if you see something like the image below, you have successfully fixed the bug! Congratulations 😆
<img width="1379" alt="image" src="https://github.com/algorand-devrel/fix-the-bug-private/assets/52557585/cadebf91-503d-46fb-a575-e6305e1719a0">

### 3. How to Submit Your Answer
1. After solving the puzzle, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the bug?
   2. How did you fix the bug?
   3. Screenshot of your terminal showing the result of running `index.ts` file.
   <img width="1379" alt="image" src="https://github.com/algorand-devrel/fix-the-bug-private/assets/52557585/f609c1f2-d36c-490c-bb56-0a5e242ff1b2">
   4. Wallet address to receive reward NFT.

