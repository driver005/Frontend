import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NavbarItem from './components/Navbar/NavbarItem';
import { Flipper } from 'react-flip-toolkit';
import DropdownContainer from './components/DropdownContainer';
import CompanyDropdown from './components/DropdownContents/CompanyDropdown';
import DevelopersDropdown from './components/DropdownContents/DevelopersDropdown';
import ProductsDropdown from './components/DropdownContents/ProductsDropdown';
import LinksDropdown from './components/DropdownContents/Importantslinks';

const navbarConfig = [
	//{ title: "Products", dropdown: ProductsDropdown },
	{ title: 'Tools', dropdown: DevelopersDropdown },
	//{ title: "Company", dropdown: CompanyDropdown },
	{ title: 'Links', dropdown: LinksDropdown },
];

export default class AnimatedNavbar extends Component {
	state = {
		activeIndices: [],
	};

	resetDropdownState = (i) => {
		this.setState({
			activeIndices: typeof i === 'number' ? [i] : [],
			animatingOut: false,
		});
		delete this.animatingOutTimeout;
	};

	onMouseEnter = (i) => {
		if (this.animatingOutTimeout) {
			clearTimeout(this.animatingOutTimeout);
			this.resetDropdownState(i);
			return;
		}
		if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
			return;

		this.setState((prevState) => ({
			activeIndices: prevState.activeIndices.concat(i),
			animatingOut: false,
		}));
	};

	onMouseLeave = () => {
		this.setState({
			animatingOut: true,
		});
		this.animatingOutTimeout = setTimeout(
			this.resetDropdownState,
			this.props.duration,
		);
	};

	render() {
		const { duration } = this.props;
		let CurrentDropdown;
		let PrevDropdown;
		let direction;

		const currentIndex =
			this.state.activeIndices[this.state.activeIndices.length - 1];
		const prevIndex =
			this.state.activeIndices.length > 1 &&
			this.state.activeIndices[this.state.activeIndices.length - 2];

		if (typeof currentIndex === 'number')
			CurrentDropdown = navbarConfig[currentIndex].dropdown;
		if (typeof prevIndex === 'number') {
			PrevDropdown = navbarConfig[prevIndex].dropdown;
			direction = currentIndex > prevIndex ? 'right' : 'left';
		}

		return (
			<Flipper
				flipKey={currentIndex}
				spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}>
				<Navbar onMouseLeave={this.onMouseLeave}>
					{navbarConfig.map((n, index) => {
						return (
							<NavbarItem
								key={n.title}
								title={n.title}
								index={index}
								onMouseEnter={this.onMouseEnter}>
								{currentIndex === index && (
									<DropdownContainer
										direction={direction}
										animatingOut={this.state.animatingOut}
										duration={duration}>
										<CurrentDropdown />
										{PrevDropdown && <PrevDropdown />}
									</DropdownContainer>
								)}
							</NavbarItem>
						);
					})}
				</Navbar>
			</Flipper>
		);
	}
}
