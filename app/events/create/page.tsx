import EventForm from "@/app/_components/EventForm";
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section>
        <h1 className="container my-8 mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create Events
        </h1>
      </section>

      <div className="container my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
