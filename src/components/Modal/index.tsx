import React, { useEffect } from 'react'
import styles from './styles.module.css'

interface ModalProps {
  title: string
  message: string
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, message, isOpen, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(`.${styles.modal}`)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button className={styles.close} onClick={onClose} title="Close" />
        </div>
        <div className={styles.message}>
          <p className={styles.messageText}>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
