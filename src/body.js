import React, { useState } from 'react';
export default function Body() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clicked = (e) => {
    e.preventDefault(); 
    
    if (!email.trim() || !password.trim()) {
      alert("Please fill in both email and password fields.");
      return;
    }
    alert("Confirm submission");
  };
  return (
    <>
      <h1 className='title'>Welcome to Travel More !</h1>
      <div className='flex'>
        <div className="flex1">
          <h3 className='do'>What We Do?</h3>
          <p className='details'>Welcome to our travel website, your passport to unforgettable adventures and seamless journeys around the globe. At our core, we are more than just a booking platform; we're your trusted companion in crafting the perfect travel experience. Whether you're craving the sun-kissed beaches of Bali, the historic charm of Rome, or the adrenaline rush of a safari in Africa,we curate a diverse range of destinations and activities to suit every traveler's wanderlust.From meticulously selected accommodations to expertly crafted itineraries, we strive to elevate every aspect of your journey, ensuring that every moment is filled with discovery, excitement, and cherished memories.</p>
        </div>   
        <form>    
          <div className='signin'>
            <h3>Signin/Register</h3>
            <label htmlFor="email">Email</label>
            <input 
              type='email' 
              placeholder='Email' 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/><br/>
            <label htmlFor="password">Password</label>
            <input 
              type='password' 
              placeholder='Password' 
              name='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/><br/>
            <button type='submit' onClick={clicked}>Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
};
