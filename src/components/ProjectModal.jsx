export default function ProjectModal({ isOpen, onClose, images }) {
	const handleEscape = (event) => {
		if (event.key === 'Escape') {
			onClose()
		}
	}

	if (isOpen) {
		document.addEventListener('keydown', handleEscape)
	}

	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}
	if (!isOpen) return null

	return (
		<div
			className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
			onClick={handleBackdropClick}
		>
			<div className='bg-gray-300 bg-opacity-30 rounded-lg shadow-lg p-4 max-w-9xl h-full'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-gray-500'
				>
					✖
				</button>
				<div className='grid grid-cols-2 gap-4'>
					{images.map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Project Image ${index}`}
							className='rounded-lg mx-auto w-3/4 md:w-full h-3/4 md:h-full'
						/>
					))}
				</div>
			</div>
		</div>
	)
}
