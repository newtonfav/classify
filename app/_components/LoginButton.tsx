import { signInAction } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={signInAction}>
      <div>Login</div>
    </form>
  );
}
