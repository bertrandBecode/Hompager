import React from 'react'


const Youtube = () =>{
    const CLIENT_ID='405191093832-ih8rk97l7buv8ts3kiarg5mj0s0rjjkc.apps.googleusercontent.com';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
    const authorizeButton = document.getElementById('authorize-button');
    const signoutButton = document.getElementById('signout-button');
    

     //Load auth2 library

     function handleClientLoad(){
       console.log('test')
       //gapi.load('client:auth2',initClient)
     }

     //Init Api client library and setup sign in listeners

     const initClient = () =>{
       gapi.client.init({
         clientId= '405191093832-ih8rk97l7buv8ts3kiarg5mj0s0rjjkc.apps.googleusercontent.com',
         discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
         scop: 'https://www.googleapis.com/auth/youtube.readonly'

       }).then(()=>{
         //listen for sign in state changes

         gapi.auth2.getauthInstance().isSignedInlisten(upadteSignInStatus)

         //Handle inital sign in state

         upadteSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())

       })
  }
  return(
    <div>
      <p>Log in with Google</p>
      <button className="log-in" id="authorize-button" onClick={() => handleClientLoad()}>Login</button>
      <button className="log-out" id="signout-button">Logout</button>
      <div id="channel-data">
        <form  id="form-channel">
          <div className="input-field">
            <input type="text" id="channel-input" placeholder="channel-name"/>
            <input type="submit" value="Get Channel Data"/>
          </div>
        </form>
      </div>
      <div className="channel-video">
      
      </div>
    </div>
  )
}
export default Youtube