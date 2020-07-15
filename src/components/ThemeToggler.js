import React from "react"
import tw, { styled } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

const TogglerContainer = styled.button`
  ${tw`cursor-pointer flex items-center relative justify-center text-center focus:outline-none bg-transparent border-none`};
  width: 2rem;
  height: 2rem;
`

const SVGContainer = styled(motion.div)`
  ${tw`absolute inline-block align-middle`}

  svg {
    height: 2rem;
  }
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
            transition={{ duration: 1 }}
            key="1"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle fill="#ffdc6c" r="27" cy="50" cx="50" />
                <path
                  fill="#f8b26a"
                  d="M50 19.3c1.2 0 2.3.1 3.5.2L50 7.5l-3.5 12c1.2-.1 2.3-.2 3.5-.2zM37.7 21.9l-9-8.7 3 12.1c1.9-1.4 3.9-2.5 6-3.4zM25.3 31.8l-12.1-3 8.7 9c.9-2.2 2-4.2 3.4-6zM92.5 50l-12-3.5c.1 1.1.2 2.3.2 3.5s-.1 2.3-.2 3.5l12-3.5zM78.1 37.7l8.7-9-12.1 3c1.4 1.9 2.5 3.9 3.4 6zM68.2 25.3l3-12.1-9 8.7c2.2.9 4.2 2 6 3.4zM62.3 78.1l9 8.7-3-12.1c-1.9 1.4-3.9 2.5-6 3.4zM74.7 68.2l12.1 3-8.7-9c-.9 2.2-2 4.2-3.4 6zM50 80.7c-1.2 0-2.3-.1-3.5-.2l3.5 12 3.5-12c-1.2.1-2.3.2-3.5.2zM21.9 62.3l-8.7 9 12.1-3c-1.4-1.9-2.5-3.9-3.4-6zM31.8 74.7l-3 12.1 9-8.7c-2.2-.9-4.2-2-6-3.4zM19.3 50c0-1.2.1-2.3.2-3.5L7.5 50l12 3.5c-.1-1.2-.2-2.3-.2-3.5z"
                />
              </g>
            </svg>
          </SVGContainer>
        ) : (
          <SVGContainer
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            key="2"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g clipRule="evenodd" fillRule="evenodd">
                <path
                  fill="#bbcedd"
                  d="M52.16 55.68c-17.36 0-31.44-13.76-31.44-30.64 0-6.4 2-12.32 5.44-17.28a.859.859 0 00-1.04-1.28C14.56 11.6 6.96 22 5.92 34.32 4.08 55.28 22 73.2 42.96 71.28c12.4-1.12 22.96-8.88 27.92-19.68.32-.8-.48-1.52-1.2-1.04-5.04 3.2-11.04 5.12-17.52 5.12z"
                />
                <path
                  fill="#85a2b6"
                  d="M63.44 20.16l2.08 4.16c.08.16.24.24.4.32l4.64.64c.4.08.64.56.32.88l-3.36 3.28c-.16.16-.16.32-.16.48l.8 4.64c.08.4-.4.8-.8.56l-4.16-2.16a.51.51 0 00-.48 0l-4.16 2.16c-.4.24-.88-.16-.8-.56l.8-4.64c0-.16 0-.32-.16-.48l-3.36-3.28c-.32-.32-.16-.8.32-.88l4.64-.64c.16 0 .32-.16.4-.32l2.08-4.16c.16-.4.72-.4.96 0zM40.4 10.24l1.68 3.44c.08.16.16.24.32.24l3.76.56c.32.08.48.48.24.72l-2.72 2.64c-.08.08-.16.24-.16.4l.64 3.76c.08.32-.32.64-.64.48l-3.36-1.76c-.16-.08-.24-.08-.4 0l-3.36 1.76c-.32.16-.72-.08-.64-.48l.64-3.76c0-.16 0-.32-.16-.4L33.6 15.2c-.24-.24-.08-.72.24-.72l3.76-.56c.16 0 .24-.08.32-.24l1.68-3.44c.16-.32.64-.32.8 0z"
                />
              </g>
            </svg>
          </SVGContainer>
        )}
      </AnimatePresence>
    </TogglerContainer>
  )
}

ThemeToggler.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}

export default ThemeToggler
