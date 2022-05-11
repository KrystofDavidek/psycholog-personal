import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/window-close-regular.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendEmail } from "../utils/sendEmail";

export default function CleanModal({ showModal, setShowModal }: any) {
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

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-[60rem] mx-auto my-6 ">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none sm:p-4 focus:outline-none">
                <button
                  className="float-right p-4 ml-auto bg-transparent border-0 outline-none w-14 h-14 focus:outline-none"
                  onClick={() => {
                    setShowModal(false);
                    setMessage("");
                  }}
                >
                  <Image src={CloseIcon} alt="close" />
                </button>
                {/*header*/}
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-t border-blueGray-200">
                  <h1 className="pb-5 mt-[-4rem] mb-2 text-3xl font-semibold text-font-green">Kontakt a domluva setkání</h1>
                  <p>
                    <a href="tel:734574243" className="hover:text-font-green">
                      Tel: 734 574 243
                    </a>{" "}
                    |{" "}
                    <a className="hover:text-font-green" href="mailto: davidek.email@gmail.com">
                      davidek.email@gmail.com
                    </a>{" "}
                    |{" "}
                    <a className="hover:text-font-green" href="mailto: www.psycholog-terapeut-brno.cz">
                      www.psycholog-terapeut-brno.cz
                    </a>
                  </p>
                </div>
                <div className="flex flex-col self-center p-5 rounded-t border-blueGray-200">
                  <p>
                    Z technických důvodů není v tuto chvíli kontaktní formulář funkční, pro kontakt prosím využijte e-mail nebo
                    telefonní číslo zobrazené výše.
                  </p>
                  <br />
                  <p>Omlouváme se a děkujeme za pochopení.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
