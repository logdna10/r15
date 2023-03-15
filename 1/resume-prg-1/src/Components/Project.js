import './Project.css';

export default function Project({title, desc, link, color}) {
    return (
        <div className="row" style={{backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <div className="cell" style={{width: "60%", textAlign: "start"}}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="cell" style={{width: "40%", textAlign: "end"}}>
                <p><u>{link}</u></p>
            </div>
        </div>
    );
};