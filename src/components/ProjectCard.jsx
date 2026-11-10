export default function ProjectCard({ project, onOpenModal }) {
	const bgImage = project.images?.[0];

	return (
		<div
			style={{ backgroundImage: `url(${bgImage})` }}
			className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
		>
			{/* Hover Effects */}
			<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col px-2 py-2'>
				<span className='text-sm sm:text-base font-bold text-white tracking-wider text-center break-words line-clamp-2'>
					{project.title}
				</span>
				<p className='text-center text-xs pt-1 px-1 leading-snug line-clamp-3'>
					{project.description}
				</p>
				<div className='pt-2 text-center'>
					{project.links.map((link, i) =>
						link.type === 'modal' ? (
							<button
								key={i}
								className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
								onClick={() => onOpenModal(project.images)}
							>
								{link.label}
							</button>
						) : (
							<a
								key={i}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									{link.label}
								</button>
							</a>
						),
					)}
				</div>
			</div>
		</div>
	);
}
