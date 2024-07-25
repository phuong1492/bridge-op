const optimism = require("@eth-optimism/sdk")
const ethers = require("ethers")

async function main(){
  const amount = "0.3"
  const privateKey = ""
  const l1Provider = new ethers.providers.StaticJsonRpcProvider("https://rpc.ankr.com/eth_sepolia")
  const l2Provider = new ethers.providers.StaticJsonRpcProvider("https://sepolia.optimism.io")
  const l1Wallet = new ethers.Wallet(privateKey, l1Provider)
  const l2Wallet = new ethers.Wallet(privateKey, l2Provider)

  const messenger = new optimism.CrossChainMessenger({
      l1ChainId: 11155111,
      l2ChainId: 11155420,
      l1SignerOrProvider: l1Wallet,
      l2SignerOrProvider: l2Wallet,
    })
  tx = await messenger.depositETH(ethers.utils.parseEther(amount))
  console.log(tx)
}
main()