import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps {
  order: OrderItem[]
}

const OrderTotals = ({order}:OrderTotalsProps) => {

  const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  // const subTotal = order.reduce((total, item) => total + (item.quantity * item.price), 0); //sin useMemo

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl">Totales y propina</h2>
        <p>Subtotal a pagar:
          <span className="font-bold"> {formatCurrency(subTotal)}</span>
        </p>

        <p>Propina:
          <span className="font-bold"> $0</span>
        </p>

        <p>Total a pagar:
          <span className="font-bold"> $0</span>
        </p>
      </div>

      <button></button>
    </>
  )
}

export default OrderTotals
