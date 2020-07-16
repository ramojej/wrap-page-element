import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Routes from "../constants/routes"

const Navigation = styled.ul`
  ${tw`list-none hidden`}

  a {
    ${tw`no-underline`}
    color: ${props => props.theme.text};
  }

  li {
    /* &:not(:last-child) { */
      ${tw`mr-8`}
    
  }

  @media ${props => props.theme.screens.lg} {
    ${tw`flex items-center`}
  }
`

const Nav = () => {
  return (
    <Navigation>
      {Routes.map(route => {
        return (
          <li key={route.id}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        )
      })}
    </Navigation>
  )
}

export default Nav
