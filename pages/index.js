import Head from 'next/head'
import { useWeb3, web3 } from '@3rdweb/hooks'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import { IoWalletOutline } from 'react-icons/io5'

export default function Home() {
  const { connectWallet, address } = useWeb3()
  return (
    <div className='flex flex-col items-center bg-[#0d1116] justify-center min-h-screen'>
      <Head>
        <title>Coinbase Clone</title>
        <meta name='description' content='a simple coinbase clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-center items-center text-white'>
        {address ? (
          <Dashboard />
        ) : (
          <div className='flex w-full justify-center items-center'>
            <button
              onClick={() => connectWallet('injected')}
              className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 px-20 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-semibold text-base w-full'
            >
              <IoWalletOutline className='mx-5' fontSize={21} />
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #000;
  color: white;
  justify-items: center;
`
const WalletConnect = styled.div``
const Button = styled.button``
const Details = styled.div``
