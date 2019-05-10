import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.example05}>
            <Link
              to="/"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Home
            </Link>
          </li>
          <li className={headerStyles.example05}>
            <Link
              to="/projects"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Projects
            </Link>
          </li>
          <li className={headerStyles.example05}>
            <Link
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}

export default Header
