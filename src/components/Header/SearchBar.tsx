import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, X } from "phosphor-react";

type TProps = {
  className?: string;
};

export function SearchBar ({ className }: TProps) {
  const [ query, setQuery ] = useState<string>("");
  const navigate = useNavigate();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const submitQuery = () => {
    if ( query !== "" ) navigate(`?query=${query}`);
  };

  const handleSearchButtonClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    submitQuery();
  };

  const handleInputEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if ( e.key === "Enter" ) submitQuery();
  };

  return (
    <div className={`${className}`}>
      <div className="relative">
        <input
          type="text"
          className="text-white text-sm bg-primary h-[42px] px-4 pr-8 md:pr-32 outline-none border border-[#313131] border-r-0 rounded-l-sm focus:border-[#1c62b9] focus:border-r"
          placeholder="Pesquisar"
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleInputEnter}
        />

        { query.length > 0 &&
          (
            <button 
              className="absolute right-0 top-0 mt-[11px] mr-2"
              onClick={() => setQuery("")}
            >
              <X className="h-5 w-5 fill-current"/>
            </button>
          )
        }
      </div>

      <button
        className="px-6 py-2 bg-[#313131] rounded-r-sm border border-[#313131] border-l-0"
        onClick={handleSearchButtonClick}
      >
        <MagnifyingGlass className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};