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
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
            >
              About
            </Link>
          </li>
          <li>
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
    </header>
  )
}

export default Header
