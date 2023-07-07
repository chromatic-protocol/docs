import React, { useState } from 'react'
import { TestnetModalProvider } from '../hooks/useTestnetModal'

// 2. Modal Context Provider to Root
export default function Root({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <TestnetModalProvider
        value={{
          isOpen,
          onOpen: () => setIsOpen(true),
          onClose: () => setIsOpen(false)
        }}
      >
        {children}
      </TestnetModalProvider>
    </>
  )
}
