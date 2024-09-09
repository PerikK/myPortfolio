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
	MongoDbLogo
} from '../assets/icons/Logos.jsx'

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
		MongoDB: MongoDbLogo
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
		'TDD',
		'OOP',
		'Agile',
	]

	const futuresSkills = [
		'TypeScript',
		'NextJS',
		'Angular',
		'PHP',
		'MongoDB'
    ]
    
    const PlaceholderLogo = () => (
	<div style={{ width: '48px', height: '48px', backgroundColor: '#0a192f' }} />
);


    
    const renderSkills = (list) => {
		return list.map((skill, i) => {
			const LogoComponent = skillLogos[skill] || PlaceholderLogo;
			
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
			const LogoComponent = skillLogos[skill] || PlaceholderLogo;
			
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
			className='w-full h-screen bg-[#0a192f] text-gray-300'
		>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className=' w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center sm: mt-96 '>
						Skills
					</p>
					<p className='py-4 text-2xl'>
						I enjoy diving into and learning new things. This, is a
						list of technologies I have worked with
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					{renderSkills(skillsList)}
				</div>
				<div className=' w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>
						Future Skills
					</p>
					<p className='py-4 text-2xl'>
						And here is a list with skills I plan to learn in the next
						months
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					{renderFutureSkills(futuresSkills)}
				</div>
            <p>*All logos by <a target="_blank" href="https://icons8.com">Icons8</a> </p>
            </div>
		</div>
	)
}
