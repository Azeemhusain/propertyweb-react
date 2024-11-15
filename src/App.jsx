
import './App.css';
import img1 from './images/2 .png'
import img2 from './images/3 .png'
import img3 from './images/5.png'
import img4 from './images/4.png'
import img7 from './images/7.png';
import img8 from './images/9.png';
import img9 from './images/10.png'
import girl from  './images/girl.png'
import girl1 from  './images/girl1.png'
import house from './images/house3.png'
import man1 from  './images/man1.png'
 import home from './images/home-button.png'
 import dollor from './images/dollor.png'
import search from './images/search.png' 
import location from './images/location.png'
import interior from './images/interior.png'
import living1 from './images/living1.png'
import living2 from './images/living2.png'
import living3 from './images/living3.png'
import living4 from './images/living4.png'
import palace from './images/palace.png'
import palace2 from './images/palace2.png'
import palace3 from './images/palace3.png'
import palace6 from './images/palace6.png'
import palace7 from './images/palace7.png'
import palace9 from './images/palace9.png'
import React, { useState } from 'react';
const App = () => {
    // Initialize state to track whether the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to change the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
        <header className="bg-gray-50 py-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold text-gray-800">Dream Living</h1>

                {/* Hamburger Menu Button for Mobile */}
                <button 
                    id="menu-toggle" 
                    onClick={toggleMenu} // Attach toggle function to button click
                    className="text-gray-600 focus:outline-none md:hidden"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
             <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Home</a>
              <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Buy</a>
              <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Sell</a>
              <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Contact Us</a>
          </nav>


                {/* Desktop Buttons */}
                <div className="space-x-4 hidden md:block">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Sign Up</button>
                    <button className="border border-orange-500 text-gray-700 px-6 py-2 rounded-full">Log In</button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <nav className="flex flex-col space-y-2 py-4 px-4 bg-white shadow-md">
                    <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Home</a>
                    <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Buy</a>
                    <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Sell</a>
                    <a href="#" className="text-gray-600 text-xl font-bold hover:text-gray-800 hover:border-orange-500 hover:border-b-2">Contact Us</a>
                </nav>
            </div>
        </header>
 


{/* <!-- Hero Section --> */}
<div class="bg-gray-50">
<section class="bg-gray-50 py-12">
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* <!-- Text Content --> */}
    <div class="w-full md:w-1/2 text-center md:text-left md:pr-10">
      <h2 class="text-6xl font-bold mb-4 font-semibold">Let's Build </h2>
      <h2 class="text-6xl font-bold mb-4 font-semibold relative">
  your<span class="inline-block w-24 h-1 bg-orange-500 ml-2 align-middle"></span>
</h2>
      <h2 class="text-6xl font-bold mb-4 font-semibold">Dream house</h2>
      <div class="flex justify-center md:justify-start space-x-4">
      <button class="bg-orange-500 text-white px-6 py-3 rounded-full">Find Property</button>
        <button class="border border-orange-500 text-orange-500 px-6 py-3 rounded-full">Explore</button>
      </div>
    <div class="flex justify-start items-center space-x-8 bg-gray-50 py-8">
  {/* <!-- Regular Customers Section --> */}
  <div class="text-center">
    <p class="text-orange-500 text-4xl font-bold">43K+</p>
    <p class="text-gray-700 text-lg">Regular Customers</p>
    <p class="text-gray-700 text-lg"> Customers</p>
  </div>

  {/* <!-- Projects Completed Section --> */}
  <div class="text-center">
    <p class="text-orange-500 text-4xl font-bold">203K+</p>
    <p class="text-gray-700 text-lg">Projects Completed</p>
   < p class="text-gray-700 text-lg">Completed </p>
  </div>
  </div>
  </div>
    {/* <!-- Image Content --> */}
    <div class="w-full md:w-1/2 mt-8 md:mt-0">
    <div class="flex items-center justify-center h-screen bg-gray-50">

    <div class="border-4 border-orange-500 rounded-lg shadow-lg inline-block transform -rotate-6">
        <img 
            class="rounded-lg transform rotate-12 mt-8 h-1/4 object-cover" 
            src={house} 
            alt="House Image" 
        />
    </div>
    </div>

  {/* <!-- Profile Section Positioned Over Image --> */}
  <div class="absolute bottom-14 flex items-center space-x-3 bg-white p-2 rounded-full shadow-lg">
    {/* <!-- Profile Images --> */}
    <img src={girl} alt="Profile 1" class="w-6 h-6 rounded-full border-2 border-white"/>
    <img src={girl1} alt="Profile 2" class="w-6 h-6 rounded-full border-2 border-white"/>
    <img src={man1} alt="Profile 3" class="w-6 h-6 rounded-full border-2 border-white"/>

    {/* <!-- Overlay with "+2" --> */}
    <div class="relative group">
      <div class="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold text-xs">
        +2
      </div>
      {/* <!-- Tooltip --> */}
      <span class="absolute -right-10 top-1/2  bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Check reviews
      </span>
    </div>
  </div>
