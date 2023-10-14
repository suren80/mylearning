import { useState } from 'react';


function Login({onSubmit}){

    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

     const handleSubmit = (event) =>{
        event.preventDefault();
        //console.log(event.target[0].value);
        //console.log(event.target[1].value);
        onSubmit(event.target[0].value,event.target[1].value)

    };

    return (
    <div className="mb-3">
        Email id  =  {email}
        <form onSubmit={handleSubmit} method='post'>
          
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value ={email} onChange={handleChange}/>
                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                <button>Submit</button>
        </form>
    </div>
    );
}

export default Login;