"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useFormState } from "react-dom";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { useFormStatus } from "react-dom";
import { uploadImage } from "../_lib/actions";
import { AddtoInventoryButton } from "./AddtoInventoryButton";

export interface FormState {
  success: boolean;
  responseText: string;
  imagePath: string;
  message: string;
}

const initialState: FormState = {
  success: false,
  responseText: "",
  imagePath: "",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="bg-accent-600 px-6 py-2 midPhone:py-1 midPhone:text-[1rem] midPhone:px-3 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? <SpinnerMini /> : "Classify"}
    </button>
  );
}

interface UploadFormProps {
  setImagePath: (url: string) => void;
  setaiResponse: (response: string) => void;
  setisLoading: (response: boolean) => void;
}

export default function UploadForm({
  setImagePath,
  setaiResponse,
  setisLoading,
}: UploadFormProps) {
  const [state, formAction] = useFormState(uploadImage, initialState);
  const [formState, setFormState] = useState<FormState>(initialState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, startTransition] = useTransition();
  const [isInventoryUpdated, setIsInventoryUpdated] = useState(false);

  // Update file input state and validate size
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file && file.size > 4_500_000) {
      setFormState({
        ...formState,
        message: "File too large. Max size is 4.5MB.",
        success: false,
      });
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    setSelectedFile(file || null);
    setFormState({ ...formState, message: "" });
  }

  // Only submit if file is selected and valid
  function handleFormAction(payload: FormData) {
    if (!selectedFile) {
      setFormState({
        ...formState,
        message: "Please select a valid image file before submitting.",
        success: false,
      });
      return;
    }

    startTransition(() => formAction(payload));
  }

  useEffect(() => {
    setImagePath(state.imagePath || "");
    setaiResponse(state.responseText || "");
    setisLoading(loading);

    setFormState({
      success: state.success,
      responseText: state.responseText || "",
      imagePath: state.imagePath || "",
      message: state.message,
    });

    if (state.responseText) {
      setIsInventoryUpdated(false);
    }
  }, [loading, setImagePath, setaiResponse, setisLoading, state]);

  const handleInventoryUpdate = () => {
    setIsInventoryUpdated(true);
    setFormState(initialState);
  };

  return (
    <form className="flex flex-col items-center" action={handleFormAction}>
      <div className="text-black items-center bg-primary-200 py-1 w-7/12 px-1 midPhone:w-10/12">
        {formState.responseText ? (
          <div className="tracking-tight leading-none p-3 midPhone:text-[0.9rem]">
            Do you want to add this item to your Inventory?
          </div>
        ) : (
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="w-11/12 midPhone:w-full"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
          />
        )}
      </div>

      <span
        className={`text-[0.9rem] ${
          formState.success ? "text-primary-300" : "text-accent-100"
        }`}
      >
        {formState.message}
      </span>

      <div className="self-center mt-3">
        {formState.responseText && formState.imagePath ? (
          <AddtoInventoryButton
            responseText={formState.responseText}
            imagePath={formState.imagePath}
            onUpdate={handleInventoryUpdate}
          />
        ) : (
          <SubmitButton />
        )}
      </div>
    </form>
  );
}
