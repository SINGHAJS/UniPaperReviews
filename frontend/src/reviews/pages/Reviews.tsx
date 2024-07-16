import { AppNavigation } from "../../shared/components/Navigation/AppNavigation";
// import {TReview, Review} from "../components/Review.tsx";
import { TReview, Review } from "../components/Review.tsx";
import { NoPaperAvailable } from "../../shared/ErrorMessages/NoPaperAvailable.tsx";

export const Reviews = () => {
  const reviews: TReview[] = [
    {
      paper: "COMP101",
      university: "Auckland University of Technology (AUT)",
      datePosted: "16/07/24",
      degree: "Bachelors of Engineering (Honours) Software",
    },
    {
      paper: "ENGE111",
      university: "Auckland University of Technology (AUT)",
      datePosted: "16/07/24",
      degree: "Bachelors of Engineering (Honours) Software",
    },
  ];

  return (
    <>
      <AppNavigation />
      <div className="w-4/5 bg-white mt-4 p-8 rounded-xl border-4 border-black flex flex-col">
        <div>
          {reviews.length === 0 && <NoPaperAvailable />}
          {reviews.map((review) => {
            return (
              <Review
                paper={review.paper}
                datePosted={review.datePosted}
                university={review.university}
                degree={review.degree}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
