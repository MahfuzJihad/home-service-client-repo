import { } from "react-router-dom";

function ServiceItem(props) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={props.imageUrl} alt={props.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
}
export default ServiceItem;