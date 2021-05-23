import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';






function Location(props) {
  const data=props.location.state.logindata;
 
    const [serach,setsearch]= useState([]);
    const [errormsg,seterrormsg]= useState('');
 
 

    const updateInput =  (e) => {
      const myurl=`https://wepixel.in/gith/public/api/repo/search?token=${data.data.token}`;
   
    const formData = new FormData();
    formData.append('username', e.target.value);
  
    axios({
      method: "post",
      url: myurl ,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
const allNotes = response.data.data.repos;
 setsearch(allNotes);
console.log(serach);
       
       })
      .catch(function (err) {
        //handle error
        seterrormsg(err);
      });
  };
     
  
     
    


 
 return (
  <> 
      <p>{data.message}</p>
      <p className="logot_p"><Link className="log_out"   to="/">Log Out</Link> </p>
      <div>
      <p>Search user</p>
      <input type="text"  id="search_keyword"   onChange={updateInput} />
      </div>

      <div>

      List of GitHubUserContent
              {
              serach.length ?
              serach.map(get => <div> <p>{get.name}</p> <p>{get.watchers}</p> </div>
                                
                ):
            null


              }
              {
                  errormsg ? <div>Error reterving Data</div> : null
              }  

          

              
      </div>





   
      
  </>)



}

export default Location



