"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import CustomDropdown from "@/components/CustomDropdown";
import GreenButton from "./Buttons";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guestsNumber, setGuestsNumber] = useState<number>(1);
  const [attendance, setAttendance] = useState("");
  const [allergy, setAllergy] = useState("No");
  const [allergyList, setAllergyList] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    if (allergy === "No") {
      setAllergyList("");
    }
  }, [allergy]);

  const handleGuestsChange = (value: string) => {
    setGuestsNumber(parseInt(value));
  };

  const handleAttendanceChange = (value: string) => {
    const mapped = value === "Sí, asistiré" ? "Si" : "No";
    setAttendance(mapped);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: string[] = [];

    if (!attendance || attendance === "Confirmación de asistencia") {
      errors.push("Por favor confirma tu asistencia.");
    }

    if (allergy === "Si" && !allergyList.trim()) {
      errors.push("Por favor indique sus alergias alimentarias.");
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    const payload = {
      name: name, // pre-defined
      phone: phone, // optional
      guestsNumber: guestsNumber, // MAX value pre-defined and required
      attendanceResponse: attendance, // required
      allergiesResponse: allergy, // required
      allergiesList: allergyList, // required only if allergy is "Si"
      message, // optional
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar el formulario.");
      }

      setSubmitSuccess("¡Formulario enviado con éxito!");

      setName("");
      setPhone("");
      setGuestsNumber(1);
      setAttendance("");
      setAllergy("No");
      setAllergyList("");
      setMessage("");
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
      setFormErrors([]);
    }
  };

  return (
    <section
      id="confirmation"
      className="scroll-mt-[50px] bg-yellow-2 w-full h-fit p-4 md:p-15 space-y-14"
    >
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
        onSubmit={handleSubmit}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-yellow-4 bg-neutral p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-4"
          />
        </div>

        <CustomDropdown
          options={["1", "2", "3", "4"]}
          initial="Número de invitados"
          onChange={handleGuestsChange}
        />
        <CustomDropdown
          options={["Sí, asistiré", "No, no podré asistir"]}
          initial="Confirmación de asistencia"
          onChange={handleAttendanceChange}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
                value="Yes"
                checked={allergy === "Si"}
                onChange={() => setAllergy("Si")}
                className="accent-yellow-400 size-[20px]"
              />
              Sí, padezco de alergias
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="allergy"
                value="No"
                checked={allergy === "No"}
                onChange={() => setAllergy("No")}
                className="accent-yellow-400 size-[20px]"
              />
              No, no tengo alergias
            </label>
          </div>

          <input
            type="text"
            placeholder="Escribe aquí tus alergias alimentarias"
            className="w-full border border-yellow-4 bg-neutral p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#4A4A00]"
            value={allergyList}
            onChange={(e) => setAllergyList(e.target.value)}
            disabled={allergy === "No"}
          />
        </div>

        {formErrors.length > 0 && (
          <ul>
            {formErrors.map((err, i) => (
              <li key={i} style={{ color: "red" }}>
                {err}
              </li>
            ))}
          </ul>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pb-[50px]">
          <GreenButton btnText="Enviar" type="submit" />
        </div>
      </form>
    </section>
  );
}
