import React from "react"
import { DiHtml5, DiCss3, DiJsBadge } from "react-icons/di"

const PigGame = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Pig Game</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/F5OIjHV.jpg"
            alt="PigGame WebApp"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJsBadge />
            </h1>
          </div>
          <div>
            <p>
              Pig Game made with vanilla JS, you can find more about the game
              rules and history on the{" "}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Pig_(dice_game)"
              >
                wikipedia page
              </a>
              .
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
            href="http://cloistered-zinc.surge.sh/"
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

export default PigGame
