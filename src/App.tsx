import { useState } from "react";

import { Header }  from "./components/Header";
import { SideBar } from "./components/SideBar";

function App() {
  const [ openMenu, setOpenMenu ] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="flex bg-primary" >
        <SideBar 
          openMenu={openMenu}
          closeMenu={setOpenMenu}
        />
      </div>
    </>
  );
};

export default App;
