import { useNavigate } from "react-router-dom";

export default function Event() {

    const navigate = useNavigate();

    function handleClick() {
        console.log("CLICK!");
    }

    return (
        <div className="event-card" onClick={handleClick}>
            <div className="card-top">
                <div className="card-titles">
                    <h3 className="event-title">Hack The 6ix</h3>
                    <h4 className="event-members">880 members</h4>
                </div>
                <div className="event-logo" style={{ backgroundImage: `url("https://via.placeholder.com/500")` }} ></div>
            </div>
            <div className="event-decription">Come join this fantastic 36 hour long event to test or aquire a new programming skill or framework in a motivating and focused setting.</div>
        </div >
    )

}