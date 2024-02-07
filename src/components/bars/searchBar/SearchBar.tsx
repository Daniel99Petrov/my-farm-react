import { ChangeEvent } from "react";
import { SearchBarProps } from "./SearchBar.static";
import { SearchBarWrapper } from "./SearchBar.styles";


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