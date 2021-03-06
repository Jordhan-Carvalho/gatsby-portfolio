import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJqueryLogo,
  DiWordpress,
  DiMysql,
} from "react-icons/di"

const Geologando = () => {
  return (
    <div className="module-card-wrap">
      <div className="module-card">
        <div className="module-card-title">Geologando</div>
        <div>
          <img
            className="language-ico"
            src="https://img.icons8.com/color/48/000000/brazil.png"
            alt="Brazil icon"
          />
        </div>
        <div className="module-card-bottom">
          <img
            src="https://i.imgur.com/6j8SREX.jpg"
            alt="Geologando WebSite"
            className="module-card-img"
          />
          <div>
            <h1>
              <DiHtml5 /> <DiCss3 /> <DiJqueryLogo /> <DiBootstrap />{" "}
              <DiWordpress /> <DiMysql />
            </h1>
          </div>
          <div>
            <p>
              Geologando is a website aimed to Portuguese speaking geologists,
              it brings news about the geology world and an integrated store for
              geology tools, currently with a 1k+ monthly unique visitors and
              about 15k+ followers on Instagram.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>User Authentication/Authorization.</li>
              <li>Fully functional blog.</li>
              <li>E-commerce store.</li>
            </ul>
            <p>
              <strong>Tech:</strong>
            </p>
            <p>JQuery, Bootstrap, Wordpress, WooCommerce, MySQL.</p>
          </div>

          <a
            href="https://geologando.com.br"
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

export default Geologando
