import { useState } from 'react'
import code from '../assets/code2.jpg'
import ProjectModal from './ProjectModal'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'
import be1 from '../assets/project_images/cm_be/be1.png'
import be2 from '../assets/project_images/cm_be/be2.png'
import fe1 from '../assets/project_images/cm_fe/fe1.png'
import fe2 from '../assets/project_images/cm_fe/fe2.png'
import fe3 from '../assets/project_images/cm_fe/fe3.png'
import fe4 from '../assets/project_images/cm_fe/fe4.png'
import sl1 from '../assets/project_images/shoping-list/sl1.png'

export default function Projects() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedImages, setSelectedImages] = useState([])

	const beImages = [be1, be2]
	const feImages = [fe1, fe3, fe2, fe4]

	const openModal = (images) => {
		setSelectedImages(images)
		setIsModalOpen(true)
	}

	return (
		<div
			name='projects'
			className='w-full md:h-screen text-gray-300 bg-[#0a192f]'
		>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500 sm: sm: mt-6 pt-6 '>
						Projects
					</p>
					<p className='py-6 text-2xl'>
						Check out some of my projects
					</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					<div
						style={{ backgroundImage: `url(${fe3})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Cohort Manager Front-End
							</span>
							<p className='text-center text-sm pt-2'>
								The front-end of a school management app, that allows
								students and teachers to communicate, grade and
								arrange classes. Built with React in an Agile setting
							</p>
							<div className='pt-8 text-center'>
								<button
									className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
									onClick={() => openModal(feImages)}
								>
									Demo
								</button>
								<a
									href='https://github.com/boolean-uk/team-dev-client-c12'
									target='_blank'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${be2})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Cohort manager back-end.
							</span>
							<p className='text-center text-sm pt-2'>
								The back-end of a school management app. It allows for
								authentication account creation and management. Built
								with Express, Postgress, and Prisma in an Agile
								setting
							</p>
							<div className='pt-8 text-center'>
								<button
									className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
									onClick={() => openModal(beImages)}
								>
									Demo
								</button>
								<a
									href='https://github.com/boolean-uk/team-dev-server-c12'
									target='_blank'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${sl1})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Shopping-List
							</span>
							<p className='text-center text-sm pt-2'>
								A nice Shopping List optimized for mobile-phones where
								it is most likely to be used. Built with React and
								Tailwindcss.
							</p>
							<div className='pt-8 text-center'>
								<a
									href='https://btr-shopping-list.netlify.app'
									target='_blank'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/PerikK/shopping_list.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Coming Soon (My Movies DB)
							</span>
							<p className='text-center text-sm pt-2'>
								A full stack app (Express - React - PostgreSQL) to
								rate and comment on movies and create your own
								collection
							</p>
							<div className='pt-8 text-center'>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Coming Soon (A basket for an online shop)
							</span>
							<p className='text-center text-sm pt-2'>
								A full blown, real world, online market, basket
							</p>
							<div className='pt-8 text-center'>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className=' text-lg font-bold text-white tracking-wider'>
								Coming Soon (An Artist's Portfolio)
							</span>
							<p className='text-center text-sm pt-2'>
								A real world full stack app (Express - React -
								PostgreSQL) where a painter will showcase and sell
								their art.
							</p>
							<div className='pt-8 text-center'>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<ProjectModal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						images={selectedImages}
					/>
				</div>
				<div>
					<Link
						to='contact'
						smooth
						duration={500}
						className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
					>
						Contact Me
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight size={25} className='ml-3' />
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
