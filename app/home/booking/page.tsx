"use client";

import { useState, useActionState } from "react";
import { useRouter } from "next/navigation"; // For handling form submission or navigation
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/outline"; //Heroicons
import { BookingState, createBooking } from "@/app/lib/actions";

const Booking = () => {
  const router = useRouter();
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // const initialState: BookingState = { message: null, errors: {} };
  // const [state, handleSubmit] = useActionState(createBooking, initialState);

  // Handle Form Submission

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!selectedDate || !selectedTime) {
  //     alert("Please select a valid date and time!");
  //     return;
  //   }
  //   // Example: Redirecting to a confirmation page. not yet implemented.
  //   // router.push(
  //   //   `/confirmation?people=${peopleCount}&date=${selectedDate}&time=${selectedTime}`
  //   // );
  //   console.log("success!");
  // };

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
        // onSubmit={handleSubmit}
        //  action={createBooking}

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
              value={peopleCount}
              readOnly
              className="w-12 h-10 text-center bg-gray-700 text-white border-0"
            />
            <button
              type="button"
              onClick={increment}
              className="w-10 h-10 bg-yellow-500 text-black font-bold rounded-r-lg hover:bg-yellow-600"
            >
              +
            </button>
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
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            // Prevents selecting past dates using min attribute.
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>

        {/* Time Picker */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2 flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Booking;
