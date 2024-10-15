import {
	HtmlLogo,
	JsLogo,
	ReactLogo,
	CssLogo,
	NodeLogo,
	ExpressLogo,
	PostgreLogo,
	PrismaLogo,
	GitLogo,
	TsLogo,
	NextLogo,
	PyLogo,
	PhpLogo,
	AngularLogo,
	MongoDbLogo,
	DockerLogo,
} from '../assets/icons/Logos.jsx'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Skills() {
	const skillLogos = {
		HTML: HtmlLogo,
		CSS: CssLogo,
		JavaScript: JsLogo,
		React: ReactLogo,
		NodeJS: NodeLogo,
		ExpressJS: ExpressLogo,
		PostgreSQL: PostgreLogo,
		'Prisma ORM': PrismaLogo,
		'Git & GitHub': GitLogo,
		TypeScript: TsLogo,
		NextJS: NextLogo,
		Python: PyLogo,
		PHP: PhpLogo,
		Angular: AngularLogo,
		MongoDB: MongoDbLogo,
		Docker: DockerLogo,
	}

	const skillsList = [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'NodeJS',
		'ExpressJS',
		'PostgreSQL',
		'Prisma ORM',
		'Git & GitHub',
		'Docker',
		'Agile',
	]

	const futuresSkills = [
		'TypeScript',
		'NextJS',
		'Angular',
		'PHP',
		'MongoDB',
	]

	const PlaceholderLogo = () => (
		<div
			style={{
				width: '48px',
				height: '48px',
				backgroundColor: '#0a192f',
			}}
		/>
	)

	const renderSkills = (list) => {
		return list.map((skill, i) => {
			const LogoComponent = skillLogos[skill] || PlaceholderLogo

			return (
				<div
					key={i}
					className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
				>
					<p className='my-4'>
						{/* {LogoComponent && <LogoComponent />} {skill} */}
						<LogoComponent />
						{skill}
					</p>
				</div>
			)
		})
	}

	const renderFutureSkills = (list) => {
		return list.map((skill, i) => {
			const LogoComponent = skillLogos[skill] || PlaceholderLogo

			return (
				<div
					key={i}
					className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
				>
					<p className='my-4'>
						{/* {LogoComponent && <LogoComponent />} {skill} */}
						<LogoComponent />
						{skill}
					</p>
				</div>
			)
		})
	}

	return (
		<div
			name='skills'
			className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'
		>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
				<div className='w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
						Skills
					</p>
					<p className='py-4 text-xl sm:text-2xl text-center'>
						I enjoy diving into and learning new things. This is a
						list of technologies I have worked with
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
					{renderSkills(skillsList)}
				</div>
				<div className='w-full justify-center items-center mb-7'>
					<div className='w-full flex justify-center items-center flex-col mb-7'>
						<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
							Future Skills
						</p>
						<p className='py-4 text-xl sm:text-2xl text-center'>
							And here is a list of skills I plan to acquire in the
							next months.
						</p>
						<div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-2'>
							{renderFutureSkills(futuresSkills)}
						</div>
					</div>
					<p className='pt-2 text-center'>
						*All logos by{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://icons8.com'
							className='text-cyan-400 hover:text-cyan-300'
						>
							Icons8
						</a>
					</p>
				</div>
				<div>
					<Link
						to='projects'
						smooth
						duration={500}
						className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
					>
						Projects
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight size={25} className='ml-3' />
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
