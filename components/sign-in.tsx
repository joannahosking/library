import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/shelf" });
      }}
    >
      <button type="submit">Login</button>
    </form>
  );
}
