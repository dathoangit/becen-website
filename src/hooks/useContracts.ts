import { ethers } from 'ethers'
import {useConfigs} from "../store/configs/hooks/useConfigs";
// ABI

export const useContracts = () => {
  const { configs } = useConfigs()

  const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
    const provider = new ethers.providers.JsonRpcProvider(configs.chainConfigs.rpcUrl)
    const signerOrProvider = signer ?? provider
    return new ethers.Contract(address, abi, signerOrProvider)
  }


  return {
    getContract,
  }
}
