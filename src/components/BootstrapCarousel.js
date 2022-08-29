import { Carousel } from "react-bootstrap";
import groupedpeople from "../images/grouped_people_icon.png";
import lettericon from "../images/letter_person_icon.png";
import teamworkicon from "../images/teamwork_icon.png";

export default function BootstrapCarousel(props) {
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
            <p>{props.content[0]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            src={lettericon}
            alt="Icon"
            className="d-block fluid px-4"
          />
          <Carousel.Caption>
            <p>{props.content[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            src={teamworkicon}
            alt="Icon"
            className="d-block fluid px-4"
          />
          <Carousel.Caption>
            <p>
              {props.content[2]}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
