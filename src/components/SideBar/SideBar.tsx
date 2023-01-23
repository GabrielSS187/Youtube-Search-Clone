import { useRef, useEffect } from "react";

import { InfoMenu } from "./infoMenu";

type TProps = {
  openMenu: boolean;
  closeMenu: (params: boolean) => void;
 };

export function SideBar ({ openMenu, closeMenu }: TProps) {
  const refDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleClickOutside (e: MouseEvent) {
    if (refDiv.current && !refDiv.current.contains(e.target as Node)) {
      closeMenu(true);
    };
  };

  return (
    <div ref={refDiv} className={`${!openMenu && "bg-secondary"} md:bg-secondary text-white pt-24 h-screen max-[400px]:h-[104vh] absolute z-40`} >
      <InfoMenu 
        openMenu={openMenu}
        closeMenu={closeMenu}
       />
    </div>
  );
};