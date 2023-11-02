import React from 'react'
import './ClientFormHelp.scss'

import ArrowBack from '../assets/arrowBack.png'

function ClientFormHelp({ onToggle }) {
	const toggleHintLocal = () => {
		onToggle()
	}

	return (
		<div className='formHelp-container'>
			<h2>Что написать в сообщении или файле?</h2>
			<div className='formHelp-item'>
				<div className='formHelp-number'>1.</div>
				<p>
					<span>Чем вы занимаетесь?</span>
					<br />
					Расскажите о своей компании. Как работаете, на чем зарабатываете?{' '}
					<br />
					Кто ваши конкуренты?
					<br /> Чем вы от них отличаетесь?
				</p>
			</div>
			<div className='formHelp-item'>
				<div className='formHelp-number'>2.</div>
				<p>
					<span>В чем ваша задача?</span>
					<br /> Чего хотите достичь в ближайшем будущем?
					<br /> Что вам мешает?
				</p>
			</div>
			<div className='formHelp-item'>
				<div className='formHelp-number'>3.</div>
				<p>
					<span> Каким вы видите решение задачи?</span>
					<br /> Как планируете достичь своих целей? <br />
					Какие решения пробовали раньше?
				</p>
			</div>
			<div className='formHelp-item'>
				<div className='formHelp-number'>4.</div>
				<p>
					<span>Какие у вас ожидания от результата?</span>
					<br /> В каком виде вы хотите видеть решение вашей задачи? <br />В
					какой срок? <br />
					Почему он важен? <br />
					На что это должно быть похоже?
				</p>
			</div>
			<div className='formHelp-item'>
				<div className='formHelp-number'>5.</div>
				<p>
					<span> Сколько денег планируете потратить?</span>
					<br />
					Каков ваш бюджет? <br />
					Почему вы готовы потратить именно такую сумму?
				</p>
			</div>{' '}
			<button className='form-btn' type='button' onClick={toggleHintLocal}>
				<img src={ArrowBack} alt='Иконка возвращения' />
				Вернуться к заполнению
			</button>
		</div>
	)
}

export default ClientFormHelp
