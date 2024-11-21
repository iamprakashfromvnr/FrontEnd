import React, { useState } from 'react'
import TextInput from '../TextInput'
import SelectInput from '../SelectInput'
import Button from '../Button'
import { GoUpload } from 'react-icons/go'
import { IoCloseSharp, IoDocumentTextOutline } from "react-icons/io5";
import { FaAngleLeft } from 'react-icons/fa'
import CheckedSelect from '../CheckedSelect'
import DatePicker from 'react-datepicker'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const EditCompliances = ({ onClose }) => {
    const navigate = useNavigate()
    const [LastfillDate, setLastfillDate] = useState(null);
    const [currentfillDate, setcurrentfillDate] = useState(null);
    // const [selectedOptions, setSelectedOptions] = useState([]);
    const [compliance, setCompliance] = useState({
        natureOfCompliance: 'high', activity: 'PF Remittance', typeOfAct: 'state',
        applicationLaborAct: 'Provident fund  miscellaneous act, 1952', nameOfForm: 'PF Challan', dueDate: '15 of every month',
        section: '', remarks: '', penalty: '4,000.00', state: 'Tamilnadu',
        applicability: '20 Employees', frequencyOfCompliance: 'frequency 2', priorityType: [],
        lastFillingDate: '15 of every month', notification: '7', score: '10', documentPdf: null
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCompliance({ ...compliance, [name]: value, })
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setCompliance({ ...compliance, documentPdf: URL.createObjectURL(file), });
        }
    };
    const handleCancel = () => {
        setCompliance({
            natureOfCompliance: '', activity: '', typeOfAct: '', applicationLaborAct: '', nameOfForm: '',
            dueDate: '', section: '', remarks: '', penalty: '', state: '', applicability: '',
            frequencyOfCompliance: '', priorityType: '', lastFillingDate: '', notification: '',
            score: '', documentPdf: null

        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(compliance)
        setCompliance({
            natureOfCompliance: '', activity: '', typeOfAct: '', applicationLaborAct: '', penalty: '',
            dueDate: '', section: '', remarks: '', nameOfForm: '', state: '', applicability: '',
            frequencyOfCompliance: '', priorityType: [1, 2], lastFillingDate: '', notification: '',
            score: '', documentPdf: null
        })
    }
    const handleSelectedOptions = (options) => {
        // setSelectedOptions(options)
        setCompliance({ priorityType: options })
    };

    return (
        <div className='h-full p-5 shadow-lg z-10'>
            <div className="flex items-center justify-between">
                <h2 className='text-xl font-bold'>Filling Details</h2>
                <button type='button' onClick={onClose} className="w-36 py-1.5 bg-primary text-white rounded cursor-pointer flex items-center justify-center gap-2">
                    <FaAngleLeft /><span>Back to List</span>
                </button>
            </div>
            <form onSubmit={handleSubmit} className='mt-6'>
                <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
                    <div className='flex flex-col gap-3'>
                        <TextInput label='Compliance' name='activity' value={compliance.activity} placeholder='Enter the activity' onChange={handleInputChange} />
                        <SelectInput label="Type Of Act" name="typeOfAct" value={compliance.typeOfAct} onChange={handleInputChange}
                            options={[
                                { value: "state", label: "State" },
                                { value: "central", label: "Central" },
                            ]}
                        />
                        <TextInput label='Applicable Labor Act' name='applicationLaborAct' value={compliance.applicationLaborAct} placeholder='Enter The applicable law' onChange={handleInputChange} />
                        <TextInput label='Section' name='section' value={compliance.section} placeholder='Enter the section' onChange={handleInputChange} />
                        <label htmlFor='#lastfillingDate' className='block mb-2 font-semibold'>Last Filling Date</label>
                        <div className='relative'>
                            <Flatpickr
                                className="flex justify-between w-full  p-2 border border-bordergray  bg-selectbg rounded"
                                value={LastfillDate}
                                onChange={(date) => setLastfillDate(date)}
                                options={{
                                    dateFormat: "d-m-Y",
                                    allowInput: true,
                                }}
                                placeholder="Last Filling Date"
                            />
                            {!LastfillDate && <MdOutlineCalendarMonth size={20} className='top-2.5 right-2 absolute' />}
                           {LastfillDate && <IoCloseSharp size={20} onClick={()=>setLastfillDate(null)} className='top-2.5 right-2 absolute cursor-pointer' />}
                        </div>

                        <TextInput label='Penalty' name='penalty' value={compliance.penalty} placeholder='Enter the penalty' onChange={handleInputChange} />
                        <div className="mb-2">
                            <label className="block mb-2 font-semibold">Upload Document</label>
                            <label htmlFor="documentPdf" className="bg-primary text-white w-36 relative px-4 py-2 flex gap-3 justify-center items-center rounded cursor-pointer">
                                {compliance.documentPdf ? (<span><IoDocumentTextOutline size={22} /></span>)
                                    : (<span><GoUpload size={22} /></span>)}
                                {compliance.documentPdf ? (<span>Sample...pdf</span>)
                                    : (<span className='font-semibold'>upload</span>)}
                                <input id="documentPdf" type="file" accept="pdf/*" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TextInput label='Name of Form' name='nameOfForm' value={compliance.nameOfForm} placeholder='Enter the name of form' onChange={handleInputChange} />
                        <div className="mb-3">
                            <label className="block mb-2 font-semibold">State</label>
                            <select
                                name="state"
                                value={compliance.state}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-bordergray rounded"
                                disabled={compliance.typeOfAct === 'central'}
                            >
                                <option value="">Select the state</option>
                                <option value="Andhra pradesh">Andhra pradesh</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Tamilnadu">Tamilnadu</option>
                                <option value="Hydrabad">Hydrabad</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                        <TextInput label='Applicability' name='applicability' value={compliance.applicability} placeholder='Enter the applicability' onChange={handleInputChange} />
                        <div className='flex flex-col mb-3 relative'>
                            <label className='block font-semibold mb-2'>Priority Type</label>
                            <CheckedSelect selectedOptions={compliance.priorityType} setSelectedOptions={handleSelectedOptions} />
                        </div>
                        {/* <TextInput label='Current Filling Date' name='lastFillingDate' value={compliance.lastFillingDate} placeholder='Enter The current filling date' onChange={handleInputChange} /> */}
                        <label htmlFor='#currentfillingDate' className='block mb-1 font-semibold'>current Filling Date</label>
                        <div className='relative'>
                            <Flatpickr
                                className="flex justify-between w-full  p-2 border border-bordergray  bg-selectbg rounded"
                                value={currentfillDate}
                                onChange={(date) => setcurrentfillDate(date)}
                                options={{
                                    dateFormat: "d-m-Y",
                                    allowInput: true,
                                }}
                                placeholder="Current Filling Date"
                            />
                            {!currentfillDate && <MdOutlineCalendarMonth size={20} className='top-2.5 right-2 absolute' />}
                            {currentfillDate &&  <IoCloseSharp size={20} onClick={()=>setcurrentfillDate(null)}className='top-2.5 right-2 absolute cursor-pointer' />}


                        </div>
                        <TextInput label='Remarks' name='remarks' value={compliance.remarks} placeholder='Enter the remarks' onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <button onClick={onClose} className='border border-gray-800 w-28 h-8 rounded'>Cancel</button>
                    <button type='submit' className='text-white bg-primary w-28 h-8 rounded border-primary'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditCompliances

// import React, { useState } from 'react'
// import TextInput from '../TextInput'
// import SelectInput from '../SelectInput'
// import Button from '../Button'
// import { GoUpload } from 'react-icons/go'
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { FaAngleLeft } from 'react-icons/fa'
// import CheckedSelect from '../CheckedSelect'
// import DatePicker from 'react-datepicker'
// import { MdOutlineCalendarMonth } from 'react-icons/md'

// const EditCompliances = ({ onClose }) => {
//     const [LastfillDate, setLastfillDate] = useState(null);
//     const [currentfillDate,setcurrentfillDate]=useState(null);
//         // const [selectedOptions, setSelectedOptions] = useState([]);
//     const [compliance, setCompliance] = useState({
//         natureOfCompliance: 'high', activity: 'PF Remittance', typeOfAct: 'state',
//         applicationLaborAct: 'Provident fund  miscellaneous act, 1952',nameOfForm:'PF Challan', dueDate: '15 of every month',
//         section: '', remarks: '', penalty: '4,000.00', state: 'Tamilnadu',
//         applicability: '20 Employees', frequencyOfCompliance: 'frequency 2', priorityType: [],
//         lastFillingDate: '15 of every month', notification: '7', score: '10', documentPdf: null
//     })
//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setCompliance({ ...compliance, [name]: value, })
//     }
//     const handleFileChange = (e) => {
//         const file = e.target.files[0]
//         if (file) {
//             setCompliance({ ...compliance, documentPdf: URL.createObjectURL(file), });
//         }
//     };
//     // const handleCancel = () => {
//     //     setCompliance({
//     //         natureOfCompliance: '', activity: '', typeOfAct: '', applicationLaborAct: '', nameOfForm:'',
//     //         dueDate: '', section: '', remarks: '', penalty: '', state: '', applicability: '',
//     //         frequencyOfCompliance: '', priorityType: '', lastFillingDate: '', notification: '',
//     //         score: '', documentPdf: null
//     //     })&&onClose
//     // }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Form submitted!!');
//         console.log(compliance)
//         setCompliance({
//             natureOfCompliance: '', activity: '', typeOfAct: '', applicationLaborAct: '',penalty:'',
//             dueDate: '', section: '', remarks: '', nameOfForm: '', state: '', applicability: '',
//             frequencyOfCompliance: '', priorityType: [1, 2], lastFillingDate: '', notification: '',
//             score: '', documentPdf: null
//         })
//     }
//     const handleSelectedOptions = (options) => {
//         // setSelectedOptions(options)
//         setCompliance({ priorityType: options })
//     };

//     return (
//         <div className='h-full p-5 shadow-lg z-10'>
//             <div className="flex items-center justify-between">
//                 <h2 className='text-xl font-bold'>Filling Details</h2>
//                 <button type='button' onClick={onClose} className="w-36 py-1.5 bg-primary text-white rounded cursor-pointer flex items-center justify-center gap-2">
//                     <FaAngleLeft /><span>Back to List</span>
//                 </button>
//             </div>
//             <form onSubmit={handleSubmit} className='mt-6'>
//                 <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
//                     <div className='flex flex-col gap-3'>
//                     <TextInput label='Compliance' name='activity' value={compliance.activity} placeholder='Enter the activity' onChange={handleInputChange} />
//                     <SelectInput label="Type Of Act" name="typeOfAct" value={compliance.typeOfAct} onChange={handleInputChange}
//                         options={[
//                             { value: "state", label: "State" },
//                             { value: "central", label: "Central" },
//                         ]}
//                     />
//                     <TextInput label='Applicable Labor Act' name='applicationLaborAct' value={compliance.applicationLaborAct} placeholder='Enter The applicable law' onChange={handleInputChange} />
//                     <TextInput label='Section' name='section' value={compliance.section} placeholder='Enter the section' onChange={handleInputChange} />

//                     {/* <TextInput label='Last Filling Date' name='lastFillingDate' value={compliance.lastFillingDate} placeholder='Enter The last filling date' onChange={handleInputChange} /> */}
//                     <label htmlFor='#lastfillingDate' className='block mb-2 font-semibold'>Last Filling Date</label>
//                     <div className='flex justify-between w-full p-2 border border-bordergray  bg-selectbg rounded'>
//                     <DatePicker
//                         id="lastfillingDate"
//                         selected={LastfillDate}
//                         onChange={(date) => setLastfillDate(date)}  
//                         disabledKeyboardNavigation
//                         placeholderText="Last Filling Date"
//                         className=" text-input bg-transparent w-full focus-visible:outline-none border-none flex-1"
//                     />
//                     <MdOutlineCalendarMonth size={20} />
//                     </div>
//                         {/* <SelectInput label="Nature Of Compliance" name="natureOfCompliance" value={compliance.natureOfCompliance} onChange={handleInputChange}
//                             options={[
//                                 { value: "", label: "Statutory payment" },
//                                 { value: "high", label: "High" },
//                                 { value: "medium", label: "Medium" },
//                                 { value: "low", label: "Low" },
//                             ]}
//                         /> */}
//                         <TextInput label='Penalty' name='penalty' value={compliance.penalty} placeholder='Enter the penalty' onChange={handleInputChange} />
//                         <div className="mb-2">
//                             <label className="block mb-2 font-semibold">Upload Document</label>
//                             <label htmlFor="documentPdf" className="bg-primary text-white w-36 relative px-4 py-2 flex gap-3 justify-center items-center rounded cursor-pointer">
//                                 {compliance.documentPdf ? (<span><IoDocumentTextOutline size={22} /></span>)
//                                     : (<span><GoUpload size={22} /></span>)}
//                                 {compliance.documentPdf ? (<span>Sample...pdf</span>)
//                                     : (<span className='font-semibold'>upload</span>)}
//                                 <input id="documentPdf" type="file" accept="pdf/*" className="hidden" onChange={handleFileChange} />
//                             </label>
//                         </div>                        
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                     <TextInput label='Name of Form' name='nameOfForm' value={compliance.nameOfForm} placeholder='Enter the name of form' onChange={handleInputChange} />
//                         <div className="mb-3">
//                             <label className="block mb-2 font-semibold">State</label>
//                             <select
//                                 name="state"
//                                 value={compliance.state}
//                                 onChange={handleInputChange}
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 disabled={compliance.typeOfAct === 'central'}
//                             >
//                                 <option value="">Select the state</option>
//                                 <option value="Andhra pradesh">Andhra pradesh</option>
//                                 <option value="Kerala">Kerala</option>
//                                 <option value="Tamilnadu">Tamilnadu</option>
//                                 <option value="Hydrabad">Hydrabad</option>
//                                 <option value="Mumbai">Mumbai</option>
//                             </select>
//                         </div>
//                         <TextInput label='Applicability' name='applicability' value={compliance.applicability} placeholder='Enter the applicability' onChange={handleInputChange} />
//                         <div className='flex flex-col mb-3 relative'>
//                             <label className='block font-semibold mb-2'>Priority Type</label>
//                             <CheckedSelect selectedOptions={compliance.priorityType} setSelectedOptions={handleSelectedOptions} />
//                         </div>
//                         {/* <TextInput label='Current Filling Date' name='lastFillingDate' value={compliance.lastFillingDate} placeholder='Enter The current filling date' onChange={handleInputChange} /> */}
//                         <label htmlFor='#currentfillingDate' className='block mb-2 font-semibold'>current Filling Date</label>
//                     <div className='flex justify-between w-full p-2 border border-bordergray  bg-selectbg rounded'>
//                     <DatePicker
//                         id="currentfillingDate"
//                         selected={currentfillDate}
//                         onChange={(date) => setcurrentfillDate(date)}  
//                         disabledKeyboardNavigation
//                         placeholderText="current Filling Date"
//                         className=" text-input bg-transparent w-full focus-visible:outline-none border-none flex-1"
//                     />
//                     <MdOutlineCalendarMonth size={20} />
//                     </div>
//                         <TextInput label='Remarks' name='remarks' value={compliance.remarks} placeholder='Enter the remarks' onChange={handleInputChange} />
//                     </div>
//                 </div>
//                 <div className='flex justify-center items-center gap-5'>
//                     <button onClick={onClose} className='border border-gray-800 w-28 h-8 rounded'>Cancel</button>
//                     <button  type='submit' className='text-white bg-primary w-28 h-8 rounded border-primary'>Save</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default EditCompliances