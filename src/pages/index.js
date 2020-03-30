import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <aside className={indexStyles.profileCard}>
        <header>
          <a href="http://jordhan.dev">
            <img src="https://i.imgur.com/pdvyhef.jpg" alt="profile" />
          </a>
          <h1>Jordhan Carvalho</h1>
          <h3>Full Stack Web Developer</h3>
        </header>
      </aside>
      <div className={indexStyles.profileBio}>
        <p>
          Hey there! I'm Jordhan, a full-stack developer living in Brazil.
          <br /> As a developer, I enjoy using my undeniable love for
          programming to help people on their endeavor to make life better.
        </p>
        <p>
          Want to know more about my skills and experience? Visit the{" "}
          <Link to="/projects" className={indexStyles.links}>
            Projects
          </Link>{" "}
          section
        </p>
        <div>
          <h1>
            <a
              href="mailto:carvalho@jordhan.dev"
              target="_top"
              className={indexStyles.links}
            >
              {" "}
              <IoMdMail />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jordhan-carvalho-536401134/"
              className={indexStyles.links}
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jordhan-Carvalho"
              className={indexStyles.links}
            >
              {" "}
              <FaGithub />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/jordhancarvalho"
            >
              <img
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                className="img-dev"
                alt="Jordhan Carvalho's DEV Profile"
                height="40"
                width="40"
              />
            </a>
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
