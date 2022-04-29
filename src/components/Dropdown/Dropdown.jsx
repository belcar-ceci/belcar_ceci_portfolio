import React from 'react'
import { SiderBar, CloseIcon, NavMenu, NavLink, NavBtn} from "./DropdownStyled"


const Dropdown = ({ isOpen, toggle}) => {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
          smooth={true}
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
          smooth={true}
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
          smooth={true}
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn PrimaryBtn"
          href="https://github.com/gurupawar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown