"use client";

import Image from "next/image";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import CustomDropdown from "@/components/CustomDropdown";
import GreenButton from "./Buttons";

export default function Form() {
  const handleChange = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <section id="confirmation" className="scroll-mt-[50px] bg-yellow-2 w-full h-fit p-4 md:p-15 space-y-14">
      {/* Confirm Attendance Header */}
      <div className="flex flex-col justify-center items-center -space-y-3 w-fit mx-auto">
        <h1
          className={`${tangerine.className} font-extrabold text-center text-yellow-4 text-[42px] md:text-[74px]`}
        >
          Confirmar asistencia
        </h1>
        <div className="relative w-[180px] md:w-[260px] aspect-[5/2]">
          <Image
            src="/Vectors/Leafs_Form.svg"
            alt="Leafs Form Divider"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Instructions */}
      <div className="w-full text-center">
        <p
          className={`${simonetta.className} font-normal text-black text-xl md:text-[24px]`}
        >
          Llena el siguiente formulario y no olvides dar click en el botón de
          enviar, nosotros revisaremos tu confirmación y te agregaremos a
          nuestra lista de invitados.
          <br></br>
          <br></br>
          Te pedimos ser respetuoso con los lugares que ya hemos asignado para
          tí en el pase de entrada que te hemos enviado.
        </p>
      </div>
      {/* Guest Form */}
      <form
        className={`${simonetta.className} w-full max-w-md mx-auto space-y-6`}
        onSubmit={(e) => {
          e.preventDefault();
          // Add your submit logic here
          console.log("Form submitted");
        }}
      >
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-lg mb-1 text-yellow-4">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-yellow-4 bg-neutral p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-4"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-lg mb-1 text-yellow-4">
            Número telefónico
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full border border-yellow-4 bg-neutral p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-4"
          />
        </div>

        <CustomDropdown
          options={["1", "2", "3", "4"]}
          initial="Número de invitados"
          onChange={handleChange}
        />
        <CustomDropdown
          options={["Sí, asistiré", "No, no podré asistir"]}
          initial="Confirmación de asistencia"
          onChange={handleChange}
        />

        {/* Congratulatory Messagee */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg mt-8 mb-1 text-yellow-4"
          >
            Mensaje de felicitación
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full border border-yellow-4 bg-neutral p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-4 resize-none"
          />
        </div>

        {/* Allergies */}
        <div>
          <label className="block text-lg text-yellow-4">Alergias</label>
          <div className="flex justify-left pt-4 pb-4 gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="allergy"
                value="yes"
                className="accent-yellow-400 size-[20px]"
              />
              Sí, padezco de alergias
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="allergy"
                value="no"
                className="accent-yellow-400 size-[20px]"
              />
              No, no tengo alergias
            </label>
          </div>

          <input
            type="text"
            placeholder="Escribe aquí tus alergias alimentarias"
            className="w-full border border-yellow-4 bg-neutral p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#4A4A00]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pb-[50px]">
          {/*<button
            type="submit"
            className="bg-yellow-4 hover:bg-amber-500 transition-colors text-white px-6 py-3 rounded-md mt-6"
          >
            Enviar
          </button> */}
          <GreenButton btnText="Enviar"/>

        </div>
      </form>
    </section>
  );
}
