import { useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import projects from '../data/projects';

export default function Projects() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImages, setSelectedImages] = useState([]);

	const openModal = images => {
		setSelectedImages(images);
		setIsModalOpen(true);
	};

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
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							project={project}
							onOpenModal={openModal}
						/>
					))}
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
	);
}
