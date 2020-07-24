import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import Container from "./Container"
import { ThemeContext } from "../context/ThemeContext"
import { MenuToggle, MenuToggleContainer } from "./MobileMenu/MenuToggle"
import Nav from "./Nav"
import MobileMenu from "./MobileMenu/MobileMenu"
import ThemeToggler from "./ThemeToggler"
import tw, { styled } from "twin.macro"

const HeaderRight = styled.div`
  ${tw`flex ml-auto items-center`}
`

const HeaderContainer = styled.header`
  ${tw`flex items-center`};

  @media ${props => props.theme.screens.lg} {
    ${tw`py-4`}
  }
`

const MainContainer = styled.div`
  ${tw`relative p-4`};

  @media ${props => props.theme.screens.lg} {
    ${tw`p-0`}
  }
`

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
  const [isOpen, toggleOpen] = useState(false)

  const toggleMobileMenu = () => {
    toggleOpen(!isOpen)
  }

  return (
    <MainContainer>
      <Container mobileContainer>
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
            <MenuToggleContainer>
              <MenuToggle
                toggleMobileMenu={toggleMobileMenu}
                isDarkMode={isDarkMode}
              />
            </MenuToggleContainer>
            <ThemeToggler
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </HeaderRight>
        </HeaderContainer>

        <MobileMenu
          isDarkMode={isDarkMode}
          toggleMobileMenu={toggleMobileMenu}
          isOpen={isOpen}
        />
      </Container>
    </MainContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
