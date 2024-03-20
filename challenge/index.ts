import { HelloWorldClient } from './contracts/clients/helloWorldClient'
import * as algokit from '@algorandfoundation/algokit-utils'

const algod = algokit.getAlgoClient()
const indexer = algokit.getAlgoIndexerClient()
const kmd = algokit.getAlgoKmdClient()
const deployer = await algokit.getLocalNetDispenserAccount(algod, kmd)

const appClient = new HelloWorldClient(
  {
    resolveBy: 'creatorAndName',
    findExistingUsing: indexer,
    sender: deployer,
    creatorAddress: deployer.addr,
  },
  algod,
)

await appClient.create.createApplication({});

// TODO: change YOUR_NAME to your name or nickname
const result = await appClient.helloWorld({ name: "algorambo" }, { sendParams: { suppressLog: true } })

console.log(result.return)