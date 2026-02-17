import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/window-close-regular.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendEmail } from "../utils/sendEmail";
import { ModalProps } from "../types/components";

export default function CleanModalMini({ showModal, setShowModal }: ModalProps) {
  const [message, setMessage] = useState("");

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email().required(),
    phoneNumber: yup.string(),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    reset();
    setShowModal(false);
    sendEmail(data);
  };

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {showModal ? (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md animate-scale-in">
              <div className="relative flex flex-col w-full bg-white rounded-2xl shadow-hard">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                  onClick={() => {
                    setShowModal(false);
                    setMessage("");
                  }}
                  aria-label="Zavřít">
                  <Image src={CloseIcon} alt="Zavřít" width={20} height={20} />
                </button>

                {/* Header */}
                <div className="p-6 text-center border-b border-gray-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Kontakt a domluva setkání
                  </h2>
                  <div className="flex flex-col gap-3 text-sm text-gray-700">
                    <a
                      href="tel:734574243"
                      className="flex items-center justify-center gap-2 hover:text-primary-600 transition-colors">
                      <span className="font-semibold">Tel:</span> 734 574 243
                    </a>
                    <a
                      href="mailto:davidek.email@gmail.com"
                      className="flex items-center justify-center gap-2 hover:text-primary-600 transition-colors">
                      <span className="font-semibold">E-mail:</span> davidek.email@gmail.com
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Pro domluvu setkání mě prosím kontaktujte telefonicky nebo e-mailem.
                    Těším se na Vaši zprávu a na možnost spolupráce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
