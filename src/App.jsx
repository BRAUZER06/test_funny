import React, { useState } from 'react'
import './App.css'

import ClientForm from './forms/ClientForm'
import ClientFormHelp from './components/ClientFormHelp'
import ClientInfo from './components/ClientInfo'

function App() {
	const [showHint, setShowHint] = useState(false)

	const toggleHint = () => {
		setShowHint(prev => !prev)
	}

	return (
		<div className='App'>
			<div className='form-background'>
				<div className='content-wrapper'>
					<ClientInfo />
					<div className={`app-form-wrapper ${showHint ? 'hint-active' : ''}`}>
						<div className='app-flipper'>
							<div className='app-front'>
								<ClientForm onToggle={toggleHint} />
							</div>
							<div className='app-back'>
								<ClientFormHelp onToggle={toggleHint} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
