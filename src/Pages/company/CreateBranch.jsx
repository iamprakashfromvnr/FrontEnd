import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import SelectInput from '../../Components/SelectInput'
import TextareaInput from '../../Components/TextareaInput'
import Button from '../../Components/Button'
import FileInput from '../../Components/FileInput'
import { useNavigate } from 'react-router-dom'

const CreateBranch = () => {
    const navigate=useNavigate()
    const [branch, setBranch] = useState({
        branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
        username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
        state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
        establishmentType: '', notificationAlert: '', password: '', companyImage: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBranch({ ...branch, [name]: value, })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setBranch({ ...branch, companyImage: URL.createObjectURL(file), });
        }
    };

    const handleCancel = () => {
        setBranch({
            branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
            username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
            state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
            establishmentType: '', notificationAlert: '', password: '', companyImage: null,
        })
        navigate('/clientbranchmanagement')
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(branch)
        setBranch({
            branch: '', addressLine1: '', addressLine2: '', contactPerson: '', stakeholderName: '',
            username: '', pincode: '', contactNumber: '', stakeholderDetail: '', category: '',
            state: '', priority: '', assignedStaff: '', subCategory: '', district: '',
            establishmentType: '', notificationAlert: '', password: '', companyImage: null,
        })
        navigate('clientbranchmanagement')
    }

    return (
        <div className='h-full p-5 shadow-lg'>
            <h2 className='text-xl font-bold'>Add Branch</h2>
            <form onSubmit={handleSubmit} className='pt-4 lg:p-0'>
                <FileInput imageLabel='--- Corporation' onImageChange={handleFileChange} imageSection={branch.companyImage} />
                <div className='grid grid-cols-1 gap-2 mb-6 lg:grid-cols-2 lg:gap-10'>
                    <div className='flex flex-col gap-3'>
                        <SelectInput label="Category" name="category" value={branch.category} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select category" },
                                { value: "technology", label: "Technology" },
                                { value: "finance", label: "Finance" },
                                { value: "manufacturing", label: "Manufacturing" },
                            ]}
                        />
                        <SelectInput label="State" name="state" value={branch.state} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select state" },
                                { value: "tamilnadu", label: "Tamilnadu" },
                                { value: "kerala", label: "Kerala" },
                                { value: "delhi", label: "Delhi" },
                            ]}
                        />
                        <TextInput label='Branch' name='branch' value={branch.branch} placeholder='Enter the address' onChange={handleInputChange} />
                        <TextareaInput label='Address Line 2' name='addressLine2' value={branch.addressLine2} placeholder='Enter address line 2' onChange={handleInputChange} />
                        <TextInput label='Conatct Person' name='contactPerson' value={branch.contactPerson} placeholder='Enter the contact person' onChange={handleInputChange} />
                        <SelectInput label="Prioirty" name="priority" value={branch.priority} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select priority" },
                                { value: "low", label: "Low" },
                                { value: "medium", label: "Medium" },
                                { value: "high", label: "High" },
                            ]}
                        />
                        <SelectInput label="Assigned Staff" name="assignedStaff" value={branch.assignedStaff} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select assign staff" },
                                { value: "manager", label: "Manager" },
                                { value: "supervisor", label: "Supervisor" },
                            ]}
                        />
                        <TextInput label='Stakehholder Name' name='stakeholderName' value={branch.stakeholderName} placeholder='Enter the stakeholder name' onChange={handleInputChange} />
                        <TextInput label='User Name' name='username' value={branch.username} placeholder='Enter the username' onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <SelectInput label="Sub-Category" name="subCategory" value={branch.subCategory} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select sub category" },
                                { value: "subcategory 1", label: "Subcategory 1" },
                                { value: "subcategory 2", label: "Subcategory 2" },
                            ]}
                        />
                        <SelectInput label="District" name="district" value={branch.district} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select district" },
                                { value: "chennai", label: "Chennai" },
                                { value: "madurai", label: "Madurai" },
                            ]}
                        />
                        <TextareaInput label='Address Line 1' name='addressLine1' value={branch.addressLine1} placeholder='Enter address line 1' onChange={handleInputChange} />
                        <TextInput label='Pincode' name='pincode' value={branch.pincode} placeholder='Enter the pincode' onChange={handleInputChange} />
                        <TextInput label='Contact Number or Email ID' name='contactNumber' value={branch.contactNumber} placeholder='Enter The contact number or email id' onChange={handleInputChange} />
                        <SelectInput label="Establishment Type" name="establishmentType" value={branch.establishmentType} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select establishment type" },
                                { value: "establishment A", label: "Establishment A" },
                                { value: "establishment B", label: "Establishment B" },
                                { value: "establishment C", label: "Establishment C" },
                            ]}
                        />
                        <SelectInput label="Notification Alert" name="notificationAlert" value={branch.notificationAlert} onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select notification alert" },
                                { value: "email", label: "Email" },
                                { value: "sms", label: "SMS" },
                                { value: "none", label: "None" },
                            ]}
                        />
                        <TextInput label='Stakeholder Detail with Email ID' name='stakeholderDetail' value={branch.stakeholderDetail} placeholder='Enter the email id' onChange={handleInputChange} />
                        <TextInput label='Password' type='password' name='password' value={branch.password} placeholder='Enter the password' onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <Button label='Cancel' onClick={handleCancel} className='bg-white border border-gray-800' />
                    <Button label='Save' type='submit' className='text-white bg-primary border border-yellow-500' />
                </div>
            </form>
        </div>
    )
}

export default CreateBranch