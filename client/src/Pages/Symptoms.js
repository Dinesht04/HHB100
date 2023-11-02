import { BMP } from "../Icons/bmp"
import { useEffect, useState, useContext } from "react"
import {Link} from 'react-router-dom'
import {HHB} from '../Icons/hhb'
import {WBMP} from '../Icons/wbmp'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext';


export const Symptoms = () =>{

    // Style starts
    const anchorStyle = {
        '--clr': '#6499E9'
    }
    // Style Ends

    // Logic Starts

    //input logic
    const { symptomList, setSymptomList } = useContext(AppContext);
    const [newSymptom,setNewSymptom] = useState(''); 

    const handleChange = (event) =>{
        setNewSymptom(event.target.value);
    }

    const addNewSymptom = () =>{
        setSymptomList([...symptomList,newSymptom])
    }

    const deleteSymptom = (value) => {
        
        setSymptomList(symptomList.filter((Symptom)=>Symptom !== value ));

    }

    const navigate = useNavigate();

    const handleContinueClick = () =>{
        navigate('/Questions');
    }

    useEffect(() => {
        let permanentValue = null; // Store the permanent value
        let currentHighlightedPart = null; // Store the currently highlighted part
      
        const handleClick = (event) => {
          const target = event.target;
          const parent = target.parentElement;
          const dataPosition = target.getAttribute('data-position') || parent.getAttribute('data-position');
      
          if (dataPosition !== null) {
            permanentValue = dataPosition; // Set the permanent value on click
            document.getElementById('data').innerHTML = permanentValue;
      
            // Add a CSS class to highlight the selected part
            if (currentHighlightedPart) {
              currentHighlightedPart.classList.remove('highlighted');
            }
            target.classList.add('highlighted');
            currentHighlightedPart = target;
          }
        };
      
        const handleHover = (event) => {
          // Show the temporary value on hover if it's not permanent
          if (permanentValue === null) {
            const target = event.target;
            const parent = target.parentElement;
            const dataPosition = target.getAttribute('data-position') || parent.getAttribute('data-position');
            if (dataPosition !== null) {
              document.getElementById('data').innerHTML = dataPosition;
      
              // Highlight the part on hover
              if (currentHighlightedPart !== target) {
                if (currentHighlightedPart) {
                  currentHighlightedPart.classList.remove('highlighted');
                }
                target.classList.add('highlighted');
                currentHighlightedPart = target;
              }
            }
          }
        };
      
        const pieces = document.getElementsByTagName('svg');
        for (let i = 0; i < pieces.length; i++) {
          let _piece = pieces[i];
          _piece.addEventListener('click', handleClick);
          _piece.addEventListener('mouseover', handleHover);
        }
      
        return () => {
          for (let i = 0; i < pieces.length; i++) {
            let _piece = pieces[i];
            _piece.removeEventListener('click', handleClick);
            _piece.removeEventListener('mouseover', handleHover);
          }
        };
      }, []);
      
      
      
         






        // Logic Ends
    return(
        <div>
        <div className="widget symp-widget">
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

                

            </div>
                <div className="conntainer">

                
                <BMP/>

                <div className="addSympt">
               
                <input  id="input-field" placeholder="Enter Symptom Here" onChange={handleChange}/>
                
                <button onClick={addNewSymptom}>Add Symptom</button>
                </div>
                <div className="list">
                
                {symptomList.map((Symptom, index)=>{
                    return (
                        <div className="list-item" key={index}>
                            {Symptom}
                            <button className="list-item-button" onClick={() => deleteSymptom(Symptom)}>X</button>
                        </div>
                    )
                })}
                </div>

            
            <div className="but-cont">
                <a className="but butrah"  onClick={handleContinueClick} style={anchorStyle}><span>continue</span></a>
            </div>
            
          
            

        </div> 
        </div>
        </div>

    )
}