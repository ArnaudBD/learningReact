import React from "react";

const SearchBox = ({ searchfield, onSearchChange}) => {
	return (
		<div class='pa2'>
			<input class='pa3 b--green bg-lightest-blue ba' type='search'
			placeholder='search robots' 
			onChange={onSearchChange}
			/>

		</div>
	)
}

export default SearchBox;