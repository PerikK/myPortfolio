import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

export default function Navbar() {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	return (
		<div className='fixed w-full h-[60px] md:h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<h1 className=' font-thin text-xl md:text-2xl italic font-serif'>
					PK
				</h1>
			</div>
			{/* menu */}
			<ul className='hidden md:flex gap-x-4 md:gap-x-8'>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='projects' smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className='py-4 text-3xl md-text-4xl'>
					<Link
						onClick={handleClick}
						to='home'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='py-4 text-3xl md-text-4xl'>
					{' '}
					<Link
						onClick={handleClick}
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-4 text-3xl md-text-4xl'>
					{' '}
					<Link
						onClick={handleClick}
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-4 text-3xl md-text-4xl'>
					{' '}
					<Link
						onClick={handleClick}
						to='projects'
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className='py-4 text-3xl md-text-4xl'>
					{' '}
					<Link
						onClick={handleClick}
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* Social icons */}
			<div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.linkedin.com/in/periklis-kafchitsas-482467234/'
							target='_blank'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://github.com/PerikK'
							target='_blank'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://app.enhancv.com/share/00cfdb46/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'
							target='_blank'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
						<Link
							className='flex justify-between items-center w-full text-gray-300'
							to='contact'
							smooth={true}
							duration={500}
						>
							Email <HiOutlineMail size={30} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
