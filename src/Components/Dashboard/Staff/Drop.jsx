import { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
const Drop = ({ onFilterChange }) => {
  const [company, setCompany] = useState('');
  const [state, setState] = useState('');
  const [branch, setBranch] = useState('');
  const [area, setArea] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState(null);
  const handleFilterChange = (field, value) => {
    const filters = {
      company,
      state,
      branch,
      area,
      priority,
      date,
      [field]: value,
    };

    switch (field) {
      case 'company': setCompany(value); break;
      case 'state': setState(value); break;
      case 'branch': setBranch(value); break;
      case 'area': setArea(value); break;
      case 'priority': setPriority(value); break;
      case 'date': setDate(value); break; 
      default: break;
    }

    onFilterChange(filters);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-6 mt-4 mb-4">
      <select className="p-2 border rounded-lg focus:outline-none" value={company} onChange={(e) => handleFilterChange('company', e.target.value)}>
        <option value="">Company</option>
        <option value="Acme Corporation">Acme Corporation</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={state} onChange={(e) => handleFilterChange('state', e.target.value)}>
        <option value="">State</option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={branch} onChange={(e) => handleFilterChange('branch', e.target.value)}>
        <option value="">Branch</option>
        <option value="Rayapuram">Rayapuram</option>
        <option value="Indira Nagar">Indira Nagar</option>
        <option value="Madurai">Madurai</option>
        <option value="Adayar">Adayar</option>
        <option value="Nagaon">Nagaon</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={area} onChange={(e) => handleFilterChange('area', e.target.value)}>
        <option value="">Area</option>
        <option value="Area1">Area 1</option>
        <option value="Area2">Area 2</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={priority} onChange={(e) => handleFilterChange('priority', e.target.value)}>
        <option value="">Priority</option>
        <option value="Priority1">Priority 1</option>
        <option value="Priority2">Priority 2</option>
      </select>

      <DatePicker
        block
        placeholder="Date Range"
        format="dd-MM-yyyy"
        onChange={(value) => handleFilterChange('date', value)} 
      />
    </div>
  );
};

export default Drop;