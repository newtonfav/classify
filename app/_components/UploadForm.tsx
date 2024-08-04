"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useFormState } from "react-dom";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { useFormStatus } from "react-dom";
import { uploadImage } from "../_lib/actions";
import { AddtoInventoryButton } from "./AddtoInventoryButton";

export interface FormState {
  success: boolean;
  responseText?: string;
  imagePath?: string;
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
  const [loading, startTransition] = useTransition();
  const [isInventoryUpdated, setIsInventoryUpdated] = useState(false);

  function handleFormAction(payload: FormData) {
    startTransition(() => formAction(payload));
  }

  useEffect(
    function () {
      setImagePath(state.imagePath as string);
      setaiResponse(state.responseText as string);
      setisLoading(loading);
      if (state.responseText) {
        setIsInventoryUpdated(false);
      }
    },
    [
      loading,
      setImagePath,
      setaiResponse,
      setisLoading,
      state.imagePath,
      state.responseText,
    ]
  );

  const handleInventoryUpdate = () => {
    state.responseText = "";
    state.message = "";
    state.imagePath = "";
    setIsInventoryUpdated(true);
  };

  return (
    <form className="flex flex-col items-center" action={handleFormAction}>
      <div className=" text-black items-center bg-primary-200 py-1 w-7/12 px-1 midPhone:w-10/12">
        {state.responseText ? (
          <div className="tracking-tight leading-none p-3">
            Do you want to add this item to your Inventory?
          </div>
        ) : (
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="w-11/12 midPhone:w-full"
            id="file"
            name="file"
            required
          />
        )}
      </div>
      <span
        className={`text-[0.9rem] ${
          state.success ? "text-primary-300" : "text-accent-100"
        }`}
      >
        {state?.message}
      </span>

      <div className="self-center mt-3">
        {state.responseText ? (
          <AddtoInventoryButton
            responseText={state.responseText}
            imagePath={state.imagePath}
            onUpdate={handleInventoryUpdate}
          />
        ) : (
          <SubmitButton />
        )}
      </div>
    </form>
  );
}
