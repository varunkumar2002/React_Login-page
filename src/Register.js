import React,{useState} from "react";

function Register(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handleUserNameChange = (event)=>{
        setUsername(event.target.value);
    };

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    };

    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const user = {
            username: username,
            password: password,
            email: email,
          };
      
          fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); // Handle the response from the server
              window.alert('registration successful');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            setUsername('');
            setEmail('');
            setPassword('');

    };
    return(
        <div className="Container-register">
            <h2>Don't have an account?<br/>Register Here!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="register-text" placeholder="Username" value={username} onChange={handleUserNameChange}/>
                <input type="text" className="register-text" placeholder="Ex:-abc@gmail.com" value={email} onChange={handleEmailChange}/>
                <input type="password" className="register-text" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <button className="reg-btn" type='submit'>Register</button>
                
            </form>
        </div>
    );
};
export default Register;