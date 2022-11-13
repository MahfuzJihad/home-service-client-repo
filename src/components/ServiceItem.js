import { useNavigate } from "react-router-dom";


function ServiceItem(props) {
    const nevigate = useNavigate();
    function viewDetailsBtnHandler() {
        nevigate(`/service/${props.id}`);
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img src={props.imageUrl} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <b>{props.name}</b>
        <p>{props.details.substring(0, 120)}..</p>
        <div className="card-actions justify-end">
          <button onClick={viewDetailsBtnHandler} className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
}
export default ServiceItem;
