// import React, { useState } from "react";
// // import axios from "axios";
// import TextInput from "../segments/TextInput";
// import SelectInput from "../segments/SelectInput";
// import FileInput from "../segments/FileInput";
// import TextareaInput from "../segments/TextareaInput";
// import Button from "../segments/Button";
// import { GoUpload } from "react-icons/go";

// const CompanyForm = () => {
//     const [formData, setFormData] = useState({
//         companyName: "",
//         branch: "",
//         addressLine1: "",
//         addressLine2: "",
//         contactPerson: "",
//         stakeholderName: "",
//         username: "",
//         pincode: "",
//         contactNumberEmail: "",
//         stakeholderDetailEmail: "",
//         category: "",
//         state: "",
//         priority: "",
//         assignedStaff: "",
//         subCategory: "",
//         district: "",
//         establishmentType: "",
//         notificationAlert: "",
//         password: "",
//         image: null,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFormData((prevState) => ({
//                 ...prevState,
//                 profilePhoto: URL.createObjectURL(file),
//             }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         alert('Your form is submitted')
//         // const submitData = new FormData();
//         // for (const key in formData) {
//         //   submitData.append(key, formData[key]);
//         // }
//         // try {
//         //   const response = await axios.post("/api/company", submitData, {
//         //     headers: {
//         //       "Content-Type": "multipart/form-data",
//         //     },
//         //   });
//         //   console.log("Company created successfully", response.data);
//         // } catch (error) {
//         //   console.error("There was an error creating the company!", error);
//         // }
//     };

//     const handleCancel = () => {
//         setFormData({
//             companyName: "",
//             branch: "",
//             addressLine1: "",
//             addressLine2: "",
//             contactPerson: "",
//             stakeholderName: "",
//             username: "",
//             pincode: "",
//             contactNumberEmail: "",
//             stakeholderDetailEmail: "",
//             category: "",
//             state: "",
//             priority: "",
//             assignedStaff: "",
//             subCategory: "",
//             district: "",
//             establishmentType: "",
//             notificationAlert: "",
//             password: "",
//             image: null,
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Add New Company</h2>

//             <div className="flex flex-col justify-center items-center pb-8">
//                 <label htmlFor="profilePhoto" className="relative cursor-pointer">
//                     <div className="w-40 h-40 bg-gray-100 shadow-md rounded-full overflow-hidden flex items-center justify-center">
//                         {formData.profilePhoto ? (
//                             <img src={formData.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
//                         ) : (
//                             <span className="text-gray-500 text-6xl ">
//                                 <GoUpload />
//                             </span>
//                         )}
//                     </div>
//                     <input
//                         id="profilePhoto"
//                         type="file"
//                         accept="image/*"
//                         className="hidden"
//                         onChange={handleFileChange}
//                     />
//                 </label>
//                 <p className="mt-7 text-lg font-semibold">User Profile Photo</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <TextInput
//                     label="Company Name"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Branch"
//                     name="branch"
//                     value={formData.branch}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Address Line 1"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Address Line 2"
//                     name="addressLine2"
//                     value={formData.addressLine2}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Contact Person"
//                     name="contactPerson"
//                     value={formData.contactPerson}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Stakeholder Name"
//                     name="stakeholderName"
//                     value={formData.stakeholderName}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Pincode"
//                     name="pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                 />
//                 <TextInput
//                     label="Contact Number / Email"
//                     name="contactNumberEmail"
//                     value={formData.contactNumberEmail}
//                     onChange={handleChange}
//                 />
//                 <TextareaInput
//                     label="Stakeholder Detail (Email)"
//                     name="stakeholderDetailEmail"
//                     value={formData.stakeholderDetailEmail}
//                     onChange={handleChange}
//                 />
//                 <SelectInput
//                     label="Category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     options={[
//                         { value: "tech", label: "Technology" },
//                         { value: "finance", label: "Finance" },
//                         { value: "manufacturing", label: "Manufacturing" },
//                     ]}
//                 />
//                 <SelectInput
//                     label="State"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     options={[
//                         { value: "CA", label: "California" },
//                         { value: "TX", label: "Texas" },
//                         { value: "NY", label: "New York" },
//                     ]}
//                 />
//                 <SelectInput
//                     label="Priority"
//                     name="priority"
//                     value={formData.priority}
//                     onChange={handleChange}
//                     options={[
//                         { value: "low", label: "Low" },
//                         { value: "medium", label: "Medium" },
//                         { value: "high", label: "High" },
//                     ]}
//                 />
//                 <TextInput
//                     label="Assigned Staff"
//                     name="assignedStaff"
//                     value={formData.assignedStaff}
//                     onChange={handleChange}
//                 />
//                 <SelectInput
//                     label="Sub-Category"
//                     name="subCategory"
//                     value={formData.subCategory}
//                     onChange={handleChange}
//                     options={[
//                         { value: "sub1", label: "Subcategory 1" },
//                         { value: "sub2", label: "Subcategory 2" },
//                     ]}
//                 />
//                 <TextInput
//                     label="District"
//                     name="district"
//                     value={formData.district}
//                     onChange={handleChange}
//                 />
//                 <SelectInput
//                     label="Establishment Type"
//                     name="establishmentType"
//                     value={formData.establishmentType}
//                     onChange={handleChange}
//                     options={[
//                         { value: "startup", label: "Startup" },
//                         { value: "enterprise", label: "Enterprise" },
//                     ]}
//                 />
//                 <SelectInput
//                     label="Notification Alert"
//                     name="notificationAlert"
//                     value={formData.notificationAlert}
//                     onChange={handleChange}
//                     options={[
//                         { value: "email", label: "Email" },
//                         { value: "sms", label: "SMS" },
//                         { value: "none", label: "None" },
//                     ]}
//                 />
//                 <TextInput
//                     label="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     type="password"
//                 />
//             </div>

