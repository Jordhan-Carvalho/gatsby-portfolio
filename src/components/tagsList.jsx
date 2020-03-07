import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import tagsStyles from "./tagsList.module.scss"

const TagsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div>
      <ul className={tagsStyles.tags}>
        <li className={tagsStyles.tag}>
          <Link to="/blog">Tudo</Link>
        </li>
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue} className={tagsStyles.tag}>
            <Link to={`/tags/${tag.fieldValue.toLowerCase().trim()}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsList
