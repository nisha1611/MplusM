import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideBarAdmin from './SideBarAdmin';
let Logo = require('../img/logo.jpeg');


const PharmacyApproval = () => {

  let myData = []
  const [SampleData, setSampleData] = useState([]);
  const [ApproveData, setApproveData] = useState([]);
  const [RejectData, setRejectData] = useState([]);

  useEffect(()=>{
    const asyncFn=async () => {
    await fetch('http://localhost:9000/mplusm/pharmacist/list')
      .then((response) => response.json())
      .then((data) => {
        setSampleData((SampleData) => data.filter(i => i.status === "pending"))
        setApproveData((ApproveData) => data.filter(i => i.status === "approved"))
        setRejectData((RejectData) => data.filter(i => i.status === "rejected"))
      })}
      asyncFn();
  }, [])

  // const [SampleData,setSampleData] = useState([
  //   //["#",	"Name",	"Position",	"Age",	"Start Date"],//,	"Approve/Reject"],
  //   {id: "1", Name:'Brandon Jacob', Position:"Designer", Age:"28", StartDate:"2016-05-25"},
  //   {id:"2", Name:"Bridie Kessler", Position:"Developer", Age:"35", StartDate:"2014-12-05"},
  //   {id:"3", Name:"Ashleigh Langosh", Position:"Finance", Age: "45", StartDate:"2011-08-12"},
  //   {id:"4", Name:"Angus Grady", Position:"HR", Age:"34", StartDate:"2012-06-11"},
  //   {id:"5", Name:"Raheem Lehner", Position:"Dynamic Division Officer",Age: "47", StartDate:"2011-04-19"},
  // ]);

  //result = await result.json();



  async function ApprovePhamacies(item) {
    console.warn(item.status)
    setApproveData((ApproveData) => [...ApproveData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/approvePharmacy", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();




  }

  async function RejectPhamacies(item) {
    setRejectData((RejectData) => [...RejectData, item])
    setSampleData((SampleData).filter(i => i._id !== item._id))

    let result = await fetch("http://localhost:9000/mplusm/pharmacist/rejectPharmacy", {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
  }

  function openList(evt, tableName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <div>
      <Navbar />
      <SideBarAdmin/>
      <main id ="main" class="main">
      <div class="card">
        <div class="card-body">
          <div class="tab">
            <button class="tablinks" onClick={(e) => openList(e, 'Applications')}>Applications</button>
            <button class="tablinks" onClick={(e) => openList(e, 'Approved')}>Approved</button>
            <button class="tablinks" onClick={(e) => openList(e, 'Rejected')}>Rejected</button>
          </div>
          <div id="Applications" class="tabcontent">
            <h5 class="card-title">Pharmacy Applications</h5>
            <table class="table table-hover">
              {console.warn("here")}
              <thead>
                <tr>
                  <th scope="col">Pharmacy Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Approve/Reject</th>
                </tr>
              </thead>
              <tbody>
                {SampleData.map((item, index) => {
                  return (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      {/* <td>  <Link to="/PharmacyDetails"  state={item}   >{item.pharmacyName}</Link></td> */}
                      <td><Link to={'/PharmacyDetails'}
                        state={item}
                        // onClick={() => window.location.href("/PharmacyDetails")}
                        >{item.pharmacyName}</Link></td>
                      {/* onClick={() => window.location.href("/PharmacyDetails")} */}
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td><button class="btn btn-success" onClick={(e) => ApprovePhamacies(item)}>Approve</button>  <button class="btn btn-danger" onClick={(e) => RejectPhamacies(item)}>Reject</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div id="Approved" class="tabcontent">
            <h5 class="card-title">Approved Pharmacies</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Pharmacy Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {ApproveData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.pharmacyName}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div id="Rejected" class="tabcontent">
            <h5 class="card-title">Rejected Pharmacies</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Pharmacy Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {RejectData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.pharmacyName}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}

export default PharmacyApproval;