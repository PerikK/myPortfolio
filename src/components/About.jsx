export default function About() {
    return (
        <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Periklis Kafchitsas, nice to meet you. Fell free to take a 
                look around and see if we could work together.
              </p>
            </div>
            <div>
              <p>                
                I'm Periklis. A Full Stack Developer who recently completed an intensive 6-month, 900+ hours course at Boolean UK. I gained hands-on experience in front-end and back-end technologies, building full-stack projects, working with RESTful APIs, React, PostgreSQL, and managing team simulations, documentation, and agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}




