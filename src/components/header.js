import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Container from "./Container"
import { ThemeContext } from "../context/ThemeContext"
import ThemeToggler from "./ThemeToggler"
import tw, { styled } from "twin.macro"

const HeaderRight = styled.div`
  ${tw`flex`}
`

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
  return (
    <header>
      <Container>
        <div>
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
          <HeaderRight>
            <Link to="/page-2">Page 2</Link>
            <ThemeToggler
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </HeaderRight>
        </div>
      </Container>
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
