/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useState } from "react";

interface Player {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  chessRating: string;
  emergencyContact: string;
}

interface PlayerDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (players: Player[]) => void;
}

interface InputFieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder: string;
  type?: "text" | "email" | "tel" | "date";
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

interface PlayerSectionProps {
  index: number;
  control: any;
  errors: any;
}

export const PlayerDetailsDialog: React.FC<PlayerDetailsDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm<{ players: Player[] }>({
    defaultValues: {
      players: [
        {
          id: 1,
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          chessRating: "",
          emergencyContact: "",
        },
        {
          id: 2,
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          chessRating: "",
          emergencyContact: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "players",
  });

  const addPlayer = () => {
    append({
      id: fields.length + 1,
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      chessRating: "",
      emergencyContact: "",
    });
  };

  const InputField: React.FC<
    InputFieldProps & { name: string; control: any }
  > = ({
    label,
    placeholder,
    type = "text",
    required = false,
    error,
    errorMessage,
    name,
    control,
  }) => {
    const [inputType, setInputType] = useState<string>(
      type === "date" ? "text" : type,
    );

    return (
      <Controller
        name={name}
        control={control}
        rules={
          required ? { required: `${label || placeholder} is required` } : {}
        }
        render={({ field, fieldState }) => (
          <div className="flex flex-col">
            <input
              {...field}
              type={inputType}
              placeholder={
                type === "date" && inputType === "text"
                  ? placeholder
                  : placeholder
              }
              onFocus={(e) => {
                if (type === "date") {
                  setInputType("date");
                  e.currentTarget.type = "date";
                  e.target.showPicker();
                }
              }}
              onClick={(e) => {
                if (type === "date" && inputType === "text") {
                  setInputType("date");
                  e.currentTarget.type = "date";
                  e.currentTarget.showPicker();
                }
              }}
              onBlur={() => {
                if (type === "date" && !field.value) setInputType("text");
              }}
              className={`border bg-[#2B2D30] ${fieldState.error ? "border-red-500" : "border-[#464A4F]"} rounded-2xl px-4 py-4 text-sm text-white placeholder-[#7D8082] transition-colors duration-200 focus:border-gray-500 focus:ring-0 focus:outline-none`}
            />
            {fieldState.error && (
              <span className="mt-1 text-xs text-red-500">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    );
  };

  const PlayerSection: React.FC<PlayerSectionProps> = ({
    index,
    control,
    errors,
  }) => (
    <div className="space-y-4">
      {index > 0 && <hr className="my-6 border-[#464A4F]" />}
      <h3 className="mb-4 text-[16px] font-medium text-[#8F9193]">
        Player {index + 1}
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <InputField
          label="Full Name"
          name={`players.${index}.fullName`}
          placeholder="Full Name *"
          required
          control={control}
          error={!!errors?.players?.[index]?.fullName}
          errorMessage={errors?.players?.[index]?.fullName?.message}
        />
        <InputField
          label="Email Address"
          name={`players.${index}.email`}
          placeholder="Email Address *"
          type="email"
          required
          control={control}
          error={!!errors?.players?.[index]?.email}
          errorMessage={errors?.players?.[index]?.email?.message}
        />
        <InputField
          label="Phone Number"
          name={`players.${index}.phone`}
          placeholder="Phone Number *"
          type="tel"
          required
          control={control}
          error={!!errors?.players?.[index]?.phone}
          errorMessage={errors?.players?.[index]?.phone?.message}
        />
        <InputField
          label="Date of Birth"
          name={`players.${index}.dateOfBirth`}
          placeholder="Date of Birth *"
          type="date"
          required
          control={control}
          error={!!errors?.players?.[index]?.dateOfBirth}
          errorMessage={errors?.players?.[index]?.dateOfBirth?.message}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Chess Rating"
          name={`players.${index}.chessRating`}
          placeholder="Chess Rating"
          control={control}
        />
        <InputField
          label="Emergency Contact"
          name={`players.${index}.emergencyContact`}
          placeholder="Emergency Contact"
          control={control}
        />
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-150 bg-black/30 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-150 flex items-center justify-center"
          >
            <div className="flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#212121] sm:h-[70vh]">
              {/* Fixed Header */}
              <div className="flex shrink-0 items-center justify-between p-6 pb-4">
                <h2 className="px-2 pt-8 text-[28px] font-extrabold text-white sm:px-8">
                  Enter Your Team Details
                </h2>
                <button
                  onClick={onClose}
                  className="self-start text-gray-400 transition-colors hover:text-white"
                  type="button"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-2 pb-6 sm:px-16">
                <form
                  onSubmit={handleSubmit((data) => {
                    if (onSubmit) onSubmit(data.players);
                  })}
                  className="space-y-8"
                >
                  {fields.map((player, index) => (
                    <PlayerSection
                      key={player.id}
                      index={index}
                      control={control}
                      errors={{}}
                    />
                  ))}
                </form>
              </div>

              {/* Fixed Footer */}
              <div className="shrink-0 border-t border-[#464A4F] bg-[#212121] px-6 py-6 sm:px-16">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <button
                  onClick={addPlayer}
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-gray-600 bg-transparent px-8 py-4 text-white transition-colors duration-200 hover:bg-gray-700"
                  >
                  ADD PLAYER
                  </button>

                  <button
                  onClick={handleSubmit((data) => {
                    if (onSubmit) onSubmit(data.players);
                  })}
                  type="button"
                  className="w-full sm:w-auto rounded-2xl bg-green-600 px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-green-700"
                  >
                  PROCEED TO PAY
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
