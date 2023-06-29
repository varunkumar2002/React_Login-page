import React,{useState} from "react";
function Login(props){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleUsernameChange = (event)=>{
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user = {
            username: username,
            password: password,
          };
      
          fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); 
              window.alert('login successful');
            })
            .catch((error) => {
              console.error('Error:', error);
              
            });
            setUsername('');
            setPassword('');
    };

    return(
        <div className="Container">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/><br/>
                <button className="log-btn" type="submit">Login</button>
            </form>
            
        </div>
    );
};
export default Login;