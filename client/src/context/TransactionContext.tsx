import React, { useEffect, useState, createContext } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

interface TransactionContextInterface {
  connectWallet: () => Promise<void>
  connectedAccount: string
  sedTransaction: () => Promise<void>
  formData: FormData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
}

export const TransactionContext =
  createContext<TransactionContextInterface | null>(null)

const { ethereum } = window as any

const getEthereumContract = () => {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    )
  }
}

interface FormData {
  addressTo: string
  amount: string
  keyword: string
  message: string
}
interface TransactionProviderProps {
  children: React.ReactNode
}
export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [connectedAccount, setConnectedAccount] = useState('')
  const [formData, setFormData] = useState<FormData>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert('Please install Metamask')

    const accounts = await ethereum.request({ method: 'eth_accounts' })
    try {
      if (accounts.length) {
        setConnectedAccount(accounts[0])

        // get all transactions
      } else {
        console.log('no accounbts found')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum account')
    }
  }

  const connectWallet = async () => {}

  const sedTransaction = async () => {
    const { addressTo, amount, keyword, message } = formData
    const transactionContract = getEthereumContract()
    console.log(transactionContract)
    // try {
    //   if (!ethereum) return alert('Please install Metamask')
    //   // get data from the form
    // } catch (error) {
    //   console.log(error)
    //   throw new Error('No ethereum account')
    // }
  }
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        sedTransaction,
        formData,
        handleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
