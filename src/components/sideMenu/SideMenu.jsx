import "./sideMenu.scss"

export default function SideMenu({ sideBar, setSideBar }) {
    return (
        <div className={"sidemenu " + (sideBar && "active")} >
            <ul>
                <li onClick={ () => setSideBar(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={ () => setSideBar(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={ () => setSideBar(false)}>
                    <a href="#exp">Experience</a>
                </li>
                <li onClick={ () => setSideBar(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
