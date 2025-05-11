interface SearchBoxProps {
    searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ searchChange }) => {

  return <>
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </div>
  </>
};
