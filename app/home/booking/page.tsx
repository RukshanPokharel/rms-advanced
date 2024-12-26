"use client";

import { useState, useActionState } from "react";
import { useRouter } from "next/navigation"; // For handling form submission or navigation
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/outline"; //Heroicons
import { BookingState, createBooking } from "@/app/lib/actions";
import ConfirmationModal from "@/app/ui/ConfirmationModal";

const Booking = () => {
  const router = useRouter();
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const initialState: BookingState = { errors: {}, message: null };
  const [state, handleSubmit] = useActionState(createBooking, initialState);

  const increment = () => setPeopleCount((prev) => prev + 1);
  const decrement = () =>
    setPeopleCount((prev) => (prev > 1 ? prev - 1 : prev));

  // generating time slots
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 15; hour <= 21; hour++) {
      times.push(`${hour}:00`);
      if (hour < 21) times.push(`${hour}:30`);
    }
    return times;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        action={handleSubmit}
        // Responsive: Scales well on all screen sizes with max-w-md and w-full.
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6">
          Make a Reservation
        </h2>

        {/* Number of People */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2 flex items-center">
            <UserIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Number of People
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrement}
              className="w-10 h-10 bg-yellow-500 text-black font-bold rounded-l-lg hover:bg-yellow-600"
            >
              -
            </button>
            <input
              type="text"
              name="noOfGuest"
              value={peopleCount}
              readOnly
              className="w-12 h-10 text-center bg-gray-700 text-white border-0"
              aria-describedby="booking-error"
            />
            <button
              type="button"
              onClick={increment}
              className="w-10 h-10 bg-yellow-500 text-black font-bold rounded-r-lg hover:bg-yellow-600"
            >
              +
            </button>
          </div>
          <div id="booking-error" aria-live="polite" aria-atomic="true">
            {state.errors?.noOfGuest &&
              state.errors.noOfGuest.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Date Picker */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Date
          </label>

          {/* Uses an HTML5 date input. */}
          <input
            type="date"
            name="dateOfBooking"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            // Prevents selecting past dates using min attribute.
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
            aria-describedby="booking2-error"
          />
        </div>
        <div id="booking2-error" aria-live="polite" aria-atomic="true">
          {state.errors?.dateOfBooking &&
            state.errors.dateOfBooking.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Time Picker */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2 flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Time
          </label>
          <select
            name="bookingTime"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
            aria-describedby="booking3-error"
          >
            <option value="" disabled>
              Select a time
            </option>
            {generateTimeSlots().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div id="booking3-error" aria-live="polite" aria-atomic="true">
          {state.errors?.bookingTime &&
            state.errors.bookingTime.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
        >
          Confirm Reservation
        </button>
        {state.message && (
          <ConfirmationModal
            openModal={true}
            bookingDetails={{
              peopleCount,
              selectedDate,
              selectedTime,
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Booking;
