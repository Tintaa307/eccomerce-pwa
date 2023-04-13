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
      description:
        "Tenemos los mejores productos del mercado a tu disposición para que puedas comprarlos con la mejor calidad y a un precio accesible.",
    },
    {
      id: "2",
      title: "Envios rapidos a todo el país",
      icon: "ri-mail-send-line",
      description:
        "Nuestros envios son rapidos y seguros a todo el país. Además, contamos con un servicio de mensajería para que puedas recibir tus productos en el menor tiempo posible.",
    },
    {
      id: "3",
      title: "Buena atención al cliente",
      icon: "ri-service-line",
      description:
        "Mas de 10 años de experiencia en el mercado nos respaldan. Y con esto queremos decir que tenemos un excelente servicio al cliente a disposicion.",
    },
    {
      id: "4",
      title: "Garantia de los productos",
      icon: "ri-refund-2-line",
      description:
        "Tenemos garantia de los productos que vendemos. Siempre que sea necesario. Ademas de que contamos con un servicio de postventa para que puedas resolver cualquier problema que tengas con tu producto.",
    },
    {
      id: "5",
      title: "Frecuentes ofertas y descuentos",
      icon: "ri-wallet-line",
      description:
        "Contamos con grandes ofertas y descuentos para que puedas ahorrar en tus compras. Todos los meses tenemos nuevas ofertas para que puedas aprovecharlas.",
    },
  ]

  useEffect(() => {
    const item = dataInfo.find((item) => item.id === selected)
    console.log(item)
    if (item?.id) {
      setItem({
        type: "set",
        payload: item,
      })
      console.log(item)
    } else {
      setItem({ type: "clear" })
    }
  }, [selected])

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.4,
        delayChildren: 0.2 * dataInfo.length,
        type: "spring",
        bounce: 0.5,
      }}
      className={styles.list_cards}
    >
      {dataInfo.map((item) => {
        return (
          <motion.div
            layoutId={item.id}
            onClick={handleSelected.bind(null, item.id)}
            key={item.id}
            className={styles.card}
          >
            <h5>{item.title}</h5>
            <i className={item.icon}></i>
          </motion.div>
        )
      })}
      <AnimatePresence>
        {item?.id && (
          <motion.div className={styles.blur}>
            <motion.div
              layoutId={item.id}
              className={styles.container_card_open}
            >
              <motion.h5>{item.title}</motion.h5>
              <motion.p>{item.description}</motion.p>
              <motion.div className={styles.container_btn}>
                <motion.button
                  className={styles.btn_card_open}
                  onClick={handleClose}
                >
                  <i className="ri-close-line"></i>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default InfoAbout
