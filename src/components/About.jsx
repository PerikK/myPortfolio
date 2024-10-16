import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function About() {
	return (
		<>
			<div
				name='about'
				id='about'
				className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'
			>
				<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
					<div className='pb-8 text-center'>
						<p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
							About
						</p>
					</div>

					<div className='bg-cyan-800 rounded-md p-8 mt-4'>
						<div className='grid sm:grid-cols-2 gap-8'>
							<div className='text-2xl sm:text-3xl font-bold'>
								<p>
									Hi, I’m Periklis Kafchitsas. Nice to have you visit
									my portfolio . Feel free to take a look around and
									see if we could work together.
								</p>
							</div>
							<div className='text-base sm:text-lg'>
								<p>
									I 've been working for 20 years as an IT/Network
									administrator and support technician. In this
									period, I have worked for various companies as well
									as a freelancer. <br /> Last year I decided to make
									a turn in my career and become a Full Stack Software
									Developer. <br />I recently graduated from an
									intensive <br /> 6-month,
									<span className='font-sans'>
										{' '}
										( {'>'} 900 hours ) course at{' '}
									</span>
									<a
										href='https://boolean.co.uk'
										className='text-cyan-300 hover:text-cyan-100 transition-colors'
									>
										Boolean UK
									</a>
									, where I gained hands-on experience in front and
									back-end technologies, building full-stack projects,
									working with RESTful APIs, React, ExpressJS, PostgreSQL,
									managing team simulations, documentation, using
									Agile methodologies. I love creating useful
									applications and especially enjoy creating Back-ends
									and APIs. I also love to work in teams and I feel
									great to work in an environment with clearly
									outlined goals that I do my best to achieve.
								</p>
							</div>
						</div>
					</div>
					<div>
						<Link
							to='skills'
							smooth
							duration={500}
							className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
						>
							Skills
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight size={25} className='ml-3' />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
