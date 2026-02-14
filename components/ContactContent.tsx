'use client'

import Image from 'next/image'
import { useState } from 'react'
import Map from '../assets/mapa-velka.png'
import Outside from '../assets/venek.jpg'
import CleanModal from './CleanModal'
import CleanModalMini from './CleanModalMini'

export default function ContactContent() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="grid m-4 bg-cover xl:grid-cols-3 2xl:grid-cols-8 2xl:h-full bg-motive bg-motive-overlay rounded-xl overflow-hidden">
        <div className="flex flex-col justify-between p-8 2xl:col-span-2">
          <div className="text-white">
            <p className="pb-4">Kontakt:</p>
            <p>Terapie pod Špilberkem - psychologické centrum,</p>
            <p>První patro - pracovna č. 6</p>
            <p>Údolní 222/5</p>
            <p className="pb-4">602 00, Brno - město.</p>
            <p className="pb-8">IČO: 09495673</p>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="self-center w-full p-4 font-bold text-white transition-smooth border-2 border-white border-solid rounded-lg shadow-soft focus:outline-none focus:ring-2 focus:ring-white hover:bg-white/20"
          >
            Kontakt a domluva setkání
          </button>
          {/* Desktop modal */}
          <div className="hidden xl:block">
            <CleanModal showModal={showModal} setShowModal={setShowModal} />
          </div>
          {/* Mobile/tablet modal */}
          <div className="block xl:hidden">
            <CleanModalMini showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
        <div className="relative 2xl:col-span-4" style={{ width: '100%', height: '550px' }}>
          <Image src={Map} placeholder="blur" alt="Mapa" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className="relative 2xl:col-span-2" style={{ width: '100%', height: '550px' }}>
          <Image
            src={Outside}
            placeholder="blur"
            alt="Venkovní prostor"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>
    </div>
  )
}
