

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import banner from "../images/AboutUs.jpg";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import explore from "../images/explore.jpg"


import "./About.css";
import Footer from "../Components/Footer";

function AboutUs({}) {
  
  const [current, setCurrent] = useState(0);
  const slides=SliderData;
  const length=slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
    <>
      <Navbar />
      <section className="section">
        <div className="banner-container">
          <img src={banner} alt="banner" className="banner-image" />
          <div className="banner-text">
            <p className="heading">About Liberty</p>
          </div>
        </div>
      </section>

      <div div className="section">
        <div className="text-container">
          <p className="subheading">Liberty Medicare</p>
          <p>
          Our platform offers seamless facilities for managing healthcare appointments and payments, ensuring convenience and efficiency for patients and providers alike. With an intuitive interface, users can schedule appointments with their preferred doctors, choose suitable times, and receive instant confirmations. The integrated payment system streamlines the process, allowing patients to securely pay for consultations, treatments, or related services online. Real-time notifications and reminders keep users informed about upcoming appointments and transactions, minimizing missed sessions or delays. By combining flexibility, security, and ease of use, our facilities aim to make healthcare access hassle-free and patient-focused..
          </p>
        </div>
      

        {/* <section className="section"> */}
          <div className="text-container">
            <p className="subheading">Chairman's Message</p>
            <p>- Dr. Deepansh</p>
            <p>
              At the heart of our organization lies a commitment to innovation, excellence, and the well-being of the communities we serve. As Chairman, it brings me great pride to lead a group that consistently strives to redefine industry standards and create value for all stakeholders.

              Our journey has always been guided by a vision to build a sustainable and inclusive future. We believe in fostering strong relationships, embracing technological advancements, and upholding the highest ethical standards in everything we do. Each milestone we achieve is a testament to the dedication and passion of our team, whose unwavering focus on quality and service sets us apart.

              As we move forward, we remain steadfast in our mission to inspire progress, empower individuals, and contribute positively to society. Together, we can continue to grow, innovate, and make a meaningful impact on the world around us.
            </p>
          </div>
      </div>
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide,index)=>{
        return(
          <div className={index===current ?'slide active':'slide'} key={index}>
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        )
      })}
    </section>

    <div className="Specialties-navbar">
      <Link className='Specialties'>Specialties</Link>
      <Link className='Specialties'>Procedures</Link>
      <Link className='Specialties'>ProHeath</Link>
    </div>
    <section className="explore-centers">
      <div className="heading">
        <h3 >Explore our Centres of Clinical Excellence</h3>
        <p>Apollo Hospitals has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities spread across several of the Apollo hospital locations and each Centre of Excellence stands out as a citadel of world class clinical outcomes.
        </p>
        <h6>Learn About the world class Facilities we provide</h6>
      </div>
      <div className="healthcare-provide">
        <div className="healthcare-provide-img">
          <img src={explore} alt="explore" srcset="" />
        </div>
        <div className="dept-cards">
          <div className="card1">
          <i className=""></i>
            <p className="card-title">Cardiology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Neurology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Gastroenterology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Orthopedic</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Oncology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Gynecology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Dermatology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Pediatrics</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Urology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Radiology</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Dentistry</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">ENT</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">NeuroSurgery</p>
          </div>
          <div className="card1">
            <img src="" alt="" />
            <p className="card-title">Plastic Surgery</p>
          </div>
          
        </div>
      </div>

    </section>
    <Footer/>
    </>
  );
}

export default AboutUs;
