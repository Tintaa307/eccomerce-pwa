import { useState, useEffect } from "react"
import styles from "./About.module.css"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className={styles.container_about}>
      <div className={styles.container_title}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            bounce: 0.5,
          }}
        >
          Sobre Nosotros
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            bounce: 0.5,
          }}
          className={styles.line}
        ></motion.div>
      </div>
      <div className={styles.about_content}>
        <div className={styles.our_info}>
          <h3>Como Comenzamos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus recusandae quas quis cupiditate labore ratione. Animi
            fugiat reiciendis cum facere fuga accusamus, molestiae accusantium
            in error, nulla quae temporibus obcaecati tenetur natus laudantium
            mollitia voluptatum tempore veritatis harum dolores? Vel qui, quo
            cumque placeat porro quae perferendis! Est, praesentium
            perspiciatis!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
