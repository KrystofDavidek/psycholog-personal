import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/window-close-regular.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendEmail } from "../utils/sendEmail";

export default function Modal({ showModal, setShowModal }: any) {
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
                  <h1 className="pb-5 text-3xl font-semibold text-font-green">Kontakt a domluva setkání</h1>
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
                {/*body*/}
                <div className="relative flex-auto px-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="grid gap-4 mt-4 xl:grid-cols-3">
                      <div className="xl:col-span-1">
                        <div className="mb-4">
                          <label className="block mb-2 text-sm font-bold text-gray-700">Jméno</label>
                          <input
                            {...register("name")}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="František Novák"
                          />
                        </div>
                        <div className="mb-8">
                          <label className="block mb-2 text-sm font-bold text-gray-700">E-mail</label>

                          <input
                            {...register("email")}
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="novak@gmail.com"
                          />
                          {errors.email && (
                            <p className="text-xs italic text-red-500">Vyplňte prosím e-mail ve správném formátů</p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block mb-2 text-sm font-bold text-gray-700">Tel. číslo</label>
                          <input
                            {...register("number")}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="number"
                            type="text"
                            placeholder="603465678"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 xl:">
                        <div className="mb-4">
                          <label className="block mb-2 text-sm font-bold text-gray-700">Zde napište zprávu</label>
                          <textarea
                            {...register("message")}
                            className="w-full h-[14.5rem] px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Rád bych si domluvil..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-700 ">{message && <p>{message}</p>}</div>
                    <div className="flex items-center justify-end py-6 rounded-b border-blueGray-200">
                      <button
                        className="px-6 py-3 mb-1 text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-font-green hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Odeslat
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mb-8 ml-8 ">
                  <p className="text-sm">Psycholog a terapeut, Brno - Mgr. Petr Davídek, Údolní 225/5, Brno</p>
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
