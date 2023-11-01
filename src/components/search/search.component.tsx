import SearchIcon from "@/assets/images/search";

const Search = () => {
	return (
		<div className="search-container">
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search crypto"
			/>
			<SearchIcon />
		</div>
	);
};
export default Search;
