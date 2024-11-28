// import React, { useState } from "react";
// import doctorsData from "../Data/doctorData.jsx";
// import DoctorCard from "./DoctorCard.jsx";
// import "./Doctors.css";

// const Doctors = () => {
//   const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

//   // const handleFilter = (specialty) => {
//   //   if (specialty === "All") {
//   //     setFilteredDoctors(doctorsData);
//   //   } else {
//   //     setFilteredDoctors(
//   //       doctorsData.filter((doctor) => doctor.specialty === specialty)
//   //     );
//   //   }
//   // };

//   const handleFilter = (specialty) => {
//     console.log("Filtering for specialty:", specialty);
//     if (specialty === "All") {
//       setFilteredDoctors(doctorsData);
//     } else {
//       const filtered = doctorsData.filter(
//         (doctor) => doctor.specialty === specialty
//       );
//       console.log("Filtered doctors:", filtered);
//       setFilteredDoctors(filtered);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="filter-container">
//         {/* <h2>Browse through the doctors specialist.</h2> */}
//         <div className="filter-buttons">
//           <button onClick={() => handleFilter("General physician")}>
//             General physician
//           </button>
//           <button onClick={() => handleFilter("Gynecologist")}>
//             Gynecologist
//           </button>
//           <button onClick={() => handleFilter("Dermatologist")}>
//             Dermatologist
//           </button>
//           <button onClick={() => handleFilter("Pediatricians")}>
//             Pediatricians
//           </button>
//           <button onClick={() => handleFilter("Neurologist")}>
//             Neurologist
//           </button>
//           <button onClick={() => handleFilter("Gastroenterologist")}>
//             Gastroenterologist
//           </button>
//           <button onClick={() => handleFilter("All")}>All</button>
//         </div>
//       </div>

//       <div className="doctors-list">
//         {filteredDoctors.map((doctor) => (
//           <DoctorCard
//             key={doctor.id}
//             name={doctor.name}
//             specialty={doctor.specialty}
//             availability={doctor.availability}
//             image={doctor.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Doctors;


import React, { useState } from "react";
import doctorsData from "../Data/doctorData.jsx";
import DoctorCard from "./DoctorCard.jsx";
import "./Doctors.css";

const Doctors = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  const handleFilter = (specialty) => {
    console.log("Filtering for:", specialty);
    if (specialty === "All") {
      setFilteredDoctors(doctorsData);
    } else {
      const filtered = doctorsData.filter(
        (doctor) => doctor.specialty === specialty
      );
      console.log("Filtered doctors:", filtered);
      setFilteredDoctors(filtered);
    }
  };

  return (
    <div className="app">
      <div className="filter-container">
        <div className="filter-buttons">
          <button onClick={() => handleFilter("General physician")}>
            General physician
          </button>
          <button onClick={() => handleFilter("Gynecologist")}>
            Gynecologist
          </button>
          <button onClick={() => handleFilter("Dermatologist")}>
            Dermatologist
          </button>
          <button onClick={() => handleFilter("Pediatricians")}>
            Pediatricians
          </button>
          <button onClick={() => handleFilter("Neurologist")}>
            Neurologist
          </button>
          <button onClick={() => handleFilter("Gastroenterologist")}>
            Gastroenterologist
          </button>
          <button onClick={() => handleFilter("All")}>All</button>
        </div>
      </div>

      <div className="doctors-list">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            availability={doctor.availability}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
