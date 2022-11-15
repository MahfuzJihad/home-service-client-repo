function ReviewItem(props) {
  return (
    <div className="py-2 border-b-2">
      <h2 className="font-semibold">
        {props.userName !== null ? props.userName : props.userEmail}
      </h2>
      <p>{props.comment}</p>
    </div>
  );
}
export default ReviewItem;
