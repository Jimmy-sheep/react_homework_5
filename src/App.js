import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
	return (
		<div className="App">
		<h1 style="font-family: 'Roboto', serif;">Github</h1>
		<div id="pic" style="font-family: 'Roboto', serif;"></div>
		<div id="name" style="font-family: 'Roboto', serif;"></div>
		<div id="type" style="font-family: 'Roboto', serif;"></div>
		<span class="material-icons">
			location_on
		</span>
		<div id="loc" style="font-family: 'Roboto', serif;"></div>
		<span class="material-icons">
			email
		</span>
		<div id="email" style="font-family: 'Roboto', serif;"></div>
		<span class="material-icons">
			link
		</span>
		<div id="link" style="font-family: 'Roboto', serif;"></div>
        </div>
	);
}

export default App;
