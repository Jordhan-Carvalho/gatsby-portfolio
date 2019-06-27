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

const AlugaBrasil = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Aluga Brasil</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/brazil.png"
            alt="brazil icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/mCJqF63.jpg"
            alt="Aluga Brasil App"
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
              Aluga Brasil is a Progressive Web Application (PWA) for
              house/warehouse/apartament rent, any registered user can create a
              new rent (marker), upload photos and information, and pin it on
              the city map. Developed using a mobile-first methodology.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Geospatial Functionality</li>
              <li>User sign-in, sign-up.</li>
              <li>Full CRUD operations</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>React, Redux, NodeJS, Express, JWT, MongoDB, Leaflet .</p>
          </div>

          <a
            href="https://alugabrasil.com.br/"
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

export default AlugaBrasil
