import React, {useState, useEffect} from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom"
import './login.css'

export default function Login(){
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [isRegistering,setIsRegistering] = useState(false)
    const [registerInformation,setRegisterInformation] = useState({
        email:"",
        confirmEmail:"",
        password:"",
        confirmPassword:""
    })
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/main')
            }
        })
    },[])
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSignIn = ()=>{
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigate('/main')
        }).catch((err)=> alert(err.message))
    }
    const handleRegister = ()=>{
        if((registerInformation.email !== registerInformation.confirmEmail) || (registerInformation.password!==registerInformation.confirmPassword)){
            alert("Entered email or password are invalid")
            return;
        }
        createUserWithEmailAndPassword(auth,registerInformation.email,registerInformation.password)
        .then(()=>{
            navigate('/main');
        })
        .catch((err)=> alert(err.message))
    }
    return(
        <div className="Login">
            <h1>Todo-List</h1>
            <div className="Login--register--container">
                {isRegistering ? (
                    <div>
                        <input type="email" placeholder="email" value={registerInformation.email} onChange = {(e)=>setRegisterInformation({...registerInformation,email:e.target.value})}/>
                        <input type="email" placeholder="confirm email" value={registerInformation.confirmEmail} onChange={(e)=> setRegisterInformation({...registerInformation,confirmEmail:e.target.value})}/>
                        <input type="password" placeholder="password" value={registerInformation.password} onChange={(e)=> setRegisterInformation({...registerInformation,password:e.target.value})}/>
                        <input type="password" placeholder="Confirm Password" value={registerInformation.confirmPassword} onChange={(e)=> setRegisterInformation({...registerInformation,confirmPassword:e.target.value})}/>
                        <button className="signin-button" onClick={handleRegister}>Register</button>
                        <button className="create-account" onClick={()=>setIsRegistering(false)}>
                            Go Back
                        </button>
                    </div>
                ):(
                    <div>
                        <input type="email" placeholder="Email" onChange={handleEmailChange} value={email}/>
                        <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password}/>
                        <button className="signin-button" onClick={handleSignIn}>Sign In</button>
                        <button className="create-account" onClick={() => setIsRegistering(true)}>Create an account</button>
                    </div >
                )
                }
                
            </div>
        </div>
    )
}