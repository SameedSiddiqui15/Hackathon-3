export const Order =  {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "cartItem" }],
    },
    {
      name: "total",
      type: "number",
      title: "Total Amount",
    },
  ],
};
