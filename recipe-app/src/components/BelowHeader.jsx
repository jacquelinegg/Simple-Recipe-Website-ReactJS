import React from 'react';
import Records from '../records.json';
import '../App.css';
import '../BelowHeader.css';
import { motion } from 'framer-motion';



const BelowHeader = () => {
  const firstRecord = Records[0]; 
  return (
    <div className='grid'>
      <div style={{
        backgroundImage: `url(${firstRecord.photo})`
      }} className='grid-left'>
     
      <div className='image-hover'>
       <motion.div  initial={{ x: -800, y: 0 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
      <fieldset>
      <legend>{firstRecord.category.toUpperCase()}</legend>
      <h4>{firstRecord.title}</h4>
      <br></br>
      <p>{firstRecord.description}</p>
      <p className='recipe'>GET THE RECIPE<span className='arrow-left'>►</span></p>
      
      </fieldset>
      </motion.div>
      </div>
       
      </div>
      <div className='grid-flex-right'>
      <h2><span className='h2'>Quick & Easy Dinners </span><span className='arrow-right'>🡢</span></h2>
      <div className="grid-right">
     
      
        {Records && Records.map((record, index) => {
            if(index !== 0)
          return (
        <div className='meals'>
            <div
            className='box'
            key={index}
            style={{
                backgroundImage: `url(${record.photo})`
              }}
           
          >
          
         
            
          </div>
          <div className='decription'>
          <legend>{record.category.toUpperCase()}</legend>
          {record.title}
          <br></br>
          <h6><span>⏱</span>{record.preparation}</h6>

          </div>
          </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default BelowHeader;
