import { signOut } from "@/auth";
import { LogOut } from 'lucide-react';

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit"><LogOut size={16} /> Logout</button>
    </form>
  );
};

export default SignOut;