//             <div className="flex justify-end space-x-4 mt-4">
//                 <Button
//                     label="Submit"
//                     type="submit"
//                     className="bg-yellow-500 text-white hover:bg-yellow-600"
//                 />
//                 <Button
//                     label="Cancel"
//                     onClick={handleCancel}
//                     className="bg-gray-100 text-white hover:bg-gray-600"
//                 />
//             </div>
//         </form>
//     );
// };

// export default CompanyForm;



import React from 'react'
// import { useNavigate } from 'react-router-dom'

const DemoCompany = () => {
    // const navigate = useNavigate()

    // function handleCompany() {
    //     navigate('/createCompany')
    // }
    // function handleBranch() {
    //     navigate('/createBranch')
    // }
    // function handleUser() {
    //     navigate('/createUser')
    // }
    // function handleCompliance() {
    //     navigate('/createCompliance')
    // }
    // function handleCategory() {
    //     navigate('/createCategory')
    // }
    // function handleSubCategory() {
    //     navigate('/createSubCategory')
    // }
    return (
        <div>
            <h1 className='text-2xl'>Dashboard</h1>
{/* 
            <div className='grid grid-cols-5'>
            <h2 className='bg-primary text-light border border-dark'>primary</h2><br />
    <div className='bg-gray w-20 h-15 '>gray</div><br />
    <div className='bg-input w-20 h-15 '>input</div><br />
    <div className='bg-deluge w-24 h-15 text-light'>deluge</div><br />
    <div className='bg-selectBox w-24 h-15'>selectBox</div><br />
    <div className='bg-porpoise w-24 h-15'>porpoise</div><br />
    <div className='bg-lowOrange w-24 h-15'>lowOrange</div><br />
    <div className='bg-icecastle text-dark w-24 h-15'>icecastle</div><br />
    <div className='bg-highBlue text-light w-24 h-15'>highBlue</div><br />
    <div className='bg-bunnytail  w-24 h-15'>bunnytail</div><br />
    <div className='bg-medgreen w-24 h-15'>medgreen</div><br />
    <div className='bg-youngcorn w-24 h-15'>youngcorn</div><br />
    <div className='bg-addPhoto w-24 h-15'>addPhoto</div><br />
    <div className='bg-cancel w-24 h-15'>cancel</div><br />
    <div className='bg-combadge w-24 h-15'>combadge</div><br />
    <div className='bg-comIcon w-24 h-15'>comIcon</div><br />
    <div className='bg-incomIcon w-24 h-15'>incomIcon</div><br />
    <div className='bg-totalPurple w-24 h-15'>totalPurple</div><br />
    <div className='bg-supersilver w-24 h-15'>supersilver</div><br />
    <div className='bg-backgreen w-24 h-15'>backgreen</div><br />
    <div className='bg-bred w-24 h-15'>bred</div><br />
    <div className='bg-strawberry w-24 h-15'>strawberry</div><br />
    <div className='bg-particom w-24 h-15'>particom</div><br />
    <div className='bg-overdue w-24 h-15'>overdue</div><br />
    <div className='bg-lightcoral w-24 h-15'>lightcoral</div><br />
    <div className='bg-mayablue w-24 h-15'>mayablue</div><br />
    <div className='bg-bilobaflower w-24 h-15'>bilobaflower</div><br />
    <div className='bg-splash w-24 h-15'>splash</div><br />
    <div className='bg-sulu w-24 h-15'>sulu</div><br />
    <div className='bg-perano w-24 h-15'>perano</div><br />
    <div className='bg-turquoiseblue w-24 h-15'>turquoiseblue</div><br />

            </div> */}
            {/* <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleCompany}>Company</button>
            <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleBranch}>Branch</button>
            <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleUser}>User</button>
            <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleCompliance}>Compliance</button>
            <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleCategory}>Category</button>
            <button type='button' className='bg-purple-600 border w-32 py-1 rounded text-white' onClick={handleSubCategory}>SubCategory</button> */}
        </div>
    )
}

export default DemoCompany