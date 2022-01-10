import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/LoadingAnimation';
import './styles.css';
import AnimatedNavbar from '../AnimatedNavbar';

const url = 'http://6krsrg7yudy9cmrg.myfritz.net';

function Printer() {
	const [loading, setLoading] = useState(true);
	const [isActive, setisActive] = useState(false);
	useEffect(() => {
		axios
			.get(`${url}/sockjs/info`)
			.then((data) => {
				setisActive(true);
				setLoading(false);
			})
			.catch((error) => {
				setisActive(false);
				setLoading(false);
			});
	}, []);
	if (loading)
		return (
			<div className={'wrapper-printer'}>
				<Loading />
			</div>
		);

	return (
		<>
			<AnimatedNavbar />
			<div className={'printer-wrapper'}>
				{isActive ? (
					<div className='printer-section'>
						<h1>3d Drucker ist einsatzbereit</h1>
						<Button
							variant='outline-success'
							href={url}
							target='_blank'
							size='lg'>
							Redirect
						</Button>
					</div>
				) : (
					<div className='printer-section printer-notActive'>
						<h1>Important: </h1>
						<h1>UNSER 3D DRUCKER IST GERADE LEIDER NICHT AKTIV.</h1>
					</div>
				)}
			</div>
		</>
	);
}

export default Printer;
