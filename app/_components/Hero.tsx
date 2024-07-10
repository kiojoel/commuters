const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Effortlessly Create and Manage Your Perfect Event.
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-muted-foreground">
            Welcome to <span className="font-bold text-black">commuters</span>,
            the ultimate event invitation solution. Design beautiful invites,
            send them via SMS and email, and track RSVPs in real-time. Focus on
            making your event unforgettable with our intuitive tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/dashboard"
            >
              Create Event
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring active:text-gray-900 sm:w-auto"
              href="/learn"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
