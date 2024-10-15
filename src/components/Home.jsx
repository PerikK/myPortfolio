import { HiArrowNarrowRight } from 'react-icons/hi'
import me from '../assets/me.jpg'
import { Link } from "react-scroll"


export default function Home() {
    return (
        <div
            name="home"
            className="min-h-screen w-screen bg-[#0a192f] pt-20 px-4 overflow-y-auto"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Welcome to my Portfolio!
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        I am Periklis. <br className="md:hidden" /> A Full Stack Software Developer.
                    </h2>
                     <div className="md:hidden w-40 h-40 mb-6">
                        <img
                            src={me}
                            alt="my profile"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-500 py-4 max-w-md text-base sm:text-lg">
                        I just finished an intensive 6-month <br className="hidden sm:inline" />
                        <span className='font-sans'>
                            ( {'>'} 900 hours ) course at <a href="https://boolean.co.uk" className="text-blue-400 hover:text-blue-300">Boolean UK</a>.
                        </span>
                    </p>
                    <p className='text-xl mb-2'>In this period, I learned how to use a plethora of development technologies in order to:</p>
                    <ul className='text-sm sm:text-base list-disc list-inside mb-4 space-y-1 text-left'>
                        <li>Translate user stories into software requirements.</li>
                        <li>Build Full stack projects from conception to design to implementation.</li>
                        <li>Develop Front end applications, creating responsive web pages using React and JavaScript.</li>
                        <li>Build Back end applications, using RESTful APIs, Express.JS, PostgreSQL, Prisma ORM and Node.js.</li>
                        <li>Use Git workflow, CLI, and modern development technologies.</li>
                    </ul>
                    <p className='text-lg font-semibold mb-2'>In Addition I:</p>
                    <ul className='text-sm sm:text-base list-disc list-inside mb-4 space-y-1 text-left'>
                        <li>Worked on two team simulations, working on existing codebases.</li>
                        <li>Managed documentation for backend usage in .YML format.</li>
                        <li>Undertook Scrum Master role using Kanban and agile methodologies.</li>
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
                 <div className="hidden md:block w-1/3 mt-8 md:mt-0">
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-full mx-auto w-2/3 md:w-full max-w-xs"
                    />
                </div>
            </div>
        </div>
    )
}