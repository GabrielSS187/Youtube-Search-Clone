import { useState } from "react";
import { 
  House,
  UserList,
  Lightning,
  Book,
  Clock,
  MonitorPlay,
  Timer,
  ThumbsUp,
  List
 } from "phosphor-react";

 import { Profile } from "../Header/Profile";

 type TProps = {
  openMenu: boolean;
  closeMenu: (params: boolean) => void;
 };

 type TMenuList = {
  label: string;
  icon: JSX.Element;
  gap?: boolean;
 };

 const menuList: Array<TMenuList> = [
  {
    label: "Início",
    icon: <House size={25} />
  },
  {
    label: "Shorts",
    icon: <Lightning size={25} />
  },
  {
    label: "Inscrições",
    icon: <UserList size={25} />,
    gap: true
  },
  {
    label: "Biblioteca",
    icon: <Book size={25} />
  },
  {
    label: "Histórico",
    icon: <Clock size={25} />
  },
  {
    label: "Seus vídeos",
    icon: <MonitorPlay size={25} />
  },
  {
    label: "Assistir mais tarde",
    icon: <Timer size={25} />
  },
  {
    label: "Videos marcados com gostei",
    icon: <ThumbsUp size={25} />
  }
];

export function InfoMenu ({ openMenu, closeMenu }: TProps) {
  const [ actualLabel, setActualLabel ] = useState<string>("Início");

  const handleStateMenu = () => {
    closeMenu(!openMenu);
    setActualLabel("menu");
  };

  return (
    <ul className={`flex flex-col ${openMenu ? "w-20 items-center z-50" : "w-64"}`}>
      <div onClick={handleStateMenu} className={`inline-block p-2 hover:bg-[#4c4c4c] focus:bg-[#4c4c4c]
          ${ actualLabel === "menu" &&  "bg-[#4c4c4c]"} ${ !openMenu && "pl-6" }
        `
      }>
        <button>
          <List size={25} />
        </button>
      </div>
      <br className="sm:hidden" />
      <div className={`flex items-center ${ !openMenu && "pl-5 gap-6" } sm:hidden`}>
        <Profile/>
        { !openMenu && ( <p>Usuário</p> ) }
      </div>
      <br />

      {
        menuList.map((item) => {
          return (
            <li 
              key={item.label} 
              className={`flex flex-col items-center`}
              onClick={() => setActualLabel(item.label)}
            >
              { item.gap && ( <hr className="w-[90%]  bg-white my-5"/> ) }
              <button className={`w-full flex items-center justify-start space-x-8 hover:bg-[#4c4c4c] rounded transition duration-200 ease-out py-3 p-2
               ${!openMenu && "pl-6"}  ${ item.label === actualLabel && "bg-[#4c4c4c]" }`
              }>
                {item.icon}
                { !openMenu && ( <span className="truncate pl-2">{item.label}</span> )}
              </button>
            </li>
          )
        })
      }
    </ul>
  );
};