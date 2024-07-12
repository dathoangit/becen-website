import {useEffect, useState} from 'react'
import {useContracts} from './useContracts'

export const useFetchContractData = (
  {address, abi, method, params = [], refreshTime = 0}: {
    address: string
    abi: any
    method: string
    params?: any[],
    refreshTime?: number
  }
) => {
  const {getContract} = useContracts()
  const [data, setData] = useState<any>(undefined)

  useEffect(() => {
    if (!address || !abi || !method || params.includes(undefined)) return

    fetchData()
      .then((d) => {
        setData(d)
      })
      .catch(console.error)
    if (refreshTime) {
      const interval = setInterval(() => {
        fetchData()
          .then((d) => {
            setData(d)
          })
          .catch(console.error)
      }, refreshTime)
      return () => {
        clearInterval(interval)
      }
    }
  }, [address, method, JSON.stringify(params), JSON.stringify(abi)])

  const fetchData = async () => {
    const contract = getContract(abi, address)
    return await contract.callStatic[method](...params)
  }

  return {
    data,
    fetcher: fetchData
  }
}
