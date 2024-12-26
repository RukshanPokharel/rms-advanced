"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function ConfirmationModal({
  openModal,
  bookingDetails,
}: {
  openModal: boolean;
  bookingDetails: {
    peopleCount: number;
    selectedDate: string;
    selectedTime: string;
  };
}) {
  const [showModal, setShowModal] = useState(openModal);

  // Close the modal after some time or when user clicks the "Close" button
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              {/* Icon */}
              <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Booking Confirmed!
              </h2>

              {/* Subtitle */}
              <p className="text-gray-600 text-center">
                Thank you for your reservation. We look forward to welcoming
                you!
              </p>

              {/* Details */}
              <div className="bg-gray-100 p-4 rounded-lg w-full mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Your Booking Details:
                </h3>
                <ul className="text-gray-700">
                  <li>
                    <strong>People:</strong> {bookingDetails.peopleCount}
                  </li>
                  <li>
                    <strong>Date:</strong> {bookingDetails.selectedDate}
                  </li>
                  <li>
                    <strong>Time:</strong> {bookingDetails.selectedTime}
                  </li>
                </ul>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
