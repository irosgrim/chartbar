import React, { Component } from 'react';
import Multibar from './components/Multibar';
import './components/App.css';

class App extends Component {
	loading() {
		return new Promise(resolve => setTimeout(resolve, 1000));
	}

	componentDidMount() {
		this.loading().then(() => {
			const loading = document.getElementById('loading');
			if (loading) {
				loading.classList.add('content-available');
				setTimeout(() => {
					loading.outerHTML = '';
				}, 500);
			}
		});
	}

	render() {
		const values = [
			{
				title: 'Data1',
				left: { color: '#007cff', value: 48 },
				right: { color: '#ffe944', value: 240 }
			},
			{
				title: 'Data2',
				left: { color: '#007cff', value: 123 },
				right: { color: '#ffe944', value: 123 }
			},
			{
				title: 'Data3',
				left: { color: '#007cff', value: 10 },
				right: { color: '#a1e104', value: 123 }
			}
		];
		return (
			<div className="App">
				<h3>Charts</h3>
				<Multibar values={values} />
			</div>
		);
	}
}

export default App;
