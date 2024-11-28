

import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewAdmin = () => {
  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Uncomment this to restrict non-authenticated users
  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <>
      <section className="page">
        <div className="container form-component">
          {/* <img src="/logo.png" alt="logo" className="logo" /> */}
          <h1 className="form-title">Add New Admin</h1>

          <div className="add-new-admin">
            <form className="form-container" onSubmit={handleAddNewAdmin}>
              {/* Name Fields */}
              <div className="input-group">
                <h3>Name</h3>
                <div className="input-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="input-group">
                <h3>Contact Info</h3>
                <div className="input-row">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* NIC and DOB */}
              <div className="input-group">
                <h3>Details</h3>
                <div className="input-row">
                  <input
                    type="text"
                    placeholder="NIC"
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Gender and Password */}
              <div className="input-group">
                <h3>Additional Info</h3>
                <div className="input-row">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Add New Admin
                </button>
              </div>
            </form>
          </div>

          <div className="text-data">
            <h2 className="admins">
              Hello Admins! <br />
              You can register yourself here.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNewAdmin;

