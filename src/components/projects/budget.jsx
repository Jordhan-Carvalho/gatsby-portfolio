import React from "react"
import { DiHtml5, DiCss3, DiJsBadge } from "react-icons/di"

const BudgetAPP = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Budget App</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/OQvGtmx.jpg"
            alt="Budget WebApp"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJsBadge />
            </h1>
          </div>
          <div>
            <p>
              Vanilla JS budget control webapp, made as an assignment for the
              Jonas Schmedtmann JavaScript course, with MVC architectural
              pattern.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Non persistent CRD operations</li>
              <li>MVC architectural pattern.</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>HTML, CSS, JavaScript.</p>
          </div>

          <a
            href="http://fast-wine.surge.sh//"
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

export default BudgetAPP
