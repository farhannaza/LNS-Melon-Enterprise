'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface NotificationProps {
  message: string
  duration?: number
  onClose: () => void
}

export default function Notification({ message, duration = 3000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 flex items-center">
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)} className="ml-2 focus:outline-none">
        <X size={18} />
      </button>
    </div>
  )
}

