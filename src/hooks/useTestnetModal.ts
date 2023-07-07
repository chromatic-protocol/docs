import { createContext, useContext } from 'react'

type ModalProps = {
  isOpen: boolean
  onOpen: () => unknown
  onClose: () => unknown
}

// 1. Context initialized in the component Root.
const TestnetModalContext = createContext<ModalProps>(undefined!)
export function useTestnetModal() {
  const { isOpen, onOpen, onClose } = useContext(TestnetModalContext)

  return { isOpen, onOpen, onClose }
}
export const TestnetModalProvider = TestnetModalContext.Provider
