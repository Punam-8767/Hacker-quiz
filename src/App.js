import React from 'react';
// import Main from './Components/Main/Main';
import './App.css';
import binarytree from './Components/Images/binarytree.png';
import code from './Components/Images/code.png';
import contenders from './Components/Images/contenders.png';
function App() {
  return (

<>
<div className='content'>
   <div className='left1'>
      <div className='content1'>
        <h4>Leave the binary tree behind</h4>
        <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems yhey'd actually tackle on the job</p>
        <a href="/get-started/hire" target="_blank">
           Start free trial -
        </a>    
      </div>
      <div className='img1'>
        <img src={binarytree} alt="Logo"/> 
      </div>
   </div>        

   <div className='left2'>      
      <div className='content2'>
        <h4>Focus on what really matters: the code.</h4>
        <p>Build skills-based coding tests with tech problems a developer would encounter on the job - and hire the team behind your next big idea </p>
        <a href="/get-started/hire" target="_blank">
           Request a demo -
        </a>
      </div>
      <div className='img2'>
         <img src={code} alt="Logo" />
      </div>
   </div>

   <div className='left3'>
      <div className='content3'>
        <h4>Leave the binary tree behind.</h4>
        <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems yhey'd actually tackle on the job</p>
        <a href="/get-started/hire" target="_blank">
           Learn more -
        </a>
      </div> 
      <div className='img3'>
        <img src={contenders} alt="Logo" />
      </div>
   </div>
</div>
 </> 
  );
}

export default App;
