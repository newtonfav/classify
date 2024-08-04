import { signOutAction } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button>Sign out</button>
    </form>
  );
}
