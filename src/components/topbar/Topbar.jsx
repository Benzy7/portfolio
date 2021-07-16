import "./topbar.scss"
import {PhoneIphone, Email} from "@material-ui/icons"

export default function Topbar({ sideBar, setSideBar }) {
    return (
        <div className={"topbar " + (sideBar && "active")} >
             <div className="wrapper">
                 <div className="left">
                     <a href="#intro" className="logo">Benzy</a>
                     <div className="itemCintainer">
                         <PhoneIphone className="icon"/>
                         <span>+216 27 113 063</span>
                     </div>
                     <div className="itemCintainer">
                         <Email className="icon"/>
                         <span>Khoubaib.bnz@gmail.com</span>
                     </div>
                 </div>
                 <div className="right">
                     <div className="menu" onClick={ () => setSideBar(!sideBar)}>
                         <span className="l1"></span>
                         <span className="l2"></span>
                         <span className="l3"></span>
                     </div>
                 </div>
             </div>
        </div>
    )
}
