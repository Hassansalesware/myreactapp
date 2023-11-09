import React, { Component } from 'react';
import Sidebar from '../components/sidebar';

export default class invoice  extends Component {


  constructor(props) {
    super(props);

    this.state = {
      itemss: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://saleswareltd.com/PMS_Hamza_API/api/invoice/getall")
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
          <table className='patient-data invoice-data'>
            <h2>Invoice</h2>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Doctor Id</th>
                <th>Email</th>
                <th>Created Date</th>
                <th>Total Amount</th>
                <th>Discount</th>
                <th>Net Payable</th>
                <th>Paid Amount</th>
                <th>Due Amount</th>
               
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.patientId}</td>
                  <td>{item.doctorId}</td>
                  <td>{item.email}</td>
                  <td>{item.createdDate}</td>
                  <td>{item.totalAmount}</td>
                  <td>{item.discount}</td>
                  <td>{item.netPayable}</td>
                  <td>{item.paidAmount}</td>
                  <td>{item.dueAmount}</td>
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