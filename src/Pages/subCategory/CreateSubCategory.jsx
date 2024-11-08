import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import Button from '../../Components/Button'
import SelectInput from '../../Components/SelectInput'
import { Link, useNavigate } from 'react-router-dom'

const CreateSubCategory = () => {
    const navigate=useNavigate()
    const [categories, setCategories] = useState({
        category: '',
        subCategory: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCategories({ ...categories, [name]: value, })
    }

    const handleCancel = () => {
        setCategories({
            category: '',
            subCategory: '',
        })
        navigate('/subcatlist')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!!');
        console.log(categories)
        setCategories({
            category: '',
            subCategory: '',
        })
        navigate('/subcatlist')
    }

    return (
        <div className='h-full p-5 shadow-lg'>
            <div className="flex items-center justify-between">
                <h2 className='text-xl font-bold'>Create Sub Category</h2>
                <Link to="/subcatlist"><button className="w-36 py-1.5 bg-primary text-white rounded cursor-pointer flex items-center justify-center gap-2">
                    Category List
                </button> </Link>
            </div>
            <form onSubmit={handleSubmit} className='py-10 flex flex-col gap-80'>
                <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-10'>
                    <SelectInput label="Category" name="category" value={categories.category} onChange={handleInputChange}
                        options={[
                            { value: "", label: "Select the category" },
                            { value: "Category X", label: "Category X" },
                            { value: "Category Y", label: "Category Y" },
                            { value: "Category Z", label: "Category Z" },
                        ]}
                    />
                    <TextInput label='Sub Category' name='subCategory' value={categories.subCategory} placeholder='Enter the sub category' onChange={handleInputChange} />
                </div>

                <div className='flex justify-center items-center gap-5'>
                    <Button label='Cancel' onClick={handleCancel} className='bg-white border border-gray-800' />
                    <Button label='Save' type='submit' className='text-white bg-primary border border-primary' />
                </div>
            </form>
        </div>
    )
}

export default CreateSubCategory