import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import ThemeToggler from "./ThemeToggler"

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Link to="/page-2">Page 2</Link>
        <ThemeToggler isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
