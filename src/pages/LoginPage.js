import axios from "axios";
import React,{useState} from "react";
import "../css/login.css";
import { APIURL } from "../config";

function LoginPage({setIsLogedIn}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // let history = useHistory();
  const [result, setResult] = useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(APIURL+"/api/Auth/login",{username,password}).then((result)=>{
      setIsLogedIn(true);
    }).catch(err=>{
      if(err.response.status===400){
        setIsLogedIn(false);
        setResult(err.response.data.message)
      }else {
        setIsLogedIn(false);
        setResult("Intarval Error")
      }
      
    })
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="col-md-12 LoginContainer">
        <div className=" left-section">
          <div className="header">
            <h1 className="LoginAnimation Logina1">CustomerUI</h1>
            <h4 className="LoginAnimation Logina2">Giriş Yapınız</h4>
          </div>
          <div className="form">
            <input
              required
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              type="username"
              className="form-field animation a3"
              placeholder="Kullanıcı Adı"
            />
            <input
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-field animation a4"
              placeholder="Şifre"
            />
            <p className="LoginAnimation Logina5">
              <span >Şifremi Unuttum</span>
            </p>
            <button type="submit" className="LoginAnimation Logina6 LoginButton">
              Giriş
            </button>
          </div>
          {result}
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
