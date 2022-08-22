import React,{ useState }  from "react";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
       e.preventDefault();
  
       console.log(email,password);
    }
    return (
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    );
  }
  
  export default Login;