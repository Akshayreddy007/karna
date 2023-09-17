import React, { useEffect } from "react";

const InvoiceDetails = [
  {
    id: 1,
    name: "test1",
    nameid: 1,
    amount: 1000,
    discount: "10%",
    gst: "18%"
  },
  { id: 2, name: "test2", nameid: 5, amount: 2000, discount: "0%", gst: "0%" },
  { id: 1, name: "test1", nameid: 1, amount: 1000, discount: "5%", gst: "10%" },
  { id: 3, name: "test3", nameid: 3, amount: 100, discount: "10%", gst: "0%" }
];

const Table = () => {
  // Helper function to parse percentage values and convert to decimal
  const parsePercentage = (percentValue) => parseFloat(percentValue) / 100;

  // Group items by id and calculate total quantity, amount, discount as decimal, and GST as decimal for each unique item
  const itemDetails = InvoiceDetails.reduce((acc, item) => {
    const existingItem = acc.find((el) => el.id === item.id);
    const discount = parsePercentage(item.discount);
    const gst = parsePercentage(item.gst);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.amount += item.amount;
      existingItem.totalDiscount += discount;
      existingItem.gst += gst;
    } else {
      acc.push({
        id: item.id,
        name: item.name,
        quantity: 1,
        amount: item.amount,
        totalDiscount: discount,
        gst
      });
    }
    return acc;
  }, []);

  // Calculate average discount for each unique item
  itemDetails.forEach((item) => {
    item.discount = item.totalDiscount / item.quantity;
    item.discountAmount = item.amount * item.discount;
    item.totalAfterDiscount = item.amount - item.discountAmount;
    item.gstAmount = item.totalAfterDiscount * item.gst;
    item.totalAmount = item.totalAfterDiscount + item.gstAmount;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tests</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Discount (%)</th>
          <th>Discount Amount</th>
          <th>Total after Discount</th>
          <th>GST (%)</th>
          <th>GST Amount</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {itemDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.amount}</td>
            <td>{(item.discount * 100).toFixed(2)}%</td>
            <td>{item.discountAmount.toFixed(2)}</td>
            <td>{item.totalAfterDiscount.toFixed(2)}</td>
            <td>{(item.gst * 100).toFixed(2)}%</td>
            <td>{item.gstAmount.toFixed(2)}</td>
            <td>{item.totalAmount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
