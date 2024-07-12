import EventForm from "@/app/_components/EventForm";
import { auth } from "@clerk/nextjs/server";

const UpdateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section>
        <h3>Update Event</h3>
      </section>

      <div className="container my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;
