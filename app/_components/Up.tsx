// "use client";

// import React, { useActionState, useState } from "react";
// import Button from "./Button";
// import { uploadImage } from "../_lib/actions";
// // import { uploadImage } from "../_lib/actions";

// const initialState = {
//   message: "",
// };

// export default function UploadForm() {
//   const [state, formAction] = useActionState(uploadImage, initialState);
//   const [selectedImage, setSelectedImage] = useState<File>();
//   const [isDisabled, setisDisabled] = useState(true);
//   const [error, setError] = useState("");

//   // function handleClick() {
//   //   if (!selectedImage) return;

//   //   uploadImage(selectedImage);
//   // }

//   function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (file?.type !== "image/jpeg" && file?.type !== "image/png") {
//       setError('"File must be an image"');
//       setisDisabled(true);
//       throw new Error(error);
//     }

//     if (file?.size > 5000000) {
//       setError("File must be less than 5mb");
//       setisDisabled(true);
//       throw new Error(error);
//     }

//     setError("");
//     setisDisabled(false);
//     setSelectedImage(file);
//   }

//   return (
//     <form className="flex flex-col items-center" action={formAction}>
//       <button className=" text-black items-center bg-primary-200 py-1 w-8/12 px-1">
//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           // onChange={(e) => handleUpload(e)}
//           className="w-11/12"
//         />
//       </button>
//       <span className="text-[1rem] text-accent-100">{state?.message}</span>

//       <div className="self-center mt-3">
//         <Button
//           isDisabled={isDisabled}
//           text="Add item"
//           bgColor="bg-accent-600"
//           type="primary"
//           // onClickItem={handleClick}
//         />
//       </div>
//     </form>
//   );
// }
