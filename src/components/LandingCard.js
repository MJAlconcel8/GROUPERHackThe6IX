export default function LandingCard(props) {
    return (
        <div className="landing-card">
            <img src={props.graphic} alt="graphic" className="card-image"></img>
            <div className="card-text">{props.content}</div>
        </div>
    )
}