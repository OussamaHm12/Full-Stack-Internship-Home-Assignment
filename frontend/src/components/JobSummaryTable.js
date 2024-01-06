// JobSummaryTable.js
import React from 'react';

const JobSummaryTable = ({ jobSummary }) => {
  return (
    <div>
      <h2>Job Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Average Salary</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(jobSummary).map((jobTitle) => (
            <tr key={jobTitle}>
              <td>{jobTitle}</td>
              <td>{jobSummary[jobTitle]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobSummaryTable;
