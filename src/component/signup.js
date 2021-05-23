import React ,{useState} from 'react'

import axios from 'axios';

 import { useHistory } from 'react-router-dom'; 

function Massupdate() {

    const Emails = React.useRef(null);
    const Passwords = React.useRef(null);
    const history = useHistory(); 
    const handleSubmit = e => {
        e.preventDefault();
        const myurl='https://wepixel.in/gith/public/api/signup'
    const formData = new FormData();
    formData.append('email', Emails.current.value);
    formData.append('password', Passwords.current.value);

 
    axios({
      method: "post",
      url: myurl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        alert(response.data.message)
        history.push({pathname :'/',
            
           });
           
      })
      .catch(function (response) {
        //handle error
        alert('Invalid Email and Password');
      });

 
    }

    return (
        <form  className="form_css" onSubmit={handleSubmit}>
              <h3>Sign Up</h3>

<div className="form-group">
    <label>Email</label>
    <input type="text" className="form-control" placeholder="email" ref={Emails}   />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="password" ref={Passwords}  />
</div>
<button type="submit" className="myButton">Sign up</button>
        </form>
    )

}

export default Massupdate
