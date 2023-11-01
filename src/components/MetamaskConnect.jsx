import React from 'react'
import { connectMetamask } from '../utils/ethereum'
import { useNavigate } from 'react-router-dom'

const MetamaskConnect = () => {
  const navigate = useNavigate()
  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer" 
      style={{
        borderImage: 'url(/images/wood-frame.svg) 10 10 10 10 stretch',
        borderWidth: '10px',
      }}
      onClick={async() => {
        const res = await connectMetamask()
        if (res) {
          navigate('/dashboard')
        }
      }}
    >
      <div className="text-center font-console pt-1" style={{fontSize:'20px'}}>
        Connect Metamask
      </div>
    </div>
  )
}

export default MetamaskConnect
