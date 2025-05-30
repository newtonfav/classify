import SignInButton from "../_components/SigninButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold tabletPortrait:text-[1.3rem]">
        Sign in to use Classify
      </h2>

      <SignInButton />
    </div>
  );
}
