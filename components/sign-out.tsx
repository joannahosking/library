import { signOut } from "@/auth";

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};

export default SignOut;
