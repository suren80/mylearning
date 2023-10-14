import Login from "../components/Login";
import axios from 'axios';
import { useState } from 'react';


function LoginPage(){
    const [apires, setApiRes] = useState('');

    const handleSubmit = async (name, pwd) => {
        //
        //console.log(name, pwd);
        const response = await axios.post('http://localhost:8080/api/login',{
            email: name,
            pwd:pwd
        });
        console.log(response);
        if(response.data.result === "success"){
            console.log("yes");
            setApiRes('Congratulations You Have Logged In');
        }
        else {
            console.log("no");
            setApiRes('Please check your User Id and PWD');
        }

       /*  const response = await axios.get('http://localhost:8080/api/login');
        console.log(response.data); */
    }

    return (
        <div>
            <Login onSubmit= {handleSubmit} />
            {apires}
        </div>
    );
}

export default LoginPage;