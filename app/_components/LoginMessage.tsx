import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl text-white py-12 self-center ">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to use
        <br /> Classify
      </p>
    </div>
  );
}

export default LoginMessage;
