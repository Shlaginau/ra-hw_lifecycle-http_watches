/**
 * Search bar component with input and search button.
 */
const SearchBar = () => {
    return (
        
      <div className="search-bar">
        <div className="logo">Яндекс</div>
        <input type="text" placeholder="Найдётся всё..." />
        <button>Найти</button>
      </div>
    );
  };
  export default SearchBar;
  