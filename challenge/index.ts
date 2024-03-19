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
    creatorAddress: deployer.addr, // XXX: Use deploy address, not Account object
  },
  algod, // XXX: Use the algod client instead of indexer client
)

await appClient.create.createApplication({})

// XXX: change YOUR_NAME to your name or nickname
const result = await appClient.helloWorld({name: "No-Cash-7970"}, {sendParams: {suppressLog: true}})

console.log(result.return)