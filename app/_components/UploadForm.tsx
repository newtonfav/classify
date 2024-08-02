"use client";

import React, { useEffect, useTransition } from "react";
import { useFormState } from "react-dom";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { useFormStatus } from "react-dom";
import { uploadImage } from "../_lib/actions";

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
      className="bg-accent-600 px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? <SpinnerMini /> : "Add"}
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

  function handleFormAction(payload: FormData) {
    startTransition(() => formAction(payload));
  }

  useEffect(
    function () {
      setImagePath(state.imagePath as string);
      setaiResponse(state.responseText as string);
      setisLoading(loading);
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

  return (
    <form className="flex flex-col items-center" action={handleFormAction}>
      <div className=" text-black items-center bg-primary-200 py-1 w-7/12 px-1">
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="w-11/12"
          id="file"
          name="file"
          required
        />
      </div>
      <span className={`text-[1rem] ${state.success ? "" : "text-accent-100"}`}>
        {state?.message}
      </span>

      <div className="self-center mt-3">
        <SubmitButton />
      </div>
    </form>
  );
}
