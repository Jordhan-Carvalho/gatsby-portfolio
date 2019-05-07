import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.example05}>
            <Link
              to="/about"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              About
            </Link>
          </li>
          <li className={headerStyles.example05}>
            <Link
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}

export default Header
