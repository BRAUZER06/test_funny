import React, { useState } from 'react'
import './ClientForm.scss'

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const phoneRegex = /^\+?\d{10,15}$/

function ClientForm({ onToggle }) {
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		phone: '',
		email: '',
		message: '',
		file: null,
	})

	const isEmailValid = formData.email.match(emailRegex)
	const isPhoneValid = formData.phone.match(phoneRegex)

	const [isAgreed, setIsAgreed] = useState(false)

	const isFormValid = () => {
		return (
			formData.name &&
			formData.company &&
			formData.phone &&
			formData.email &&
			(formData.message || formData.file) &&
			isAgreed &&
			isPhoneValid &&
			isEmailValid
		)
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleFileChange = event => {
		setFormData(prevData => ({ ...prevData, file: event.target.files[0] }))
	}
	const handleFileDelete = () => {
		setFormData(prevData => ({ ...prevData, file: null }))
	}

	const toggleHintLocal = () => {
		onToggle()
	}

	return (
		<div className='form-container'>
			<h1>Анкета для новых клиентов AGIMA</h1>
			<form className='form-layout'>
				<input
					className='form-input'
					type='text'
					placeholder='Ваше имя'
					name='name'
					value={formData.name}
					onChange={handleInputChange}
				/>
				<input
					className='form-input'
					type='text'
					placeholder='Компания'
					name='company'
					value={formData.company}
					onChange={handleInputChange}
				/>
				<input
					className={`form-input ${
						!isPhoneValid && formData.phone ? 'invalid' : ''
					}`}
					type='tel'
					placeholder='Телефон'
					name='phone'
					value={formData.phone}
					onChange={handleInputChange}
				/>
				{!isPhoneValid && formData.phone && (
					<span className='error-text'>Введите корректный номер телефона</span>
				)}
				<input
					className={`form-input ${
						!isEmailValid && formData.email ? 'invalid' : ''
					}`}
					type='email'
					placeholder='Электронная почта'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
				/>
				{!isEmailValid && formData.email && (
					<span className='error-text'>Введите корректный e-mail</span>
				)}
				<div className='form-textarea-container'>
					<textarea
						className='form-textarea'
						placeholder='Напишите текст обращения'
						name='message'
						value={formData.message}
						onChange={handleInputChange}
						disabled={formData.file}
					/>
					<span className='form-question-icon' onClick={toggleHintLocal}>
						?
					</span>
				</div>
				<label
					className={`form-file-label ${
						formData.message ? 'disabled-text' : ''
					}`}
				>
					или прикрепите файл
					<input
						className='form-file-input'
						type='file'
						onChange={handleFileChange}
						disabled={formData.message}
					/>
				</label>
				{formData.file && (
					<div className='attached-file'>
						<span>{formData.file.name}</span>
						<button onClick={handleFileDelete}>Удалить</button>
					</div>
				)}
				<div className='form-agreement-section'>
					<label className='form-checkbox-label'>
						<input
							type='checkbox'
							className='form-custom-checkbox'
							checked={isAgreed}
							onChange={() => setIsAgreed(prev => !prev)}
						/>
						<span className='form-agree-text'>
							согласен на обработку моих <a href='#'>персональных данных</a>
						</span>
					</label>
					<button
						className={`form-submit-btn ${isFormValid() ? 'valid' : ''}`}
						type='submit'
						disabled={!isFormValid()}
					>
						Отправить
					</button>
				</div>
			</form>
		</div>
	)
}

export default ClientForm
