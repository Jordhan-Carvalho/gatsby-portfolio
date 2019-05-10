import React from "react"
import { DiHtml5, DiCss3, DiReact, DiNpm } from "react-icons/di"
import { GiAbstract100 } from "react-icons/gi"

const JordhanDev = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Jordhan.Dev</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
            alt="usa icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/aHyPQzL.jpg"
            alt="Jordhan.Dev"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiReact /> <DiNpm /> <GiAbstract100 />
            </h1>
          </div>
          <div>
            <p>
              My personal portfolio website, built with the idea of being fast,
              clean and objective.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Fully functional Markdown blog.</li>
              <li>Blazing fast with React and GraphQL. (Gatsby)</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>Gatsby, React, GraphQL.</p>
          </div>

          <a
            href="https://jordhan.dev"
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

export default JordhanDev
