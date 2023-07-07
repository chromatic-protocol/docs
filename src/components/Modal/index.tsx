import React, { useState } from 'react'
import styles from './styles.module.css'

interface ModalProps {
  title: string
  message: string
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, message, isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className="w-full text-xl font-semibold text-black">{title}</p>
          <button className={styles.close} onClick={onClose} title="close" />
        </div>
        <div className={styles.message}>
          <p className="text-base font-medium text-black/70">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
