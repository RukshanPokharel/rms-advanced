"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type BookingState = {
  errors?: {
    noOfGuest?: string[];
    dateOfBooking?: string[];
    bookingTime?: string[];
  };
  message?: string | null;
};

// create a new booking (server action), same as create api

export async function createBooking(
  prevState: BookingState,
  formData: FormData
) {
  // form data validation using Zod

  // data insertion into database
  const bookingData = {
    noOfGuest: formData.get("noOfGuest"),
    dateOfBooking: formData.get("dateOfBooking"),
    bookingTime: formData.get("bookingTime"),
  };

  // SQL query for inserting invoice form data into database
  try {
    //     await sql`
    //     INSERT INTO invoices (customer_id, amount, status, date)
    //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    //   `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // This function allows you to purge(get rid of) cached data on-demand for a specific path.
  // or
  // Calling revalidatePath to clear the client cache and make a new server request.
  revalidatePath("/home");
  // This function allows you to redirect the user to another URL. It can be used in Server Components, Route Handlers, and Server Actions.
  redirect("/home");
}
