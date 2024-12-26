"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

const BookingSchema = z.object({
  booking_id: z.string(),
  noOfGuest: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  dateOfBooking: z.string({
    invalid_type_error: "Please select a booking date.",
  }),
  bookingTime: z.string({
    invalid_type_error: "Please select a booking time.",
  }),
});

const CreateBooking = BookingSchema.omit({ booking_id: true });

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
  // data extraction from form data and insertion into database
  const validatedFields = CreateBooking.safeParse({
    noOfGuest: formData.get("noOfGuest"),
    dateOfBooking: formData.get("dateOfBooking"),
    bookingTime: formData.get("bookingTime"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Booking.",
    };
  }

  // Prepare data for insertion into the database
  const { noOfGuest, dateOfBooking, bookingTime } = validatedFields.data;

  // SQL query for inserting invoice form data into database
  try {
    await sql`
        INSERT INTO bookings (noOfGuest, dateOfBooking, bookingTime)
        VALUES (${noOfGuest}, ${dateOfBooking}, ${bookingTime})
      `;
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
