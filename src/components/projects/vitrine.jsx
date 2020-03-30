import React from "react"
import {
  DiDart,
  DiGoogleCloudPlatform,
  DiAndroid,
  DiApple,
} from "react-icons/di"

const Vitrine = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Vitrine Virtual</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/brazil.png"
            alt="Brazil icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/G5aRq0Y.jpg"
            alt="Vitrine virtual app"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiDart /> <DiGoogleCloudPlatform /> <DiAndroid /> <DiApple />
            </h1>
          </div>
          <div>
            <p>
              Vitrine Virtual is mobile application (android and iOS) built with
              the intent of making easier to trade/buy/sell new and used
              products in the city of Barreiras.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>
                Google and Facebook Authentication as a Service Provider
                integration.
              </li>
              <li>
                Role based access control, at the route level and at a per field
                level.
              </li>
              <li>Full CRUD operations</li>
              <li>iOS and android app in a single codebase</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>Dart, Flutter, Google Cloud/Firebase.</p>
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

export default Vitrine
