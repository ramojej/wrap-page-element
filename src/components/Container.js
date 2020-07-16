import React from "react"
import tw, { styled } from "twin.macro"

const StyledContainer = styled.div`
  ${tw`max-w-5xl mx-auto px-4`}
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
