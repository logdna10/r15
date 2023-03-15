import './Description.css';

export default function Description({content, color}) {
    return (
        <div className="row" style={{backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <div className="cell" style={{width: "100%", textAlign: "start"}}>
                <p>{content}</p>
            </div>
        </div>
    );
};