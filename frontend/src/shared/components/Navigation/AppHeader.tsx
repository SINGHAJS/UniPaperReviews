import { ReactNode } from "react";

export type TAppHeader = {
  children: ReactNode;
};

export const AppHeader = ({ children }: TAppHeader) => {
  return (
    <div className="bg-white border-b-2 border-gray-300 flex justify-between items-center p-4 w-full">
      <h1 className="font-bold">UniPaperReviews</h1>
      {children}
    </div>
  );
};
