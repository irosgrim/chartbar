import React, { Component } from 'react';
import Singlebar from './Singlebar';

class Multibar extends Component {
	render() {
		let i = 1;
		const bar = this.props.values.map(data => {
			return <Singlebar values={data} key={i++} />;
		});
		return <div className="multibar">{bar}</div>;
	}
}
export default Multibar;
