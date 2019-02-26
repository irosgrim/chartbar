import React, { Component } from 'react';

class Singlebar extends Component {
	getStyle = () => {};
	render() {
		let totalvalue =
			this.props.values.left.value + this.props.values.right.value;
		let leftbarsize = Math.round(
			(this.props.values.left.value * 100) / totalvalue
		);
		let rightbarsize = Math.round(100 - leftbarsize);

		let left = {
			backgroundColor: `${this.props.values.left.color}`,
			width: `${leftbarsize}%`
		};
		let right = {
			backgroundColor: `${this.props.values.right.color}`,
			width: `${rightbarsize}%`
		};

		return (
			<div className="bar-wrapper">
				<header>
					<h2>{this.props.values.title} </h2>
					<h2>
						Total:
						{Number(this.props.values.left.value) +
							Number(this.props.values.right.value)}
					</h2>
				</header>

				<section className="bar">
					<div className="bar-percent " style={left}>
						<p className="left">{left.width}</p>
					</div>
					<div className="bar-percent" style={right}>
						<p className="right">{right.width}</p>
					</div>
				</section>
			</div>
		);
	}
}
export default Singlebar;
