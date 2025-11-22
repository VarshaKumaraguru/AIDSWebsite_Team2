import React from 'react';
import FacultyCard from '../components/FacultyCard';

const FacultyInfo = () => {
  const hod = {
    name: 'Dr. S. C. Lingareddy',
    specialization: 'Image Processing, Pattern Recognition',
    googleId: 'hod.aids@sairam.edu.in',
    imageUrl: 'https://image2url.com/images/1763822054111-2abc1681-8378-4dc4-8dc2-4f5b925cb42d.jpg',
  };

  const faculty = [
    {
      name: 'Dr. A. Vani',
      specialization: 'Data Mining',
      googleId: 'vani.aids@sairam.edu.in',
      mailId: 'vani.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822112670-30f35cb9-0929-4f06-b9ca-c45e12918343.jpg',
    },
    {
      name: 'Dr. S. Sumathi',
      specialization: 'Wireless Sensor Networks',
      googleId: 'sumathi.aids@sairam.edu.in',
      mailId: 'sumathi.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822136498-f6d58635-7e85-4603-9221-3e1f7d2fbed3.jpg',
    },
    {
      name: 'Dr. R. Jothilakshmi',
      specialization: 'Cloud Computing',
      googleId: 'jothilakshmi.aids@sairam.edu.in',
      mailId: 'jothilakshmi.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822155502-c8afffeb-0a35-431f-b5de-69243fddd2dc.jpg',
    },
    {
      name: 'Dr. G. Senthil Kumar',
      specialization: 'Machine Learning',
      googleId: 'senthilkumar.aids@sairam.edu.in',
      mailId: 'senthilkumar.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822177999-864581f0-bc1f-4d2a-b0ca-79f23c28982e.jpg',
    },
    {
      name: 'Dr. V. Anbarasu',
      specialization: 'Natural Language Processing',
      googleId: 'anbarasu.aids@sairam.edu.in',
      mailId: 'anbarasu.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822257239-e5a9f5d2-f3b4-4ebb-90d1-433bcaea318a.jpg',
    },
    {
      name: 'Dr. S. Karthik',
      specialization: 'Deep Learning',
      googleId: 'karthik.aids@sairam.edu.in',
      mailId: 'karthik.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822289625-334c40ac-dec6-43aa-bede-7612d5d28da5.jpg',
    },
    {
      name: 'Dr. P. Suresh',
      specialization: 'Computer Vision',
      googleId: 'suresh.aids@sairam.edu.in',
      mailId: 'suresh.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822307567-7634608c-a785-4a28-a3e7-5a2ac0e0c9e0.jpg',
    },
    {
      name: 'Dr. K. Vijayalakshmi',
      specialization: 'Big Data Analytics',
      googleId: 'vijayalakshmi.aids@sairam.edu.in',
      mailId: 'vijayalakshmi.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822328307-2aa96916-1928-4a95-a4cc-3bd0de25397d.jpg',
    },
    {
      name: 'Dr. N. Priya',
      specialization: 'Reinforcement Learning',
      googleId: 'priya.aids@sairam.edu.in',
      mailId: 'priya.aids@sairam.edu.in',
      googleScholar: 'https://scholar.google.com/citations?user=xxxxxxx',
      imageUrl: 'https://image2url.com/images/1763822422587-0efb8c14-6c02-48e5-ab2f-a156502f48e3.jpg',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Faculty Information</h1>
      
      {/* HOD Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-12">
        <h2 className="text-2xl font-bold p-6 text-center text-gray-700">Head of Department</h2>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={hod.imageUrl}
              alt={hod.name}
              className="h-48 w-full object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{hod.name}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{hod.specialization}</p>
            <p className="mt-2 text-gray-500">{hod.googleId}</p>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-xl shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.name} faculty={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyInfo;
