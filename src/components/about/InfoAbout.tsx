import { useState, useEffect, useReducer } from "react"
import styles from "./About.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { CardItems } from "../../types"

const InfoAbout = () => {
  const dispatch = (
    _: CardItems,
    action: { type: "set" | "clear"; payload?: CardItems }
  ) => {
    switch (action.type) {
      case "clear":
        return {} as CardItems
      case "set":
        return action.payload as CardItems
    }
  }

  const [selected, setSelected] = useState("")
  const [open, setOpen] = useState(false)
  const [item, setItem] = useReducer(dispatch, {} as CardItems)

  const handleSelected = (id: string) => {
    setSelected(id)
    setOpen(!open)
  }

  const handleClose = () => {
    setSelected("")
    setOpen(!open)
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  const dataInfo = [
    {
      id: "1",
      title: "Buena calidad de los productos",
      icon: "ri-4k-fill",
    },
    {
      id: "2",
      title: "Envios rapidos a todo el país",
      icon: "ri-mail-send-line",
    },
    {
      id: "3",
      title: "Buena atención al cliente",
      icon: "ri-service-line",
    },
    {
      id: "4",
      title: "Garantia de los productos",
      icon: "ri-refund-2-line",
    },
    {
      id: "5",
      title: "Frecuentes ofertas y descuentos",
      icon: "ri-wallet-line",
    },
  ]

  useEffect(() => {
    const item = dataInfo.find((item) => item.id === selected)
    if (item) {
      setItem({
        type: "set",
        payload: item,
      })
      console.log("true")
    } else {
      setItem({ type: "clear" })
      console.log(item)
    }
    console.log(item)
  }, [selected])

  return (
    <div className={styles.list_cards}>
      {dataInfo.map((item) => {
        return (
          <motion.div
            layoutId={item.id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            onClick={handleSelected.bind(null, item.id)}
            transition={{
              duration: 1.2,
              delay: Number(item.id) * 0.3,
              type: "spring",
              bounce: 0.5,
            }}
            key={item.id}
            className={styles.card}
          >
            <h5>{item.title}</h5>
            <i className={item.icon}></i>
          </motion.div>
        )
      })}
      <AnimatePresence>
        {item && (
          <motion.div
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className={styles.container_card_open}
            layoutId={item.id}
          >
            <motion.h5>{item.title}</motion.h5>
            <motion.i className={item.icon} />
            <motion.div className={styles.container_btn}>
              <motion.button
                className={styles.btn_card_open}
                onClick={handleClose}
              >
                <i className="ri-close-line"></i>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InfoAbout
