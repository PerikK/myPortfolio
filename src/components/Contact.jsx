import { Link } from 'react-scroll'
import {  HiArrowNarrowLeft } from 'react-icons/hi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()
		console.log(form.current)

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text)
					alert('Message sent successfully!')
				},
				(error) => {
					console.log(error.text)
					alert('Failed to send the message.')
				}
			)
	}

	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
		>
			<form
				ref={form}
				onSubmit={sendEmail}
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'>Send me a message</p>
				</div>
				<input
					className='bg-[#ccd6f6] text-black font-semibold  p-2'
					type='text'
					placeholder='Name'
					name='user_name'
					required
				/>
				<input
					className='my-4 p-2 bg-[#ccd6f6] text-black font-semibo'
					type='email'
					placeholder='Email'
					name='user_email'
					required
				/>
				<textarea
					className='bg-[#ccd6f6] text-black font-semibo p-2'
					name='message'
					rows='10'
					placeholder='Message'
					required
				></textarea>
				<button
					type='submit'
					className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'
				>
					Let's Collaborate
				</button>
			<div>
				<Link
					to='home'
					smooth
					duration={500}
					className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
				>
					<span className='group-hover:rotate-90 duration-300'>
						<HiArrowNarrowLeft size={25} className='mr-3' />
					</span>
					Back to top
				</Link>
			</div>
			</form>
		</div>
	)
}