</div>
</div>

<div class="flex flex-col md:flex-row items-center md:space-x-4 p-4 bg-gray-100 rounded-lg shadow-md md:h-20 space-y-4 md:space-y-0 w-full max-w-4xl mx-auto">
    {/* <!-- Location --> */}
    <div class="flex items-center space-x-2 flex-grow">
        <div class="p-3 bg-gray-200 rounded-full">
            <img src={location} alt="Location Icon" class="h-6 w-6"/>
        </div>
        <div>
            <p class="text-xs text-gray-500">Location</p>
            <p class="font-semibold">Chicago, USA</p>
        </div>
    </div>

    {/* <!-- Property Type --> */}
    <div class="flex items-center space-x-2 flex-grow">
        <div class="p-3 bg-gray-200 rounded-full">
            <img src={home} alt="Property Type Icon" class="h-6 w-6"/>
        </div>
        <div>
            <p class="text-xs text-gray-500">Property Type</p>
            <p class="font-semibold">2 BHK Apartment</p>
        </div>
    </div>

    {/* <!-- Price Range --> */}
    <div class="flex items-center space-x-2 flex-grow">
        <div class="p-3 bg-gray-200 rounded-full">
            <img src={dollor} alt="Price Range Icon" class="h-6 w-6"/>
        </div>
        <div>
            <p class="text-xs text-gray-500">Price Range</p>
            <p class="font-semibold">$30k - $120k</p>
        </div>
    </div>

    {/* <!-- Search Button --> */}
    <div class="flex justify-end w-full md:w-auto">
        <button class="p-4 bg-gray-800 rounded-full text-white md:ml-auto">
            <img src={search} alt="Search Icon" class="h-6 w-6"/>
        </button>
    </div>
</div>

</section>
<div class="flex flex-wrap justify-center items-center gap-48 bg-white py-8">
    {/* <!-- Digital Realty Logo (Simplified SVG) --> */}
    <div class="flex flex-col items-center w-1/2 sm:w-1/4 lg:w-auto gap gap-x-4">
        <svg class="h-12 w-auto mb-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example SVG Path for Digital Realty --> */}
            <path d="M12 0L24 6v12l-12 6-12-6V6z" fill="#1A1A1A"></path>
            <path d="M12 2l10 5v10l-10 5-10-5V7z" fill="#ffffff"></path>
        </svg>
        <p class="text-gray-700 font-medium text-sm">DIGITAL REALTY</p>
    </div>

    {/* <!-- Pulte Group Logo (Simplified SVG) --> */}
    <div class="flex flex-col items-center w-1/2 sm:w-1/4 lg:w-auto">
        <svg class="h-12 w-auto mb-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example SVG Path for Pulte Group --> */}
            <path d="M12 0L2 8v14h20V8L12 0z" fill="#002244"></path>
            <path d="M6 12h12v10H6V12z" fill="#ffffff"></path>
        </svg>
        <p class="text-gray-700 font-medium text-sm">Pulte Group</p>
    </div>

    {/* <!-- Simon Logo (Simplified SVG) --> */}
    <div class="flex flex-col items-center w-1/2 sm:w-1/4 lg:w-auto">
        <svg class="h-12 w-auto mb-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example SVG Path for Simon --> */}
            <path d="M4 4L12 12L20 4" stroke="#000" stroke-width="2" fill="none"></path>
            <path d="M4 20L12 12L20 20" stroke="#000" stroke-width="2" fill="none"></path>
        </svg>
        <p class="text-gray-700 font-medium text-sm">SIMON</p>
    </div>

    {/* <!-- American Tower Logo (Simplified SVG) --> */}
    <div class="flex flex-col items-center w-1/2 sm:w-1/4 lg:w-auto">
        <svg class="h-12 w-auto mb-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example SVG Path for American Tower --> */}
            <path d="M12 2L2 22h20L12 2z" fill="#555555"></path>
        </svg>
        <p class="text-gray-700 font-medium text-sm">AMERICAN TOWER</p>
    </div>
