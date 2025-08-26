"use client";

import { ChangeEvent, useState } from "react";
import { AnimatedKing } from "../ui/AnimatedChessItems";

export const Contact = () => {
  return (
    <div className="mt-40 flex w-full flex-col justify-between gap-10 md:flex-row">
      <div className="relative flex h-[10dvh] w-full flex-col md:h-[25dvh]">
        <div className="flex flex-col">
          <p className="text-[20px] font-extrabold text-[#AAA9A9]">
            Have Questions?
          </p>
          <p className="text-[48px] font-extrabold">Contact Us</p>
        </div>
        <div className="hidden md:block">
          <AnimatedKing />
        </div>
      </div>

      <div className="relative w-full md:max-w-lg">
        <ContactForm />

        <div className="mt-8 flex justify-center md:hidden">
          <AnimatedKing />
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-7 rounded-2xl bg-[#161E23] px-4 py-8 sm:px-10 sm:py-14"
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <FormInput
            type="text"
            name="firstName"
            placeholder="Name*"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex-1">
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <FormInput
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <FormInput
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          required
          variant="textarea"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full sm:w-auto rounded-lg bg-[#54C339] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

type FormInputProps = TextInputProps | TextareaProps;

const FormInput = ({ className = "", ...props }: FormInputProps) => {
  const baseClasses =
    "w-full rounded-lg border border-[#464A4F] bg-[#2B2D30] px-4 py-3 text-white placeholder-[#7D8082] focus:border-gray-600 focus:bg-gray-750 focus:outline-none";

  const combinedClasses = `${baseClasses} ${className}`;

  if (props.variant === "textarea") {
    const { variant, ...textareaProps } = props;
    return (
      <textarea
        {...textareaProps}
        className={`${combinedClasses} resize-none`}
        rows={props.rows || 5}
      />
    );
  }

  const { variant, ...inputProps } = props;
  return (
    <input
      {...inputProps}
      type={props.type || "text"}
      className={combinedClasses}
    />
  );
};

interface BaseInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

interface TextInputProps extends BaseInputProps {
  type?: "text" | "email" | "password" | "tel";
  variant?: "input";
}

interface TextareaProps extends BaseInputProps {
  variant: "textarea";
  rows?: number;
}
