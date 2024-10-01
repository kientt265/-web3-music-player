import { useContext, useState } from 'react'
import { Button } from './components/ui/button'
import Sidebar from './components/ui/Sidebar'
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { sepolia, arbitrum } from '@reown/appkit/networks';
import ConnectMetaMask from './components/ui/ConnectMetaMask';
import { useAppKit } from '@reown/appkit/react'
import Player from './components/ui/Player';
import Display from './components/ui/Display';
import { PlayerContext } from './context/PlayerContext';
const queryClient = new QueryClient();

interface AppKitProviderProps {
  children: ReactNode;
}


const projectId = import.meta.env.VITE_PROJECT_ID;


const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://sepolia.etherscan.io', 
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};


export const networks = [sepolia, arbitrum];


const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks,
  projectId,
});


createAppKit({
  adapters: [wagmiAdapter],
  networks: [sepolia, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true, 
  },
});


export function AppKitProvider({ children }: AppKitProviderProps) {
  const { open} = useAppKit()
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

function App() {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/> 
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
