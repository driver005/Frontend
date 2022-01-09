import React, { useState } from 'react';
import Commoninput from '../../Common';

const Search = ({ onSearch }) => {
	const [search, setSearch] = useState('');

	const onInputChange = (value) => {
		setSearch(value);
		onSearch(value);
	};
	return (
		<Commoninput
			inputname='search'
			label='Search'
			backgroundcolor={'#1b1e3f'}
			color={'#a0a0a0'}
			showlabel={search}
			inputvalue={search}
			inputid='Search'
			inputisrequired
			onChange={(e) => onInputChange(e.target.value)}
			inputtype='text'
			style={{ width: '240px' }}
		/>
	);
};

export default Search;
