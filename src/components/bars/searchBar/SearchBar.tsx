import { ChangeEvent } from "react";
import { SearchBarProps } from "./searchBar.static";
import { SearchBarWrapper } from "./searchBar.styles";


  const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      onSearch(query);
    };
  
    return (
        <SearchBarWrapper>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      </SearchBarWrapper>
    );
  };
  
  export default SearchBar;