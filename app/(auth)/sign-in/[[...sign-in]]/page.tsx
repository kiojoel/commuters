import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className=" flex min-h-screen justify-center mt-10">
      <SignIn />
    </section>
  );
}
