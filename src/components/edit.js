// Edits.js
import React, { Component } from 'react';

class Edits extends Component {
  // ...

  render() {
    const { location } = this.props;
    const { data } = location.state;

    return (
      <div>
        <h2>Edit Page</h2>
        <form>
          {/* Populate the form fields with data for editing */}
          <input type="text" name="firstname" value={data.firstname} />
          <input type="text" name="lastname" value={data.lastname} />
          <input type="text" name="email" value={data.email} />
          {/* Add more form fields for other data properties here */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Edits); // Wrap your component with withRouter
