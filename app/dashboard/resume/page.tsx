export default function Resume() {
  return (
    <div className="m-5 flex flex-col items-center">
      <header className="flex justify-center text-3xl mb-5">
        <h1>Resume</h1>
      </header>

      <h2 className="resumeSection">Career Objective</h2>
      <p className="mb-5">Make money.</p>

      <h2 className="resumeSection">Education</h2>
      <p className="mb-5">None</p>

      <h2 className="resumeSection">Experience</h2>
      <p>Mercenary - 15 years</p>
      <p className="mb-5">Raider's Captain of the Band of the Hawk - 3 years</p>


      <h2 className="resumeSection">Skills</h2>
      <p>Master Swordsman</p>
      <p className="mb-5">Master Marksman</p>

      <h2 className="resumeSection">Achievements</h2>
      <p>Killed 100 men</p>
      <p>Killed at least 10 apostles</p>
      <p>Killed a sea god</p>
      <p>Killed five evil gods</p>
    </div>
  );
}