import React, { useRef, useEffect } from "react";
import { Product } from "../types/global";

interface PaypalProps {
  product: Product;
}

export default function Paypal({ product }: PaypalProps) {
  const paypal = useRef(null);
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  useEffect(() => {
    window.paypal.Buttons({
      createdOrder: (data, actions, err) => {
        return actions.order
          .create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "MAD",
                  value: product.price,
                },
              },
            ],
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
            },
            onError: (err: unknown) => {
              console.error("PayPal Checkout onError", err);
            },
          })
          .render(paypal.current);
      },
    });
  }, []);

  return (
    <div className="">
      <div ref={paypal} />
    </div>
  );
}
