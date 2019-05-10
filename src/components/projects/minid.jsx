import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJsBadge,
  DiNodejs,
  DiNpm,
  DiMongodb,
  DiHeroku,
} from "react-icons/di"

const MindId = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">MinID.APP</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/brazil.png"
            alt="Brazil icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/UJU24do.jpg"
            alt="MinID web app"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiBootstrap /> <DiJsBadge /> <DiNodejs />{" "}
              <DiNpm /> <DiMongodb /> <DiHeroku />
            </h1>
          </div>
          <div>
            <p>
              MinID.APP is a Mineral Identification tool for thin sections,
              currently being used by the petrology and optical mineralogy class
              from the Federal University of Western Bahia (UFOB), it also has a
              collaborative mineral database.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>
                User sign-in, sign-up, reset-password, email verification,
                comments, and profile page.
              </li>
              <li>
                Role based access control, at the route level and at a per field
                level.
              </li>
              <li>Full CRUD operations</li>
              <li>Algorithm to identify minerals</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>
              Node.js, Express, PassportJS, Bootstrap, MongoDB and EJS for
              server side rendering.
            </p>
          </div>

          <a
            href="https://minid.app"
            target="_blank"
            rel="noopener noreferrer"
            className="module-card-button"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default MindId
