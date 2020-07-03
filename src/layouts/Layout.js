import React from "react"
import ThemeContext from "../context/ThemeContext"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <ThemeContext>
      <Header siteTitle="Jejomar" />
      {children}
    </ThemeContext>
  )
}

export default Layout
