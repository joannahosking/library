import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  return (
    <>
      <h1>Profile</h1>
      <p>Your name is {session?.user.name}.</p>
      <p>This page will eventually have user preferences.</p>
    </>
  );
}
