import icons from "../../../public/icons.svg";
import SendForm from "../SendForm/SendForm";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const getInitial = (name) => name.charAt(0).toUpperCase();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          {i < rating ? (
            <svg className={css.star} width="16" height="16">
              <use href={`${icons}#icon-Rating`} />
            </svg>
          ) : (
            <svg className={css.defaultStar} width="16" height="16">
              <use href={`${icons}#icon-Rating`} />
            </svg>
          )}
        </span>
      );
    }
    return stars;
  };
  return (
    <div className={css.commentsBox}>
      <div>
        <ul className={css.commentsContainer}>
        {reviews.map((review, index) => (
          <li key={index}>
            <div className={css.ratingBlock}>
              <span className={css.imgName}>
                {getInitial(review.reviewer_name)}
              </span>

              <div className={css.reviewerBlock}>
                <p>{review.reviewer_name}</p>
                <span className={css.reviewerRating}>
                  {renderStars(review.reviewer_rating)}
                </span>
              </div>
            </div>
            <p className={css.reviewerComment}> {review.comment}</p>
          </li>
        ))}
      </ul>
      </div>
      <SendForm/>
    </div>
  );
};

export default Reviews;
