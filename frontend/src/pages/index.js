// pages/MainPage.js
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import ProcessButton from '../components/ProcessButton';
import EmployeeTable from '../components/EmployeeTable';
import JobSummaryTable from '../components/JobSummaryTable';
import api from '../services/api';

const MainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [jobSummary, setJobSummary] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleProcessClick = async () => {
    setProcessing(true);

    try {
      const result = await api.uploadFile(selectedFile);
      setEmployees(result.employees);
      setJobSummary(result.jobSummary);
    } catch (error) {
      console.error(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      <h1>CSV Parser</h1>
      <FileUpload onFileSelect={handleFileSelect} />
      {selectedFile && <ProcessButton onProcessClick={handleProcessClick} disabled={processing} />}
      {employees.length > 0 && <EmployeeTable employees={employees} />}
      {Object.keys(jobSummary).length > 0 && <JobSummaryTable jobSummary={jobSummary} />}
    </div>
  );
};

export default MainPage;
