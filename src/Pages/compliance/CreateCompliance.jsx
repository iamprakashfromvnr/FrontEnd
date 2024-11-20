import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import SelectInput from "../../Components/SelectInput";
import Button from "../../Components/Button";
import { GoUpload } from "react-icons/go";
// import pdf from '../../Images/pdf.webp'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaAngleLeft, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CheckedSelect from "../../Components/CheckedSelect";
import Swal from 'sweetalert2';
import edit from '../../Images/edit.png'
import done from '../../Images/done.png'
const CreateCompliance = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('')
  const [selectOptions, setSelectOptions] = useState([]);
  const [compliance, setCompliance] = useState({
    natureOfCompliance: "",
    activity: "",
    typeOfAct: "",
    applicationLaborAct: "",
    dueDate: "",
    section: "",
    remarks: "",
    nameOfForm: "",
    state: "",
    applicability: "",
    frequencyOfCompliance: "",
    priorityType: "",
    documentPdf: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompliance({ ...compliance, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompliance({ ...compliance, documentPdf: URL.createObjectURL(file) });
      setFileName(file.name)
    }
    console.log(file);
    console.log(fileName.slice(-5, -1));
  };

  const handleCancel = () => {
    setCompliance({
      natureOfCompliance: "",
      activity: "",
      typeOfAct: "",
      applicationLaborAct: "",
      dueDate: "",
      section: "",
      remarks: "",
      nameOfForm: "",
      state: "",
      applicability: "",
      frequencyOfCompliance: "",
      priorityType: "",
      documentPdf: null,
    });
    setFileName('')
    navigate("/compliancelist");

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Save',
        text: 'Do you Want to Save the Compliance',
        imageUrl: "/src/Images/done.png",
        imageHeight: 100,
        imageHeight: 100,
        showCancelButton: true,
        iconColor: "#d7b95f",
        confirmButtonColor: "#d7b95f",
        confirmButtonText: "Ok",
      }).then((result)=>{
        if (result.isConfirmed){
          navigate('/compliancelist')
          setCompliance({
            natureOfCompliance: "",
            activity: "",
            typeOfAct: "",
            applicationLaborAct: "",
            dueDate: "",
            section: "",
            remarks: "",
            nameOfForm: "",
            state: "",
            applicability: "",
            frequencyOfCompliance: "",
            priorityType: "",
            documentPdf: null,
          });
          setFileName('')
        }
      })
    // Swal.fire({
    //   title: 'Save',
    //   text: 'Do you Want to Save the Compliance',
    //   imageUrl: "/src/Images/done.png",
    //   imageHeight: 100,
    //   imageHeight: 100,
    //   showCancelButton: true,
    //   iconColor: "#d7b95f",
    //   confirmButtonColor: "#d7b95f",
    //   confirmButtonText: "Ok",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       {
    //         imageUrl: "/src/Images/edit.png",
    //         imageHeight: 100,
    //         imageHeight: 100,
    //         title: 'Edit',
    //         text: 'Do you Want to Edit the Compliance',
    //         showCancelButton: true,
    //         iconColor: "#d7b95f",
    //         confirmButtonColor: "#d7b95f",
    //         confirmButtonText: "Save",
    //       }
    //     ).then(() => {
    //       navigate('/editcompliance')
    //       setCompliance({
    //         natureOfCompliance: "",
    //         activity: "",
    //         typeOfAct: "",
    //         applicationLaborAct: "",
    //         dueDate: "",
    //         section: "",
    //         remarks: "",
    //         nameOfForm: "",
    //         state: "",
    //         applicability: "",
    //         frequencyOfCompliance: "",
    //         priorityType: "",
    //         documentPdf: null,
    //       });
    //       setFileName('')
    //     })
    //   }



    // });

  };
  const handleSelectedOptions = (options) => {
    setSelectOptions(options);
  };

  return (
    <div className="h-full p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Create compliance</h2>
        <Link to="/compliancelist">
          <button className="w-36 py-1.5 bg-primary print:bg-primary text-white rounded cursor-pointer flex items-center justify-center gap-2">
            <FaAngleLeft />
            <span>Back to List</span>
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-3">
            <SelectInput
              label="Nature Of Compliance"
              name="natureOfCompliance"
              value={compliance.natureOfCompliance}
              onChange={handleInputChange}
              options={[
                { value: "", label: "SELECT" },
                { value: "Statutory payment", label: "Statutory payment" },
                { value: "Registration", label: "Registration" },

              ]}
            />
            <SelectInput
              label="Type Of Act"
              name="typeOfAct"
              value={compliance.typeOfAct}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select The Type Of Act" },
                { value: "state", label: "State" },
                { value: "central", label: "Central" },
              ]}
            />
            <TextInput
              label="Name of Form"
              name="nameOfForm"
              value={compliance.nameOfForm}
              placeholder="Enter the name of form"
              onChange={handleInputChange}
            />
            <TextInput
              label="Applicable Labor Act"
              name="applicationLaborAct"
              value={compliance.applicationLaborAct}
              placeholder="Enter The applicable law"
              onChange={handleInputChange}
            />
            <TextInput
              label="Due Date"
              name="dueDate"
              value={compliance.dueDate}
              placeholder="Enter the due date"
              onChange={handleInputChange}
            />
            <div className="flex flex-col mb-3 relative">
              <label className="block font-semibold mb-2">Priority Type</label>
              <CheckedSelect
                selectedOptions={selectOptions}
                setSelectedOptions={handleSelectedOptions}
              />
            </div>
            {/* <SelectInput
              label="Priority Type"
              name="priorityType"
              value={compliance.priorityType}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select priority type" },
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" },
              ]}
            /> */}
            <div className="mb-2">
              <label className="block mb-2 font-semibold">
                Upload Document
              </label>
              <label
                htmlFor="documentPdf"
                className="bg-primary text-white w-36 relative px-4 py-2 flex gap-3 justify-center items-center rounded cursor-pointer"
              >
                {compliance.documentPdf ? (
                  <span>
                    <IoDocumentTextOutline size={22} />
                  </span>
                ) : (
                  <span>
                    <GoUpload size={22} />
                  </span>
                )}
                {compliance.documentPdf ? (
                  <span>{fileName.slice(0, 4)}..{fileName.slice(-5,)}</span>
                ) : (
                  <span className="font-semibold">upload</span>
                )}
                <input
                  id="documentPdf"
                  type="file"
                  accept="pdf/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <TextInput
              label="Activity"
              name="activity"
              value={compliance.activity}
              placeholder="Enter the activity"
              onChange={handleInputChange}
            />
            <div className="mb-3">
              <label className="block mb-2 font-semibold">State</label>
              <select
                name="state"
                value={compliance.state}
                onChange={handleInputChange}
                className={`${compliance.typeOfAct === "central" ? 'bg-white cursor-not-allowed' : 'bg-selectbg'}   w-full p-2 border border-bordergray  rounded`}
                disabled={compliance.typeOfAct === "central"}
              >
                <option value="">Select the state</option>
                <option value="andhra pradesh">Andhra pradesh</option>
                <option value="Kerala">Kerala</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <TextInput
              label="Section"
              name="section"
              value={compliance.section}
              placeholder="Enter the section"
              onChange={handleInputChange}
            />
            <TextInput
              label="Applicability"
              name="applicability"
              value={compliance.applicability}
              placeholder="Enter the applicability"
              onChange={handleInputChange}
            />
            <SelectInput
              label="Frequency of Compliance"
              name="frequencyOfCompliance"
              value={compliance.frequencyOfCompliance}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Select frequency of compliance" },
                { value: "Monthly", label: "Monthly" },
                { value: "Bi-Monthly", label: "Bi-Monthly" },
                { value: "Quarterly", label: "Quarterly" },
                { value: "Half-Yearly", label: "Half-Yearly" },
                { value: "Annual", label: "Annual" },
                { value: "Bi-Annual", label: "Bi-Annual" },
                { value: "3 Year Once", label: "3 Year Once" },
                { value: "4 Year Once", label: "4 Year Once" },
                { value: "5 Year Once", label: "5 Year Once" },
                { value: "6 Year Once", label: "6 Year Once" },
                { value: "7 Year Once", label: "7 Year Once" },
                { value: "8 Year Once", label: "8 Year Once" },
                { value: "9 Year Once", label: "9 Year Once" },
                { value: "10 Year Once", label: "10 Year Once" },
                { value: "11 Year Once", label: "11 Year Once" },
                { value: "12 Year Once", label: "12 Year Once" },
              ]}
            />
            <TextInput
              label="Remarks"
              name="remarks"
              value={compliance.remarks}
              placeholder="Enter the remarks"
              onChange={handleInputChange}
              required={false}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Button
            label="Cancel"
            onClick={handleCancel}
            className="bg-white border border-gray-800"
          />
          <Button
            label="Save"
            type="submit"
            className="text-white bg-primary print:bg-primary border border-primary print:border-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCompliance;
