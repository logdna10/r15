import './SideHeading.css';

export default function SideHeading({title, color}) {
    return (
        <div className="heading" style={{backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <div className="cell" style={{textAlign: "start"}}>
                <h2>{title}-</h2>
            </div>
        </div>
    );
};