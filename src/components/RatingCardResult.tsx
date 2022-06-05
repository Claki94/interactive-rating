import { ReactComponent as IllustrationThankYou } from "../svgs/illustration-thank-you.svg";
import "../scss/RatingCard.scss";

export const RatingCardResult = ({ ratingOptions, rating }) => {
  return (
    <div className="card-container card-result">
      <IllustrationThankYou className="thank-you-svg" />
      <p className="result-text">You selected {rating} out of {ratingOptions}</p>
      <h1 className="card-title text-center">Thank you!</h1>
      <p className="card-text text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default RatingCardResult;
