import backArrow from "../images/icon-park-outline_return.png"
import iconShuffle from "../images/IconShuffle.png"
import penIcon from "../images/PenIcon.png"
import sideImg from "../images/StockTeamwork.png"

export default function EventForm() {


    return (
        <>
            <div className="event-form-content">
                <div className="back-button">
                    <p>BACK</p>
                    <img src={backArrow} alt="back arrow" className="back-arrow" />
                </div>
                <h1 className="create-event-header">Create an <span className="red">EVENT</span></h1>
                <div className="input-event-name">
                    <p className="form-header">Event Name:</p>
                    <input type="text" placeholder="My Awesome Event" />
                </div>
                <div className="team-max-member-input">
                    <p>Maximum Members per Groupie: </p>
                    <input type="number" />
                </div>
                <div className="icon-upload">
                    <img src={iconShuffle} alt="icon-shuffle-button" />
                </div>
                <div className="event-description-box">
                    <h4 className="form-header">Event Description</h4>
                    <textarea />
                </div>
                <div className="select-background-color">
                    <h4>Select Background Colour</h4>
                    <input type="color" name="" id="" />
                </div>
                <div className="start-end-date">
                    <h3>Start and End Date</h3>
                    <div className="start-date">
                        <h4>START DATE:</h4>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="end-date">
                        <h4>END DATE:</h4>
                        <input type="date" name="" id="" />
                    </div>
                    <input type="checkbox" id="enable-auto-match" />
                    <label for="enable-auto-match"> Auto-Group people if they have not found a team by the End Date</label><br></br>
                </div>
                <div className="submit-event-button">
                    <p>Create Event</p>
                    <img src={penIcon} alt="pen icon" />
                </div>
            </div>
            <img src={sideImg} alt="" srcset="" />
        </>
    )
}