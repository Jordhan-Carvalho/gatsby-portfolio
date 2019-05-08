import React from "react"
import { DiHtml5, DiCss3, DiJsBadge } from "react-icons/di"

const ColorGame = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Color Game</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/spWtGML.jpg"
            alt="ColorGame WebApp"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJsBadge />
            </h1>
          </div>
          <div>
            <p>
              A vanilla JS color game made as an assignment on the webdev
              bootcamp.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Fully functional vanilla JS game.</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>HTML, CSS, JavaScript.</p>
          </div>

          <a
            href="http://smiling-trade.surge.sh"
            target="_blank"
            className="module-card-button"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default ColorGame
