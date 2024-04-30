import { HelloWorldClient } from './contracts/clients/helloWorldClient'
import * as algokit from '@algorandfoundation/algokit-utils'

const algod = algokit.getAlgoClient()
const indexer = algokit.getAlgoIndexerClient()
const kmd = algokit.getAlgoKmdClient()
const deployer = await algokit.getLocalNetDispenserAccount(algod, kmd)

/*
FIX THE BUG:

The following code will create an instance of the HelloWorldClient and call the helloWorld function.
There are 2 bugs in the below code. Find and fix them.

Hint: Read the Typed clients section in the documentation: https://developer.algorand.org/docs/get-details/algokit/features/generate/?from_query=algokit%20utils#1-typed-clients
*/
const appClient = new HelloWorldClient(
  {
    resolveBy: 'creatorAndName',
    findExistingUsing: indexer,
    sender: deployer,
    //changed the creator adress by calling the addr atribute 
    creatorAddress: deployer.addr,
  },
  // removed the indexer method and replaced it with algod.
  algod,
)

await appClient.create.createApplication({});

// TODO: change YOUR_NAME to your name or nickname
const result = await appClient.helloWorld({name: "Luminous Boolean"}, {sendParams: {suppressLog: true}})

console.log(result.return)