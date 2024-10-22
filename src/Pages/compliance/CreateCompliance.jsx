import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import SelectInput from "../../Components/SelectInput";
import Button from "../../Components/Button";
import { GoUpload } from "react-icons/go";
// import pdf from '../../Images/pdf.webp'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CheckedSelect from "../../Components/CheckedSelect";

const CreateCompliance = () => {
  const navigate = useNavigate();
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
    }
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
    navigate("/compliancelist");

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!!");
    console.log(compliance);
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
    navigate("/compliancelist");
  };
  const handleSelectedOptions = (options) => {
    setSelectOptions(options);
  };

  return (
    <div className="h-full p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Create compliance</h2>
        <Link to="/compliancelist">
          <button className="w-36 py-1.5 bg-primary text-white rounded cursor-pointer flex items-center justify-center gap-2">
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
                { value: "", label: "Statutory payment" },
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" },
              ]}
            />
            <SelectInput
              label="Type Of Act"
              name="typeOfAct"
              value={compliance.typeOfAct}
              onChange={handleInputChange}
              options={[
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
                  <span>Sample...pdf</span>
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
                className="w-full p-2 border border-bordergray bg-selectbg rounded"
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
                { value: "frequency 1", label: "Frequency 1" },
                { value: "frequency 2", label: "Frequency 2" },
                { value: "frequency 3", label: "Frequency 3" },
              ]}
            />
            <TextInput
              label="Remarks"
              name="remarks"
              value={compliance.remarks}
              placeholder="Enter the remarks"
              onChange={handleInputChange}
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
            className="text-white bg-primary border border-yellow-500"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCompliance;
