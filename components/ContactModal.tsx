import React, { useEffect } from "react";
import { ModalProps } from "../types/components";
import { CONTACT_INFO, SITE_CONFIG } from "../constants/site";

export default function ContactModal({ showModal, setShowModal }: ModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowModal(false);
    };

    if (showModal) {
      window.addEventListener("keydown", handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <>
      {/* Backdrop - dismissible by click */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setShowModal(false)}
        aria-label="Zavřít"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
        <div className="relative w-full max-w-lg animate-scale-in">
          <div className="relative flex flex-col w-full bg-white rounded-2xl shadow-hard">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => setShowModal(false)}
              aria-label="Zavřít">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="p-6 sm:p-8 pr-14 sm:pr-16 text-center border-b border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-2">
                Kontakt a domluva setkání
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Pro domluvu setkání mě prosím kontaktujte
              </p>
            </div>

            {/* Contact Info */}
            <div className="p-6 sm:p-8">
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary-50 to-white hover:from-primary-100 hover:to-primary-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500">Telefon</span>
                    <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {CONTACT_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-accent-50 to-white hover:from-accent-100 hover:to-accent-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500">E-mail</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-accent-600 transition-colors truncate">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Footer Text */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs sm:text-sm text-center text-gray-600">
                  {SITE_CONFIG.name} - {SITE_CONFIG.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
