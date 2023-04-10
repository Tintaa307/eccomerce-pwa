import { useState, useEffect } from "react"
import styles from "./Landing.module.css"
import { motion } from "framer-motion"

const LandingPage = () => {
  const [rdmNumber, setRdmNumber] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      setRdmNumber(Math.floor(Math.random() * (70 - 50) + 50))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.containerRebajas}>
          <div className={styles.rebaja}>
            <h1>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 1,
                }}
              >
                RE
              </motion.div>{" "}
              <motion.span
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 2.5,
                }}
                className={styles.inset}
              >
                BA
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 3,
                }}
                className={styles.inset}
              >
                JAS
              </motion.span>
            </h1>
          </div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              bounce: 0.6,
              stiffness: 100,
            }}
            className={styles.rebaja}
          >
            <h2 className={styles.title}>REBAJAS</h2>
            <div className={styles.line}></div>
            <h2 className={styles.notice}>
              HASTA <br /> -{rdmNumber}%{" "}
            </h2>
            <div className={styles.line}></div>
            <h6>Promociones validas hasta el xx/xx/xx</h6>
          </motion.div>
          <div className={styles.rebaja}>
            <h1>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 2,
                }}
              >
                RE
              </motion.div>{" "}
              <motion.span
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 2.5,
                }}
                className={styles.inset}
              >
                BA
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.6,
                  delay: 3,
                }}
                className={styles.inset}
              >
                JAS
              </motion.span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
