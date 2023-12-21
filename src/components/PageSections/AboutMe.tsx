function AboutMe() {
  return (
    <div className="h-screen flex items-center justify-between bg-slate-300">
      <section id="about" className=" m-24">
        <h2 className="mb-16 text-3xl">About Me:</h2>
        <p className="mb-8 text-lg max-w-prose">
          After spending the first 11 years of my career working in Recruiting &
          Human Resources primarily focusing on recruiting technical talent, I
          finally decided to take the plunge myself to become a Software
          Engineer! Thankfully, the company I worked for had a great platform to
          help its team members transition to new roles. Initially, I was mostly
          self taught, going through a few different online coding programs.
          Once I formally moved into Product Engineering at work, I was also
          able to go through an extensive mentorship program designed to level
          up its junior engineers.
        </p>
        <p className="mb-8 text-lg max-w-prose">
          Since then I haven't looked back, and I've worked on websites,
          internal services, batch jobs, you name it! I'm super grateful for the
          opportunity I had to become and engineer, and I've loved every second
          of it! Here's to learning more!
        </p>
      </section>
      <section className="m-24">
        <img
          src="/joshsikes/assets/profilepic.jpg"
          alt="Josh Sikes Headshot Photo"
          className="rounded-full border-4 border-black"
        />
      </section>
    </div>
  );
}

export { AboutMe };
