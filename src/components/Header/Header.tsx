import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";

export function Header () {
  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white grid grid-cols-1 sm:grid-cols-3 items-center bg-secondary p-4" >
      <Logo className="pl-4 hidden sm:flex" />
      <SearchBar className="flex justify-center items-center" />
      <Profile className="hidden sm:flex justify-end pr-4" />
    </div>
  );
};