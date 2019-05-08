import React from "react"
import { DiHtml5, DiCss3, DiJsBadge, DiJqueryLogo } from "react-icons/di"

const WikiSearch = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Wiki Search</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/usa.png"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/HSweR1Q.jpg"
            alt="WikiSearch WebApp"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJsBadge /> <DiJqueryLogo />
            </h1>
          </div>
          <div>
            <p>
              Web app used to search for specific or random articles using the
              Wikipedia API.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Search articles using wikipedia API.</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>HTML, CSS, JavaScript, JQuery, AJAX.</p>
          </div>

          <a
            href="http://spiffy-flame.surge.sh/"
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

export default WikiSearch
