import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {setConfigs} from "../reduce";
import { CONFIG_CHAINS, DEFAULT_CHAIN, SUPPORTED_CHAINS } from 'src/configs/chains';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';

export const useInitConfig = () => {
  const dispatch = useDispatch()
  const { chainId } = useWeb3ModalAccount()

  useEffect(() => {
    const _chainId = chainId && SUPPORTED_CHAINS.includes(chainId) ? chainId : DEFAULT_CHAIN

    dispatch(
      setConfigs({
        chainId: _chainId,
        chainConfigs: CONFIG_CHAINS[_chainId],
      }),
    )
  }, [chainId])
}
