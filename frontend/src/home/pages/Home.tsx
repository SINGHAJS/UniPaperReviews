import Lottie from "lottie-react";
import PaperPlaneAnimation from "../../assets/animations/paper_plane_animation.json";
import { AppNavigation } from "../../shared/components/Navigation/AppNavigation";
import { CButton } from "../../shared/uiElements/CButton";
import MessyDoodle from "../../assets/illustrations/MessyDoodle.svg";

export const Home = () => {
  return (
    <div>
      <AppNavigation />
      <div className="w-screen flex flex-col items-center justify-start">
        <div className="flex justify-start items-center w-2/5 bg-white bg-opacity-80 mt-12 px-8 rounded-t-lg">
          <h1 className="text-4xl font-bold text-black">UniPaperReviews</h1>
          <Lottie
            animationData={PaperPlaneAnimation}
            loop={true}
            width={2}
            style={{ height: "10rem", width: "10rem" }}
          />
        </div>
        <div className="w-2/5 bg-white bg-opacity-80 p-8 rounded-b-lg">
          <p className="text-md font-bold text-justify">
            Empower yourself with informed decisions by accessing reviews and
            insights from past students, ensuring you select the most suitable
            academic papers tailored to your educational needs.
          </p>
          <div className="flex justify-start items-center gap-2 my-2">
            <CButton>View Reviews</CButton>
            <CButton>Write a Review</CButton>
          </div>
          {/* <div className="flex items-center justify-center mt-16">
            <img src={MessyDoodle} width={"400"} />
          </div> */}
        </div>
      </div>
    </div>
  );
};
