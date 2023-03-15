import './Skills.css';

export default function Skills({skills, color}) {
    return (
        <div className="row" style={{backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <div className="cell" style={{width: "100%", textAlign: "start"}}>
                <ul>
                    {
                        skills.map((s) => (
                            <li>{s}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};