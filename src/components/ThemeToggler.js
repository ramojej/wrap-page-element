import React from "react"
import tw, { styled } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import { BsSun, BsMoon } from "react-icons/bs"

const TogglerContainer = styled.button`
  ${tw`cursor-pointer flex items-center relative justify-center text-center focus:outline-none`};
  width: 20px;
  height: 20px;
`

const SVGContainer = styled(motion.div)`
  ${tw`absolute inline-block align-middle`}
`

const ThemeToggler = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <TogglerContainer type="button" onClick={toggleDarkMode}>
      <AnimatePresence>
        {isDarkMode ? (
          <SVGContainer
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            key="1"
          >
            <BsSun />
          </SVGContainer>
        ) : (
          <SVGContainer
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            key="2"
          >
            <BsMoon />
          </SVGContainer>
        )}
      </AnimatePresence>
    </TogglerContainer>
  )
}

export default ThemeToggler
