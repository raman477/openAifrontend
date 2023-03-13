import './App.css';
import './css/style.css'
import './css/media.css'
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout';
import { Routing } from './routing';
import { useContext, useEffect } from 'react';
import appContext from './context/globalContext';
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router';
import { socialLogin } from './services/apiService';

function App() {
  let contextData=useContext(appContext)
  const navigate=useNavigate()
  
   const handleCredentialResponse = (response) => {
      let data = jwt_decode(response.credential);
      let payload={
          "sub_id":data.sub,
          "social_acc":"Google",
          "first_name":data.given_name,
          "last_name":data.family_name,
          "email":data.email
      }
      socialLogin(payload).then(response=>{
          if(response.status===200){
              contextData.setToken(response.data.data.token)
              localStorage.setItem('token',response.data.data.token)
              contextData.setEmail(response.data.data.email)
              localStorage.setItem('email',response.data.data.email)
              contextData.setFirstName(response.data.data.first_name)
              localStorage.setItem('first_name',response.data.data.first_name)
              contextData.setLastName(response.data.data.last_name)
              localStorage.setItem('last_name',response.data.data.last_name)
              toast.success("You are logged in successfully.")
              if(response.data.data.created==true){
                navigate('/all-packages',{state:{email:response.data.data.email}})
              }
              else{
                navigate('/home')
              }
             
          }
      }).catch(err=>{
          toast.error(err.response.data.message)
      })
    }
     
    window.onload=function(){
      contextData.setIsLoaded(true)
      console.log("loaded");
      window.google?.accounts.id.initialize({
          client_id: "117870430142-l3dkoqvevkl5td3ukai8eloc05gel1a9.apps.googleusercontent.com",
          callback: handleCredentialResponse
      })
    }

  
  return (
    <div className="App">
      {/* <Loader load={contextData.load} /> */}
      <Layout>
        <Routing />
      </Layout>
      <ToastContainer theme='dark' />
    </div>
  );
}

export default App;
