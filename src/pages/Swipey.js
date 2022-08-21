import Navbar from '../components/Navbar';
import CarouselPeople0 from '../images/CarouselPeople.png'
import CarouselPeople2 from '../images/CarouselPeople2.png'
import CarouselPeople3 from '../images/CarouselPeople3.png'
import lt from "../images/lt.png"
import gt from "../images/gt.png"
import yah from "../images/YAHBtn.png"
import nah from "../images/NAHBtn.png"

export default function Swipey() {

    return (
        <>
            <Navbar />
            <div className="swipe-container">
                <img src={lt} alt="" className='arrows' />
                <img src={CarouselPeople0} />
                <img src={gt} alt="" className='arrows' />
            </div>
            <div className="yes-no-buttons">
                <img src={nah} alt="" />
                <img src={yah} alt="" />
            </div>
        </>
    )
}