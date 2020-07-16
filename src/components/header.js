import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Container from "./Container"
import { ThemeContext } from "../context/ThemeContext"
import { MenuToggle, MenuToggleContainer } from "./MobileMenu/MenuToggle"
import Nav from "./Nav"
import ThemeToggler from "./ThemeToggler"
import tw, { styled } from "twin.macro"
import { useCycle } from "framer-motion"

const HeaderRight = styled.div`
  ${tw`flex ml-auto items-center`}
`

const HeaderContainer = styled.header`
  ${tw`flex items-center py-4`}
`

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <Container>
        <HeaderContainer>
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
            <Nav />
            <MenuToggleContainer
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle
                toggle={() => toggleOpen()}
                style={{ fillColor: "red" }}
                isDarkMode={isDarkMode}
              />
            </MenuToggleContainer>
            <ThemeToggler
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </HeaderRight>
        </HeaderContainer>
      </Container>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
