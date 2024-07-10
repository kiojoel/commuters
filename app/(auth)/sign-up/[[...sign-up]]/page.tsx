import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className=" flex min-h-screen justify-center mt-10">
      <SignUp />
    </section>
  );
}
