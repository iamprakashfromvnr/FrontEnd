import { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
const Filter = () => {
  const [company, setCompany] = useState('');
  const [state, setState] = useState('');
  const [branch, setBranch] = useState('');
  const [area, setArea] = useState('');
  const [priority, setPriority] = useState('');

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-6 mt-4 mb-4">
      <select className="p-2 border rounded-lg focus:outline-none" value={company} onChange={handleCompanyChange}>
        <option value="">Company</option>
        <option value="Acme Corporation">Acme Corporation</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={state} onChange={handleStateChange}>
        <option value="">State</option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="kerala">Kerala</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={branch} onChange={handleBranchChange}>
        <option value="">Branch</option>
        <option value="Rayapuram">Rayapuram</option>
        <option value="Indira Nagar">Indira Nagar</option>
        <option value="Madurai">Madurai</option>
        <option value="Adayar">Adayar</option>
        <option value="Nagaon">Nagaon</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={area} onChange={handleAreaChange}>
        <option value="">Area</option>
        <option value="Area1">Area 1</option>
        <option value="Area2">Area 2</option>
      </select>

      <select className="p-2 border rounded-lg focus:outline-none" value={priority} onChange={handlePriorityChange}>
        <option value="">Priority</option>
        <option value="Priority1">Priority 1</option>
        <option value="Priority2">Priority 2</option>
      </select>

      <DatePicker block placeholder="Date Range " />
    </div>
  );
};

export default Filter;