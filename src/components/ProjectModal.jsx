export default function ProjectModal({ isOpen, onClose, children }) {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
			<div className='relative p-4 bg-white rounded-md shadow-lg max-w-full max-h-full overflow-auto'>
				<button
					className='absolute top-0 right-0 m-2 text-2xl text-black bg-white rounded-full p-1'
					onClick={onClose}
				>
					X
				</button>
				{children}
			</div>
		</div>
	)
}
