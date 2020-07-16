import React from "react"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"

const Path = props => (
  <motion.path strokeWidth="3" strokeLinecap="round" {...props} />
)

export const MenuToggleContainer = styled(motion.div)`
  ${tw`relative z-20 flex items-center order-2 ml-4`}

  @media ${props => props.theme.screens.lg} {
    ${tw`hidden`}
  }

  button {
    ${tw`focus:outline-none border-none flex rounded-sm`};
    background: ${props => props.theme.lighterGray};
    padding-top: 5px;

    path {
      stroke: ${props => props.theme.text};
    }
  }
`

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)
