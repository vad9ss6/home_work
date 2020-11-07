import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./pages/pages.module.css"

function Header() {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggle = () =>{
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={s.menuWrapper}>
            <div className={s.burgerMenu} onClick={toggle}>&#9776;</div>
            <div className={`${s.containerMenuLinks} ${activeMenu && s.activeMenu}`} >
                <NavLink to={"/pre-junior"} activeClassName={s.active} className={s.menuLinks}  > Junior / </NavLink>
                <NavLink to={"/junior-plus"} activeClassName={s.active} className={s.menuLinks} > Junior + / </NavLink>
                <NavLink to={"/todo"} activeClassName={s.active} className={s.menuLinks} > ToDo list / </NavLink>
                <NavLink to={"/checkbox"} activeClassName={s.active} className={s.menuLinks} > My check box / </NavLink>
                <NavLink to={"/button"} activeClassName={s.active} className={s.menuLinks} > My button / </NavLink>
            </div>
        </div>
    );
}

export default Header;
