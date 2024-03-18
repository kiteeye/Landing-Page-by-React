import React from 'react';
import "./Batches.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Batches = () => {
  return (
    <div>
    <Navbar />
    <div className="timetable-container">
    
      <h2>Batch Timetable</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Batch Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batch A</td>
            <td>9:00 AM</td>
            <td>11:00 AM</td>
            <td>Monday, Wednesday, Friday</td>
          </tr>
          <tr>
            <td>Batch B</td>
            <td>2:00 PM</td>
            <td>4:00 PM</td>
            <td>Tuesday, Thursday</td>
          </tr>
          <tr>
            <td>Batch C</td>
            <td>10:00 AM</td>
            <td>12:00 PM</td>
            <td>Monday, Wednesday, Friday</td>
          </tr>
          <tr>
            <td>Batch D</td>
            <td>3:00 PM</td>
            <td>5:00 PM</td>
            <td>Tuesday, Thursday</td>
          </tr>
          <tr>
            <td>Batch E</td>
            <td>11:00 AM</td>
            <td>1:00 PM</td>
            <td>Monday, Wednesday, Friday</td>
          </tr>
          <tr>
            <td>Batch F</td>
            <td>4:00 PM</td>
            <td>6:00 PM</td>
            <td>Tuesday, Thursday</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <Footer />
    </div>
  );
};

export default Batches;
