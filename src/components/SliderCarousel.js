import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import {FaCaretLeft , FaCaretRight} from "react-icons/fa"

import image1 from "../images/1.jpeg"
import image2 from "../images/2.jpeg"
import image3 from "../images/3.jpeg"
import image4 from "../images/4.jpeg"

const images =
    [
        image1,
        image2,
        image3,
        image4,
    ];

const variants = {
    initial: direction => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
        // scale: 0.5,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: direction => {
      return {
        x: direction > 0 ? -500 : 500,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }

const SliderCarousel = () => {

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    function prevStep() {
        setDirection(-1)
        if (index === 0) {
            setIndex(images.length - 1)
            return
        }
        setIndex(index - 1)
    }
    function nextStep() {
        setDirection(1)
        if (index === images.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

  return (
    <section className="container-slider">
        <div className="slideshow">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    src={images[index]}
                    alt="slides"
                    className="slides"
                    key={images[index]}
                    custom={direction}
                />
            </AnimatePresence>
            <button className="prev-btn" onClick={prevStep}><FaCaretLeft/></button>
            <button className="next-btn" onClick={nextStep}><FaCaretRight/></button>
        </div>

    </section>

  )
}

export default SliderCarousel