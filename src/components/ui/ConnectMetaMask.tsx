import React from 'react'
import utilsAddress from "../../lib/utilsAddress"
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react'
const ConnectMetaMask = () => {
  const {open} = useAppKit()
  const { address,  isDisconnected } = useAccount()
  return (
            <button onClick={() => open()}  className='bg-blue-600 mx-3 p-3 rounded-md'>{!isDisconnected ? `${utilsAddress(address)}` : "Connect Wallet"}</button>
  )
}

export default ConnectMetaMask