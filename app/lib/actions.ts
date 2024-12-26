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

// create a new booking (server action), same as create API
export async function createBooking(
  prevState: BookingState,
  formData: FormData
): Promise<BookingState> {
  // form data validation using Zod
  // data extraction from form data and insertion into database
  const validatedFields = CreateBooking.safeParse({
    noOfGuest: formData.get("noOfGuest"),
    dateOfBooking: formData.get("dateOfBooking"),
    bookingTime: formData.get("bookingTime"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      errors: {
        noOfGuest: errors.noOfGuest || [],
        dateOfBooking: errors.dateOfBooking || [],
        bookingTime: errors.bookingTime || [],
      },
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
    // If a database error occurs, return a more specific error message.
    return {
      errors: {},
      message: "Database Error: Failed to Create Booking.",
    };
  }

  // Clear the client-side cache and redirect user after successful booking

  // revalidatePath("/home");
  // redirect("/home");

  // Return a success message in BookingState format
  return {
    errors: {},
    message: "Booking successfully created!",
  };
}
