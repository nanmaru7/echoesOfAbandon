import { useCart } from '../hooks/useCart'
import './Toast.css'

export default function Toast() {
  const { toast } = useCart()

  return (
    <div className={`toast ${toast.show ? 'show' : ''}`}>
      <svg
        className="text-emerald-500 shrink-0"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span className="text-text-primary text-[0.95rem] font-medium">
        {toast.message}
      </span>
    </div>
  )
}
