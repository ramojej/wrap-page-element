import React from "react"
import tw, { styled } from "twin.macro"

const StyledContainer = styled.div`
  ${tw`max-w-5xl mx-auto px-4 relative`};
  padding: ${props => (props.mobileContainer ? "0" : "0 1rem")};
`

const Container = ({ children, mobileContainer }) => {
  return (
    <StyledContainer mobileContainer={mobileContainer}>
      {children}
    </StyledContainer>
  )
}

export default Container
