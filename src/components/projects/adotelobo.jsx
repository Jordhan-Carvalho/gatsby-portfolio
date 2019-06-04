import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiNpm,
  DiHeroku,
  DiJsBadge,
  DiNodejs,
  DiMongodb,
} from "react-icons/di"

const AdoteLobo = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Adote Lobo</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/brazil.png"
            alt="brazil icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/Mn3sB0p.jpg"
            alt="Adote Lobo App"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJsBadge /> <DiNodejs /> <DiNpm />{" "}
              <DiMongodb /> <DiReact /> <DiHeroku />
            </h1>
          </div>
          <div>
            <p>
              Adote LOBO is a platform for pet adoptions, which includes a
              complete profile section for volunteers, with education and
              work-related experiences.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>User sign-in, sign-up, comments, and profile page.</li>
              <li>Full CRUD operations</li>
              <li>Complex profile setup</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>React, Redux, NodeJS, Express, JWT, MongoDB.</p>
          </div>

          <a
            href="https://adotelobo.herokuapp.com/"
            target="_blank"
            className="module-card-button"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdoteLobo
