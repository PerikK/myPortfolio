import { HiArrowNarrowRight } from 'react-icons/hi'
import me from '../assets/me.jpg'
import { Link } from "react-scroll"


export default function Home() {
    return (
        <div
            name="home"
            className="h-screen w-screen bg-[#0a192f]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white">
                        Welcome to my Portfolio!
                    </h1> <br />
                    <h2 className="text-2xl sm:text-5xl font-bold text-white">
                        I am Periklis. A Full Stack Developer.
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md text-xl">
                        I just finished an intensivw 6-month <br />
                        <section className='font-sans'>
                            ( {'>'} 900 hours )
                        course at <a href="https://boolean.co.uk">Boolean UK</a>.
                        </section>
                    </p>
                    <p className='text-2xl'>In this period, I learned how to use a plethora of development technologies in order to:  </p>
                    <ul className='text-xl'>
                        <li>-Translate user stories into software requirements.</li>
                        <li>-Build Full stack projects from conception to design to implementation.
                        </li>
                        <li>-Develop Front end applications, creating responsive web pages using React and JavaScript.
                        </li>
                        <li>-Build Back end applications, using RESTful APIs, Express.JS, PostgreSQL, Prisma ORM and Node.js.
                        </li>
                        <li>-Use Git workflow, CLI, and modern development technologies.
                        </li>
                        <li><p>- - In Addition I:</p></li>
                        <li>-Worked on two team simulations, working on existing codebases.
                        </li>
                        <li>-Managed documentation for backend usage in .YML format.
                        </li>
                        <li>-Undertook Scrum Master role using Kanban and agile methodologies.</li>
                    </ul>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-full mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    )
}