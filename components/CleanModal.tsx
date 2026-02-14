import { useEffect } from "react";
import CloseIcon from "../assets/window-close-regular.svg";
import Image from "next/image";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function CleanModal({ showModal, setShowModal }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setShowModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-[60rem] mx-auto my-6 ">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-xl shadow-soft-lg outline-none sm:p-4 focus:outline-none">
                <button
                  className="float-right p-4 ml-auto bg-transparent border-0 outline-none w-14 h-14 focus:outline-none transition-smooth hover:opacity-70"
                  onClick={() => setShowModal(false)}>
                  <Image src={CloseIcon} alt="close" />
                </button>
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-t border-blueGray-200">
                  <h1 className="pb-5 mt-[-4rem] mb-2 text-3xl font-semibold text-font-green">Kontakt a domluva setkání</h1>
                  <p>
                    <a href="tel:734574243" className="hover:text-font-green transition-smooth">
                      Tel: 734 574 243
                    </a>{" "}
                    |{" "}
                    <a className="hover:text-font-green transition-smooth" href="mailto: davidek.email@gmail.com">
                      davidek.email@gmail.com
                    </a>{" "}
                    |{" "}
                    <a className="hover:text-font-green transition-smooth" href="mailto: www.psycholog-terapeut-brno.cz">
                      www.psycholog-terapeut-brno.cz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 modal-backdrop"></div>
        </>
      ) : null}
    </>
  );
}
