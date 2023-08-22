import numeral from 'numeral';
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../components/LoadingAnimation';
import { TableHeader, Pagination, Search } from '../../components/Table';
import './styles.css';

const DataTable = () => {
	const comments = useSelector((state) => state.table);
	if (!comments) return <Loading />;

	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState('');
	const [sorting, setSorting] = useState({ field: '', order: '' });
	const [commentsData, setcommentsData] = useState(comments);

	const ITEMS_PER_PAGE = 50;

	const headers = [
		{ name: 'No', field: 'market_cap_rank', sortable: true },
		{ name: 'Name', field: 'name', sortable: true },
		{ name: 'Symbol', field: 'symbol', sortable: true },
		{ name: 'Current Price', field: 'current_price', sortable: true },
		{ name: 'Total Volume', field: 'total_volume', sortable: true },
		{ name: 'Market Cap', field: 'market_cap', sortable: true },
		{
			name: 'Price change 24h',
			field: 'price_change_percentage_24h',
			sortable: true,
		},
	];

	useEffect(() => {
		let computedComments = comments;
		if (search) {
			computedComments = computedComments.filter(
				(comment) =>
					comment.name?.toLowerCase()?.includes(search.toLowerCase()) ||
					comment.email?.toLowerCase()?.includes(search.toLowerCase()),
			);
		}

		setTotalItems(computedComments.length);

		//Sorting comments
		if (sorting.field) {
			const reversed = sorting.order === 'asc' ? 1 : -1;
			if (
				sorting.field === 'market_cap_rank' ||
				sorting.field === 'current_price' ||
				sorting.field === 'total_volume' ||
				sorting.field === 'market_cap' ||
				sorting.field === 'price_change_percentage_24h'
			)
				computedComments = computedComments.sort((a, b) =>
					a[sorting.field] > b[sorting.field] ? reversed : -1,
				);
			else
				computedComments = computedComments.sort(
					(a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]),
				);
		}

		setcommentsData(
			computedComments.slice(
				(currentPage - 1) * ITEMS_PER_PAGE,
				(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
			),
		);
	}, [comments, currentPage, search, sorting]);

	return (
		<>
			<div className='row w-100'>
				<div className='col mb-3 col-12 text-center'>
					<div className='row'>
						<div className='col-md-6'>
							<Pagination
								total={totalItems}
								itemsPerPage={ITEMS_PER_PAGE}
								currentPage={currentPage}
								onPageChange={(page) => setCurrentPage(page)}
							/>
						</div>
						<div className='col-md-6 d-flex flex-row-reverse'>
							<Search
								onSearch={(value) => {
									setSearch(value);
									setCurrentPage(1);
								}}
							/>
						</div>
					</div>

					<table className='table table-striped' style={{ color: 'white' }}>
						<TableHeader
							headers={headers}
							onSorting={(field, order) => setSorting({ field, order })}
						/>
						<tbody>
							{commentsData.map((comment) => (
								<tr key={comment.id}>
									<th scope='row'>{comment.market_cap_rank}</th>
									<td className='coin'>
										<img src={`${comment.image}`} alt='crypto' />
										<h1>{comment.name}</h1>
									</td>
									<td>{comment.symbol}</td>
									<td className='coin-price'>
										{numeral(comment.current_price).format('0.0a')}
									</td>
									<td className='coin-volume'>
										{numeral(comment.total_volume).format('0.0a')}
									</td>
									<td className='coin-marketcap'>
										{numeral(comment.market_cap).format('0.0a')}
									</td>
									<td
										className={`coin-percent ${
											comment.price_change_percentage_24h > 0 ? 'green' : 'red'
										}`}>
										{numeral(comment.price_change_percentage_24h).format(
											'0.0a',
										)}
										%
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default DataTable;
