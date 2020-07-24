import React from "react"
import tw, { styled } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import Routes from "../../constants/routes"

const MobileMenuContainer = styled(motion.div)`
  ${tw`absolute top-0 left-0 w-full h-64 z-20 p-5 rounded-md`};
  background: ${props => props.theme.lighterGray};
  transform-origin: 100% 0;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);

  button {
    ${tw`bg-transparent border-none absolute active:outline-none focus:outline-none`};
    right: 8px;
    top: 10px;

    fill: ${props => props.theme.text};
  }

  ul {
    ${tw`mt-10 list-none p-0`};

    a {
      ${tw`no-underline`};
      color: ${props => props.theme.text};
    }

    li {
      ${tw`mb-2`}
    }
  }

  @media ${props => props.theme.screens.lg} {
    ${tw`hidden`}
  }
`

const mobileMenuContainerVariants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const liVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MobileMenuContainer
          variants={mobileMenuContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ul>
            {Routes.map(route => {
              return (
                <motion.li variants={liVariants} key={route.id}>
                  <Link
                    to={route.path}
                    onClick={toggleMobileMenu}
                    onKeyDown={toggleMobileMenu}
                  >
                    {route.text}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
          <button onClick={toggleMobileMenu} onKeyDown={toggleMobileMenu}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <title>Close mobile navigation</title>
              <path
                d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </MobileMenuContainer>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
