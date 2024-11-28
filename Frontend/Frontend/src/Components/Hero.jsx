


import React from 'react';
import benefits from '../images/benefits.png';
import { Link } from 'react-router-dom';

const Hero = ({ title }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <p className="p-first">TOTAL HEALTHCARE SOLUTION</p>
          <h2 className='title'>{title}</h2>
          <p className="line">
            "Empowering healthcare through innovation, our hospital management website seamlessly
            connects patients, providers, and administrators, ensuring efficient, high-quality care
            for every individual."
          </p>
          <div className="image-button">
            <button className="image-button1">Get Started</button>
            <Link to = "/About"  >
              <button className="image-button1">Services</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <div className="content-box">
          <h2>Why Choose Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit maxime nostrum sapiente molestias reiciendis officiis maiores mollitia, eius eaque nobis tenetur accusantium molestiae tempora in ipsam ratione quae voluptatibus cupiditate. Itaque temporibus dolores consectetur aliquid nisi sapiente, accusamus culpa ratione modi cupiditate aperiam. Ea aut dolore doloremque dolorum nesciunt commodi officia fugit facere perspiciatis recusandae illo eos minus numquam error veritatis delectus incidunt eaque natus temporibus sed, molestiae excepturi dolores nihil. Temporibus dolor odit itaque possimus, velit beatae ipsam delectus hic nihil impedit 
          </p>
          <button>Learn More</button>
        </div>
        <div className='image-container'>
          <img src={benefits} alt="Benefits" className='benefits-image' />
        </div>
        {}

      </div>
    </>
  );
};

export default Hero;
