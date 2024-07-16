export type TReview = {
  paper: string;
  datePosted: string;
  university: string;
  degree: string;
};

export const Review = ({ paper, datePosted, university, degree }: TReview) => {
  return (
    <div className="bg-white rounded-md border-gray-200 border-2 p-4 shadow-lg my-4 hover:bg-gray-100 transition ease-in duration-200 ">
      <h1 className="font-bold text-lg">{paper}</h1>
      <p className="text-xs">{degree}</p>
      <h6 className="text-xs">{university}</h6>
      <p className="text-xs">{datePosted}</p>
    </div>
  );
};
