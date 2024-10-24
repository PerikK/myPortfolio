export default function ProjectModal({ isOpen, onClose, images }) {
	const handleEscape = (event) => {
		if (event.key === 'Escape') {
			onClose()
		}
	}

	if (isOpen) {
		document.addEventListener('keydown', handleEscape)
		console.log(images);
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
			<div className='bg-gray-300 bg-opacity-30 rounded-lg shadow-lg p-4 max-w-9xl h-4/5 m-3'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-gray-500'
				>
					Press Esc or click -&gt; ✖
				</button>
				<div className='m-3 md:grid md:grid-cols-2 md:gap-4'>
					{images.map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Project Image ${index}`}
							className='rounded-lg my-8 '
						/>
					))}
				</div>
			</div>
		</div>
	)
}
