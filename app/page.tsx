export default function Home() {
  return (
    <div className="m-5 flex flex-col items-center">
      <header className="flex justify-center text-3xl">
        <h1>Home</h1>
      </header>

      <div className="flex flex-col items-center">
        <div className="m-2 border rounded border-3 p-1">
          <img src="https://i.pinimg.com/736x/1b/d5/fc/1bd5fc2fa8cdd6fc356945284f5aeb3f--go-on-happiness.jpg" alt="My Picture"/>
        </div>
        <h1>My Name is Guts</h1>
        <h2 className="mb-10 text-gray-500">Mercenary</h2>
      </div>
      
        <p className="border rounded p-3 max-w-3xl">
          I used to wander from battlefield to battlefield, living off the spoils of a won battle,
          or having to run for my life if I was on the losing side. I haven't fought for money in
          a while (busy), so I thought I'd come back. That doesn't mean I've lost my skills, though
          (see resume).
        </p>
    </div>
  );
}
