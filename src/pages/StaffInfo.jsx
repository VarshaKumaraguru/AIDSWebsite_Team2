import React from 'react';
import StaffCard from '../components/StaffCard';

const StaffInfo = () => {
  const staff = [
    {
      name: 'Mr. A. S. A. Krishnan',
      designation: 'System Administrator',
      mailId: 'krishnan.aids@sairam.edu.in',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mr. C. Suresh',
      designation: 'Lab Technician',
      mailId: 'suresh.aids@sairam.edu.in',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mrs. S. Thenmozhi',
      designation: 'Lab Technician',
      mailId: 'thenmozhi.aids@sairam.edu.in',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Staff Information</h1>
      
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-xl shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <StaffCard key={member.name} staff={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
