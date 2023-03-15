import './Header.css';

export default function Header({name, place, state, mob, email}) {
    return (
        <div className="header">
            <div className="cell" style={{width: "60%", textAlign: "start"}}>
                <h2>{name}</h2>
                <h4>{place + ", "+ state}</h4>
            </div>
            <div className="cell" style={{width: "40%", textAlign: "end"}}>
                <h3>{email}</h3>
                <h3>{mob}</h3>
            </div>
        </div>
    );
};