</div>
{/* 2ndheading */}


<h2 class="bg-gray text-black font-medium text-4xl py-2 text-center mt-10">
    Our Services
</h2>

<div class="flex flex-col items-center justify-center bg-white gap-5 mb-0 mt-10"> {/* Set mb-0 to remove bottom margin */}
    <div class="flex gap-5 overflow-x-auto">
        {/* <!-- Image Card 1 --> */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-[20rem] w-[16rem] sm:h-[24rem] sm:w-[20rem] md:h-[28rem] md:w-[22rem] rounded-lg overflow-hidden">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={img7} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-xl sm:text-2xl md:text-3xl font-bold text-white">Buy a house?</h1>
                <p class="mb-3 text-base sm:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <button class="rounded-full bg-neutral-900 py-1.5 px-3 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
        </div>

        {/* <!-- Second Image Card --> */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-[20rem] w-[16rem] sm:h-[24rem] sm:w-[20rem] md:h-[28rem] md:w-[22rem] rounded-lg overflow-hidden">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={img8} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-xl sm:text-2xl md:text-3xl font-bold text-white">Beyond Builder</h1>
                <p class="mb-3 text-base sm:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <button class="rounded-full bg-neutral-900 py-1.5 px-3 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
        </div>

        {/* <!-- Third Image Card --> */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-[20rem] w-[16rem] sm:h-[24rem] sm:w-[20rem] md:h-[28rem] md:w-[22rem] rounded-lg overflow-hidden">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={palace} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-xl sm:text-2xl md:text-3xl font-bold text-white">Shooting Star</h1>
                <p class="mb-3 text-base sm:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <button class="rounded-full bg-neutral-900 py-1.5 px-3 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
        </div>

        {/* <!-- Fourth Image Card --> */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-[20rem] w-[16rem] sm:h-[24rem] sm:w-[20rem] md:h-[28rem] md:w-[22rem] rounded-lg overflow-hidden">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={palace9} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-xl sm:text-2xl md:text-3xl font-bold text-white">Dreamy Escape</h1>
                <p class="mb-3 text-base sm:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <button class="rounded-full bg-neutral-900 py-1.5 px-3 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
        </div>
    </div>

    <div class="flex justify-end mr-60 w-full h-10">
        <button type="button" class="flex items-center text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-3 text-center me-2 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600">
        →
        </button>
    </div>
</div>

{/* <!-- Property Section --> */}
<div class="flex justify-center items-center bg-white p-0 min-h-screen bg-slate-50 mb-0"> 
  {/* <!-- Card Container --> */}
  <div class="max-w-7xl w-screen h-full rounded-lg shadow-lg bg-white p-8 flex space-x-15 mb-0"> {/* mb-0 removes bottom margin */}
    {/* <!-- Image Section --> */}
    <div class="relative w-full h-full">
      {/* <!-- Property Image Container --> */}
      <div class="h-full">
        <img 
          src={interior} 
          alt="Property Image"
          class="w-full h-full object-cover rounded-md" /> 
      </div>

      {/* <!-- Play Button Overlay --> */}
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-md">
        {/* You can add a play button here if needed */}
      </div>

      {/* <!-- Experience Tag --> */}
      <div class="absolute bottom-4 left-4 bg-white text-gray-700 text-xs px-3 py-1 rounded shadow-md">10 Years of Experience</div>
    </div>

    {/* <!-- Property Details Section --> */}
    <div class="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 space-y-4">
      <h2 class="text-4xl font-semibold text-gray-800 ml-10">Popular Properties</h2>
      <h3 class="text-3xl font-bold text-gray-900 mt-1 ml-10">Deluxe Home</h3>
      <p class="text-gray-500 text-sm ml-10">443 Elizabeth Avenue, San Diego</p>
      
      {/* <!-- Property Info --> */}
      <div class="flex space-x-6 text-gray-600 text-sm mt-3 ml-10">
        <span>2 Stories</span>
        <span>7 Bedrooms</span>
        <span>6 Bathrooms</span>
      </div>
      
      {/* <!-- Price and Action Buttons --> */}
      <div class="text-gray-900 font-bold text-3xl ml-10">$358,000.00</div>
      <button class="bg-black text-white px-7 py-3 rounded-full ml-10">Contact Agent</button>
      <a href="#" class="text-red-500 text-sm underline ml-10">View Photos →</a>
    </div>
  </div>
</div>

{/* images  */}


            {/* <!-- Gallery Item 2 with Overlay Icon --> */}
            <div class="bg-gray-50">
    <h1 class="text-center text-4xl font-bold my-6 font-serif mt-5">Our Gallery</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        <div class="relative">
            <img src={palace3} alt="Image 1" class="w-full h-full rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 1</div>
        </div>
        <div class="relative col-span-2 md:col-span-1">
            <img src={palace2} alt="Image 2" class="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 2</div>
        </div>
        <div class="relative">
            <img src={living1} alt="Image 3" class="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 3</div>
        </div>
        <div class="relative">
            <img src={palace6} alt="Image 4" class="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 4</div>
        </div>
        <div class="relative col-span-2 md:col-span-1">
            <img src={palace7} alt="Image 5" class="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 5</div>
        </div>
        <div class="relative">
            <img src={palace9} alt="Image 6" class="w-full h-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"/>
            <div class="absolute top-0 left-0 bg-black bg-opacity-30 text-white p-2 text-sm">Caption 6</div>
        </div>
    </div>
</div>


<div class="bg-gray-100 flex items-center justify-center h-auto mt-10">
  {/* <!-- Container --> */}
  <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-6 max-w-3xl w-full mt-10 w-full h-full">
    
    {/* <!-- Image Section --> */}
    <div class="flex-shrink-0 w-full md:w-1/2">
      <img src={living2} alt="House Image" class="w-full h-64 md:h-full object-cover rounded-lg shadow-md"/> {/* Responsive height */}
    </div>
    
    {/* <!-- Text and Form Section --> */}
    <div class="w-full md:w-1/2 mt-4 md:mt-0">
      <h2 class="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
      <p class="text-gray-600 mb-4">Enter your email.</p>
      
      {/* <!-- Form --> */}
      <div class="flex items-center space-x-2">
        <input type="email" placeholder="Enter your email" class="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200"/>
        <button class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Subscribe</button>
      </div>
    </div>
    
  </div>
</div>

{/* <!-- Customer Reviews --> */}
<section class="py-12 bg-gray-100 border-roun">
    <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-center mb-10">Customer Reviews</h3>

        {/* <!-- Outer Container with Rounded Border --> */}
        <div class="bg-white p-8 rounded-lg border border-gray-300 shadow-md">

            {/* <!-- Flex Container for Image and Reviews --> */}
            <div class="flex flex-col md:flex-row items-start md:space-x-6">
                
                {/* <!-- Image on the Left Side with Dotted Border --> */}
                <div class="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
                    <img src={palace7} alt="House Image" class="w-full h-64 md:h-full object-cover rounded-lg shadow-md border border-dotted border-gray-300" />
                </div>
                
                {/* <!-- Reviews on the Right Side with Dotted Borders --> */}
                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 w-full md:w-1/2">
                    
                    {/* <!-- Review Card with Dotted Border --> */}
                    <div class="bg-white p-6 rounded-lg shadow-md border border-dotted border-gray-300">
                        <p class="text-gray-600 mb-4">"The best real estate service I have ever used. Highly recommended!"</p>
                        <div class="flex items-center space-x-4">
                            <img src={man1} alt="Reviewer" class="w-12 h-12 rounded-full" />
                            <div>
                                <h5 class="text-lg font-semibold">Emily Thomas</h5>
                                <p class="text-gray-600">Home Buyer</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Review Card with Dotted Border --> */}
                    <div class="bg-white p-6 rounded-lg shadow-md border border-dotted border-gray-300">
                        <p class="text-gray-600 mb-4">"Very professional and helpful throughout the process."</p>
                        <div class="flex items-center space-x-4">
                            <img src={girl} alt="Reviewer" class="w-12 h-12 rounded-full" />
                            <div>
                                <h5 class="text-lg font-semibold">John Doe</h5>
                                <p class="text-gray-600">Investor</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Review Card with Dotted Border --> */}
                    <div class="bg-white p-6 rounded-lg shadow-md border border-dotted border-gray-300">
                        <p class="text-gray-600 mb-4">"Exceptional service and great properties to choose from."</p>
                        <div class="flex items-center space-x-4">
                            <img src={girl1} alt="Reviewer" class="w-12 h-12 rounded-full" />
                            <div>
                                <h5 class="text-lg font-semibold">Sarah Lee</h5>
                                <p class="text-gray-600">Property Seller</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>


{/* <!-- Footer Section --> */}

</div>
</>
  );
}


export default App;
