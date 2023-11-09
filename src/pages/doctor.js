import React, { Component } from 'react';
import Sidebar from '../components/sidebar';

export default class doctor  extends Component {
  
  handleEdit = (itemss) => {
    // Use React Router to navigate to the "Edits" page with the data for editing
    this.props.history.push({
      pathname: '/edits',
      state: { data: itemss },
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      itemss: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://saleswareltd.com/PMS_Hamza_API/api/doctor/getall")
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
        
        <Sidebar />
        {this.state.DataisLoaded ? (
          <table className='patient-data'>
            <h2>Doctor's Data Sheet</h2>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Country</th>
                <th>Edits</th> 
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  <td>{item.contact}</td>
                  <td>{item.address}</td>
                  <td>{item.country}</td>
                  <td>
                     {/* <Link to={`/edit/${item.id}`}>
              <button>Edit</button>
            </Link> */}
                    <button onClick={() => this.handleEdit(item)}>Edit</button>
                  </td>
                </tr>
        
              ))};
              
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