import { Carousel } from "react-bootstrap";
import groupedpeople from "../images/grouped_people_icon.png";
import lettericon from "../images/letter_person_icon.png";
import teamworkicon from "../images/teamwork_icon.png";

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            src={groupedpeople}
            alt="Icon"
            className="d-block fluid px-4"
          />
          <Carousel.Caption>
            <p>The first groupmaking platform featuring swipe technology. Form a group with attendees.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={lettericon}
            alt="Icon"
            className="d-block fluid px-4"
          />
          <Carousel.Caption>
            <p>Automatically generate and switch between different networking profiles.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={teamworkicon}
            alt="Icon"
            className="d-block fluid px-4"
          />
          <Carousel.Caption>
            <p>
              Swipe through and make your dream groupie. Connect, chat, and expand your network.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
