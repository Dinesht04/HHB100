import { HHB } from "../Icons/hhb"
import { WBMP } from "../Icons/wbmp"
import { useState } from "react"
import { Link } from 'react-router-dom'

export const Home = () => {
    
    //Style Starts
    const radioListStyle = {
        color: '#2596be'
    }

    const spanStyle = {
        color:'red'
    }

    const anchorStyle = {
        '--clr': '#6499E9'
    }
    //Style Ends

    //Logic Starts
    

        const [age, setAge] = useState('');
        const [ageError, setAgeError] = useState('');
      
        const handleAgeChange = (event) => {
          const newAge = parseInt(event.target.value);
          setAge(event.target.value);
          if (isNaN(newAge) || newAge <= 0 || newAge >= 125) {
            setAgeError('Invalid Age');
          } else {
            setAgeError('');
          }
        };
      
        const handleContinueClick = (event) => {
          const newAge = parseInt(age);
          if (isNaN(newAge) || newAge <= 0 || newAge >= 125) {
            event.preventDefault(); // Prevent form submission if age is invalid
            setAgeError('Invalid Age');
                };
            }
        //Logic Ends


    return(
        <div>
        <div className="widget">
        <div className="headers">
        <Link to="/" className="header INFO">INFO</Link> |
        <Link to="/Symptoms" className="header SYMPTOMS">SYMPTOMS</Link> |
        <Link to="/Questions" className="header QUESTIONS">QUESTIONS</Link> |
        <Link to="/Diagnosis" className="header DIAGNOSIS">DIAGNOSIS</Link>  
           </div>

            <div className="text-context">
              <div className="sympcheck">
                <HHB/>
                Symptom Checker
                <WBMP/>
                </div>

                <div className="ipc">Identify possible conditions and <br/>treatment related to your symptoms.
                </div>

            </div>

            <div className="container">

            <div className="gender-selection">
        <div className="gender-text"> <h1>Select your Gender</h1>
        
        <div className="radio-list" style={radioListStyle}>
            <div className="radio-item">
                <input type="radio" name="radio" id="radio1"/>
                <label for="radio1">Male</label>
            </div>
            <div className="radio-item">
                <input type="radio" name="radio" id="radio2"/>
                <label for="radio2">Female</label>
            </div>
        </div>
        </div>  
    </div>
        
        <div className="age-form">
        <div class="form-group input-field">
                <label class="age-text" for="age"><h1 class="age-textt">Age:</h1></label>
                <input class = "age-inp" type="number" id="age" name="age" min="0" max="126" pattern="[0-9]*" value={age} onChange={handleAgeChange} required/>
                <span id="ageError" style={spanStyle}>{ageError}</span>
            </div>
        </div>

            </div>

            <div className="but-cont">
                <a className="but buthome" href="/Symptoms" onClick={handleContinueClick} style={anchorStyle}><span>continue</span></a>
            </div>
        
            

        </div> 
        </div>
        
    )       
       
    
                
}
