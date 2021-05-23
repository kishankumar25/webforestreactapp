import React ,{useState} from 'react'

import axios from 'axios';

 import { useHistory } from 'react-router-dom'; 



function Login() {
  const email = React.useRef(null);
  const password = React.useRef(null);
  const rememberMeEl = React.useRef(null);


 const history = useHistory(); 
  const handleSubmit = e => {
    e.preventDefault();
    const myurl='https://wepixel.in/gith/public/api/login'
    const formData = new FormData();
    formData.append('email', email.current.value);
    formData.append('password', password.current.value);

 
    axios({
      method: "post",
      url: myurl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        history.push({pathname :'/Location',
            state:{ logindata: response.data } 
           });
           
      })
      .catch(function (response) {
        //handle error
        alert('Invalid Email and Password');
      });
  };
  function sign(e) {
    e.preventDefault();
    history.push({pathname :'/signup',
          
 });
  }
  
  return (
     <form className="form_css" onSubmit={handleSubmit}>
          <h3>Login</h3>
   
       <input type="text" placeholder="Email Address or User ID" ref={email} />
   
             
       <input type="password" placeholder="password" ref={password} />
    
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <div>
       <button type="submit" className="myButton">Login</button>
       </div>
       <div>
       <button onClick={sign} className="signup">signup</button>
      </div>
     </form>
   );
}
export default Login
