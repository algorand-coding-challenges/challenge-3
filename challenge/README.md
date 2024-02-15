# Algorand Coding Challenge #3: Fix The Bug!

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

This project includes a simple `helloWorld` smart contract written with [TEALScript](https://tealscript.netlify.app/) inside of `./contract/helloWorld.algo.ts` file. The smart contract is already compiled with artifacts generated inside of the `./contracts/artifacts` folder and the application typed client inside of `./contracts/clients/helloWorldClient.ts` file. 

The `index.ts` file in the root level is a script that deploys the `helloWorld` smart contract and calls the `helloWorld` method.

However, if you try to run the `index.ts` file after going into the `challenge` directory, opening Docker Desktop, and then running:

```bash
algokit bootstrap all
algokit localnet start
npm run start
```
it will fail.

**Find out what is wrong and fix the bug.**

## Instructions

### 1. Set up your development environment

1. Install dependencies and autogenerate the `.env` file using AlgoKit. Run the below command inside of the `challenge` folder.
```bash
algokit bootstrap all
```

Now you are ready to fix the bug!

### 2. Steps to fix the bug

1. Go to `./contracts/helloWorld.algo.ts` to read the `helloWorld` TEALScript smart contract and understand what it does.
2. Go to `./index.ts` and read the comments on the file and fix the bug!
3. After fixing the bug run the below command inside the `challenge` directory: 
```bash
npm run start
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

