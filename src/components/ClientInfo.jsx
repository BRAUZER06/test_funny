import React from 'react'
import './ClientInfo.scss'

function ClientInfo() {
	return (
		<div className='clientInfo-container'>
			<h2>Вспомогательная информация для обращения</h2>
			<div className='clientInfo-item'>
				<div className='clientInfo-number'>1.</div>
				<p>
					<span>Расскажите о своей компании?</span>
					<br />
					Как работаете, на чем зарабатываете? <br />
					Кто ваши конкуренты? Чем вы от них отличаетесь?
				</p>
			</div>
			<div className='clientInfo-item'>
				<div className='clientInfo-number'>2.</div>
				<p>
					<span>В чем ваша задача?</span>
					<br /> Чего хотите достичь в ближайшем будущем?
					<br /> Что вам мешает?
				</p>
			</div>
			<div className='clientInfo-item'>
				<div className='clientInfo-number'>3.</div>
				<p>
					<span> Каким вы видите решение задачи?</span>
					<br /> Как планируете достичь своих целей? <br />
					Какие решения пробовали раньше?
				</p>
			</div>
			<div className='clientInfo-item'>
				<div className='clientInfo-number'>4.</div>
				<p>
					<span>Какие у вас ожидания от результата?</span>
					<br /> В каком виде вы хотите видеть решение вашей задачи? <br />В
					какой срок? <br />
					Почему он важен? <br />
					На что это должно быть похоже?
				</p>
			</div>
			<div className='clientInfo-item'>
				<div className='clientInfo-number'>5.</div>
				<p>
					<span> Сколько денег планируете потратить?</span>
					<br />
					Каков ваш бюджет? <br />
					Почему вы готовы потратить именно такую сумму?
				</p>
			</div>{' '}
		</div>
	)
}

export default ClientInfo
