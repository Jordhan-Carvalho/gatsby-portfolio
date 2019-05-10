import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiFirebase,
  DiReact,
  DiNpm,
  DiHeroku,
} from "react-icons/di"

const CentralBudget = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Central Budget</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
            alt="usa icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/cpE6bug.jpg"
            alt="Central Budget App"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiBootstrap /> <DiReact /> <DiNpm />{" "}
              <DiFirebase /> <DiHeroku />
            </h1>
          </div>
          <div>
            <p>
              Central Budget is a web app designed to help users control their
              financial life, with expenses, incomes, graphics, and savings
              functionality.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Authentication Using Google Sign-In (Firebase).</li>
              <li>Full CRUD operations</li>
              <li>Yearly graph analysis.</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>React, Redux, Bootstrap, Recharts, Firebase.</p>
          </div>

          <a
            href="https://central-budget.herokuapp.com"
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

export default CentralBudget
