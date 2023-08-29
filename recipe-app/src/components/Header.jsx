import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import the motion component
import simplyRecipesLogo from '../Simply_Recipes_Logo_-_2021.png';
import '../App.css';

const DropdownLink = ({ title, dropdownContent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  

  return (
    <div
      className="navbar-link"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {title.toUpperCase()}<span className='arrow-down'>▼</span>
      {isDropdownOpen && (
        <div className="dropdown">
          {dropdownContent.map((item, key) => (
            <a className="dropdown-link" key={key}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isHeartHovered, setHeartHovered] = useState(false);
  const [isSearchbarClicked, setSearchbarClicked] = useState(false);
  const [isNewsletterVisible, setNewsletterVisible] = useState(true);
  const [isHeartVisible, setHeartVisible] = useState(true);
  return (
    <div className="navbar">
      <div className='left'>
       
          <img src={simplyRecipesLogo} alt="Simply Recipes Logo" className="logo__image" />
          
          <DropdownLink
            title="Recipes"
            dropdownContent={['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drinks', 'View All']}
          />
          <DropdownLink
            title="Quick and Easy"
            dropdownContent={['Quick Dinners', 'Easy and Healthy', 'Quick Vegetarian', 'View All']}
          />
          <DropdownLink
            title="In The Kitchen"
            dropdownContent={['Recipe Collection', 'Tips and Techniques', 'View All']}
          />
          <DropdownLink
            title="Table Talk"
            dropdownContent={['Voices', 'Groceries', 'Features', 'View All']}
          />
          <DropdownLink
            title="Holiday and Season"
            dropdownContent={['Come on Over', 'Summer Salads', 'View All']}
          />
          <DropdownLink
            title="About Us"
            dropdownContent={['Mission', 'Team', 'Contact']}
          />
        
      </div>

      <motion.div initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
      <div className='right'>
      {isNewsletterVisible && <button className='newsletter'>NEWSLETTER</button>}
      <button
        onMouseOver={() => setHeartHovered(true)}
        onMouseOut={() => setHeartHovered(false)}
        className={isHeartHovered  ? 'icons-love-full' : 'icons-love'}
      >
        {isHeartHovered ? '♥' : '♡'}
      </button>
    
      {isSearchbarClicked ? (
        <form className='searchbar'>
          <input type='text' className='search-bar' placeholder='Search the site...' id='search-bar'></input>
          <button
            className='close-search'
            onClick={() => {
              setNewsletterVisible(true);
              setSearchbarClicked(false);
            }}
          >
            ✕
          </button>
        </form>
      ) : (
        <button
          onClick={() => {
            setSearchbarClicked(true);
            setNewsletterVisible(false);
           
          }}
          className='icons'
        >
          🔎︎
        </button>
      )}
    </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
