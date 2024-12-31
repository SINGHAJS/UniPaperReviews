import { CButton } from "../../shared/uiElements/CButton";
import { InputField } from "../../shared/uiElements/InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export type FormData = {
  paperTitle: string; 
  university: string;
  degree: string;
}

export const NewReview: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({paperTitle: '', university: '', degree: ''});
  const inputFieldStyle : string = "p-2 border rounded-lg";
  const navigate = useNavigate(); 

  const onCancelButtonClick = () => {
    navigate('/');
  }


  const onFormInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const onSubmitClickHandler = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData({paperTitle: '', university: '', degree: ''});
  }

  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 z-50 flex items-center justify-center transition-opacity duration-300"
      style={{ backdropFilter: "blur(8px)" }}
    >

      <div className="w-1/2 h-1/2 bg-white flex flex-col items-center p-8 gap-8 rounded-md">
      <h1 className="font-bold text-2xl">Add New Paper Review</h1>
        <form className="flex flex-col w-full gap-4">
          <div id="form-control" className="flex flex-col gap-4">
            <InputField style={inputFieldStyle} placeholder="Paper Title" name='paperTitle' value={formData.paperTitle} onChange={onFormInputChangeHandler}/>
            <InputField style={inputFieldStyle} placeholder="University" name='university' value={formData.university} onChange={onFormInputChangeHandler} />
            <InputField style={inputFieldStyle} placeholder="Degree" name='degree' value={formData.degree} onChange={onFormInputChangeHandler}/>
          </div>
          
          <div id="form-actions" className="w-full flex justify-end  gap-2">
            <CButton onClick={onCancelButtonClick}>Cancel</CButton>
            <CButton onClick={onSubmitClickHandler} className="bg-black text-white hover:bg-white hover:text-black">Submit</CButton>
          </div>
        </form>
      </div>
    </div>
  );
};
