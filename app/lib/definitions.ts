// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept. // like a Model for a database or ORM
// Right now its manual. However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// export type Customer = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
// };

// export type Invoice = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   date: string;
//   // In TypeScript, this is called a string union type.
//   // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//   status: "pending" | "paid";
// };

// The database returns a number for amount, but we later format it to a string with the formatCurrency function

// export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
//   amount: number;
// };
