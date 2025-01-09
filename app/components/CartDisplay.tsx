'use client'

import { useCart } from '../contexts/CartContext'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react'

export default function CartDisplay() {
  const { cart, removeFromCart, clearCart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="relative text-black hover:text-white hover:bg-black"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            You have {totalItems} item(s) in your cart
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>RM{(item.price * item.quantity).toFixed(2)}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span className="font-bold">RM{totalPrice.toFixed(2)}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <Button onClick={clearCart} variant="outline">
            Clear Cart
          </Button>
          <Button>Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
  