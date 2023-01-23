import { InfoMenu } from "./infoMenu";

type TProps = {
  openMenu: boolean;
  closeMenu: (params: boolean) => void;
 };

export function SideBar ({ openMenu, closeMenu }: TProps) {
  return (
    <div className="bg-secondary text-white pt-24 h-screen max-[400px]:h-[104vh]">
      <InfoMenu 
        openMenu={openMenu}
        closeMenu={closeMenu}
       />
    </div>
  );
};