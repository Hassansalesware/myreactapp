import React, { Component } from 'react';
import Sidebar from '../components/sidebar';

export default class Patient extends Component {


  constructor(props) {
    super(props);

    this.state = {
      itemss: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://saleswareltd.com/PMS_Hamza_API/api/patient/getall")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

    render() {
    return (
      <div className="pat-page">
        <Sidebar /> {/* Render the Sidebar component here, within the render method. */}
        {this.state.DataisLoaded ? (
          <table className='patient-data'>
            <h2>Patient's Data Sheet</h2>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.dob}</td>
                  <td>{item.contact}</td>
                  <td>{item.address}</td>
                  <td>{item.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h1>Please wait some time....</h1>
          </div>
        )}
      </div>
    );
  }
}