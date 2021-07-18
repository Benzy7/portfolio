import Contact from "./components/contact/Contact";
import Exp from "./components/exp/Exp";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import {useState} from 'react';
import SideMenu from "./components/sideMenu/SideMenu";


function App() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="app">
      <Topbar sideBar={sideBar} setSideBar={setSideBar} />
      <SideMenu sideBar={sideBar} setSideBar={setSideBar} />
      <div className="sections">
        <Intro />
        <Skills />
        <Exp />
        <Contact />
      </div>
    </div>
  );
}

export default App;
