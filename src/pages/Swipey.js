import Navbar from '../components/Navbar';
import CarouselPeople1 from '../images/CarouselPeople.png'
import CarouselPeople2 from '../images/CarouselPeople2.png'
import CarouselPeople3 from '../images/CarouselPeople3.png'
import CarouselPeopleAlt from '../images/CarouselPeopleAlt.png'
import lt from "../images/lt.png"
import gt from "../images/gt.png"
import yah from "../images/YAHBtn.png"
import nah from "../images/NAHBtn.png"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Swipey() {

    const [ count, setCount ] = useState(0)
    const [ carouselImg, setCarouselImg ] = useState(CarouselPeople1)

    function handleSwipe() {
        if (count === 0) {
            setCarouselImg(CarouselPeople2)
        } else if (count === 1) {
            setCarouselImg(CarouselPeople3)
        }
        setCount(prevCount => {
            return prevCount + 1
        })
    }

    function handleToggle() {
        setCarouselImg(CarouselPeopleAlt)
    }

    return (
        <>
            <Navbar />
            <div className="swipe-container">
                <img src={lt} alt="" className='arrows' />
                <AnimatePresence >
                <motion.img onClick={handleToggle} whileHover={{scale: 1.025}}key={carouselImg} src={carouselImg} initial={{opacity: 0}} transition={{ duration: 1 }} animate={{opacity: 1}}/>
                </ AnimatePresence>
                <img src={gt} alt="" className='arrows' />
            </div>
            <div className="yes-no-buttons">
                <motion.img src={nah} alt="" onClick={handleSwipe} whileHover={{scale: 1.05}}/>
                <motion.img src={yah} alt="" onClick={handleSwipe} whileHover={{scale: 1.05}}/>
            </div>
        </>
    )
}