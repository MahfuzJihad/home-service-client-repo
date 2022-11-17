import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import ReviewItem from "./ReviewItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ServiceDetails(props) {
  const params = useParams();
  const { user } = useContext(AuthContex);
  const [service, setService] = useState([]);
  const [reviews, setReviews] = useState([]);
  const reviewRef = useRef();

  const getAllReviews = () => {
    fetch(`https://home-service-server-mahfuzjihad.vercel.app/reviews/${params.id}`)
      .then((respose) => respose.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }

  const getSingleServiceData = () => {
    fetch(`https://home-service-server-mahfuzjihad.vercel.app/service/${params.id}`)
      .then((respose) => respose.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  };

  const addUserReview = (e) => {
    e.preventDefault();
    const review = {
      serviceId: params.id,
      userName: user?.displayName,
      userEmail: user?.email, 
      comment: reviewRef.current.value,
    };

    if (user) {
        if(review.comment){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(review),
              };
              fetch("https://home-service-server-mahfuzjihad.vercel.app/review", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    const updatedReviews = reviews.concat(review);
                    setReviews(updatedReviews);
                });
        }else{
            toast.error('Comment should not empty!', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 2000,
            })
        }
      
    } else {
        toast.error('Please login first', {
            hideProgressBar: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        })
    }
  };

  useEffect(() => {
    getSingleServiceData();
    getAllReviews();
  }, []);

  return (
    <div className="">
      <div>
        <div>
          <h1>{service.title}</h1>
        </div>
        <div className="flex justify-between">
          <div className="w-3/5 p-4">
            <h1>{props.title}</h1>
            <img src={service.imageUrl} alt={service.title} />
            <p>{service.details}</p>
          </div>
          <div className="w-2/5">
            <h2>Reviews</h2>
            <form onSubmit={addUserReview}>
              <input
                ref={reviewRef}
                className="py-2 px-2 rounded-lg border-2 border-blue-700"
                type="text"
                name="review"
                placeholder="Enter review here"
              />
              <button className="py-2 px-3 bg-blue-700 rounded-lg">
                Submit
              </button>
            </form>
            <div>
              <h2>Recent Reviews:</h2>
              {reviews.map((review) => (
                <ReviewItem key={review._id} userName={review.userName} userEmail={review.userEmail} comment={review.comment}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>{service.id}</h1>
        <p>{service.name}</p>
      </div>
    </div>
  );
}
export default ServiceDetails;
