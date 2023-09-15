"use client"
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useStoreModalStore } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect } from 'react'

const SetupPage = () => {
  const onOpen = useStoreModalStore((state) => state.onOpen)
  const isOpen = useStoreModalStore((state) => state.isOpen)

  useEffect(()=> {
    if (!isOpen) {
      onOpen();
    }
  },[isOpen, onOpen])


  return null
}

export default SetupPage
