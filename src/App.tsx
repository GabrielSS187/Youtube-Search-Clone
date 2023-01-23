import { useState } from "react";

import { Header }  from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Results } from "./components/Results";

function App() {
  const [ openMenu, setOpenMenu ] = useState<boolean>(true);

  return (
    <>
      <Header />
      <main className="flex bg-primary" >
        <SideBar 
          openMenu={openMenu}
          closeMenu={setOpenMenu}
        />
        <Results 
          openMenu={openMenu}
        />
      </main>
    </>
  );
};

export default App;
