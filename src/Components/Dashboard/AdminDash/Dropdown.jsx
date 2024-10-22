import { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
const Dropdown = () => {
  const [company, setCompany] = useState('');
  const [state, setState] = useState('');
  const [branch, setBranch] = useState('');
  const [area, setArea] = useState('');
  const [priority, setPriority] = useState('');
  const [username, setUserName] = useState('');
  const [compliancetype, setComplianceType] = useState('');

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
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleComplianceTypeChange = (e) => {
    setComplianceType(e.target.value);
  };

  return (
    <div className="p-4 bg-white-100 mt-2">
      <div className="flex flex-col md:flex-row md:space-x-4 md:items-center gap-2">
        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={company} onChange={handleCompanyChange}>
          <option value="">Company</option>
          <option value="Acme Corporation">Acme Corporation</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={state} onChange={handleStateChange}>
          <option value="">State</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Kerala">Kerala</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={branch} onChange={handleBranchChange}>
          <option value="">Branch</option>
          <option value="Rayapuram">Rayapuram</option>
          <option value="Indira Nagar">Indira Nagar</option>
          <option value="Madurai">Madurai</option>
          <option value="Adayar">Adayar</option>
          <option value="Nagaon">Nagaon</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={area} onChange={handleAreaChange}>
          <option value="">Area</option>
          <option value="Area1">Area 1</option>
          <option value="Area2">Area 2</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={username} onChange={handleUserNameChange}>
          <option value="">User Name</option>
          <option value="username 1">Username 1</option>
          <option value="username 2">Username 2</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={compliancetype} onChange={handleComplianceTypeChange}>
          <option value="">Compliance Type</option>
          <option value="compliance type 1">Compliance Type 1</option>
          <option value="compliance type 2">Compliance Type 2</option>
        </select>

        <select className="p-2 border rounded-lg focus:outline-none flex-1" value={priority} onChange={handlePriorityChange}>
          <option value="">Priority</option>
          <option value="Priority1">Priority 1</option>
          <option value="Priority2">Priority 2</option>
        </select>

        <div className="flex-0 mt-1 md:mt-0">
          <DatePicker block placeholder="Date Range" />    
        </div>
      </div>
    </div>
  );
};

export default Dropdown;