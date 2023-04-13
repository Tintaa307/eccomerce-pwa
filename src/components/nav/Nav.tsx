import { useEffect, useReducer, useState } from "react"
import styles from "./Nav.module.css"
import { NavItems } from "../../types"
import { Variants, motion } from "framer-motion"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"

const navVariants: Variants = {
  open: {
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    x: 0,
    y: -330,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.3,
    },
  },
}

const iconsVariants: Variants = {
  open: {
    display: "block",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    display: "none",
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.3,
    },
  },
}

const inputVariants: Variants = {
  appear: {
    width: "220px",
    borderBottom: "1.5px solid #000",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  disappear: {
    width: "0px",
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [appear, setAppear] = useState(false)
  const [search, setSearch] = useState()

  const onScroll = () => {
    if (window.scrollY > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const onAppear = () => {
    setAppear(!appear)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [open])

  const navItems: NavItems[] = [
    {
      id: 1,
      name: "MUJER",
      link: "mujer",
    },
    {
      id: 2,
      name: "HOMBRE",
      link: "hombre",
    },
    {
      id: 3,
      name: "NIÑOS",
      link: "ninos",
    },
    {
      id: 4,
      name: "ACCESORIOS",
      link: "accesorios",
    },
    {
      id: 5,
      name: "OFERTAS",
      link: "ofertas",
    },
  ]

  return (
    <motion.header
      initial={false}
      animate={open ? "open" : "closed"}
      variants={navVariants}
      className={styles.header}
    >
      <nav className={styles.nav}>
        <div className={styles.containerList}>
          <ul className="list">
            {navItems.map(({ id, name, link }) => (
              <li key={id} className="list-item">
                <Link href={`/${link}`} className={styles.navlink}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.containerTitle}>
          <h1>MERKAL</h1>
        </div>
        <div className={styles.containerSearch}>
          <motion.input
            initial={false}
            animate={appear ? "appear" : "disappear"}
            variants={inputVariants}
            type="search"
            placeholder="Qué necesitas..."
          />
        </div>
        <div className={styles.containerIcons}>
          <div className={styles.icon}>
            <motion.i
              initial={true}
              animate={appear ? "closed" : "open"}
              variants={iconsVariants}
              onClick={onAppear}
              className="ri-search-2-line"
            ></motion.i>
            <motion.i
              initial={false}
              animate={appear ? "open" : "closed"}
              variants={iconsVariants}
              onClick={onAppear}
              className="ri-close-line"
            ></motion.i>
          </div>
          <div className={styles.icon}>
            <i className="ri-user-line"></i>
          </div>
          <div className={styles.icon}>
            <i className="ri-heart-2-line"></i>
          </div>
          <div className={styles.icon}>
            <i className="ri-handbag-line"></i>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Nav
