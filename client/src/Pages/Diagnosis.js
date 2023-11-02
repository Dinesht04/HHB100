import { useState,useEffect,useContext } from 'react';
import {AppContext} from './AppContext'
import {DiseaseListItem} from '../Components/DiseaseListItem'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {HHB} from '../Icons/hhb'
import {WBMP} from '../Icons/wbmp'


export const Diagnosis = () =>{
    
    const { symptomList, setSymptomList } = useContext(AppContext);
    const [diseaseList, setDiseaseList] = useState([]);
      
    useEffect(() => {
      axios.get("https://hhb100.onrender.com/getDiseases").then((response) => {
        const userSymptoms = symptomList.map(symptom => symptom.toLowerCase());
  
        const filteredDiseases = response.data.filter((disease) => {
          const symptoms = disease.Symptoms.toLowerCase();
  
          // Check if any of the user's symptoms match any part of the disease's symptoms
          return userSymptoms.some(userSymptom => symptoms.includes(userSymptom));
        });
  
        setDiseaseList(filteredDiseases);
      });
    }, [symptomList]);

    const anchorStyle = {
      '--clr': '#6499E9'
      }
     
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
                </div>

                <h2>Diseases with Matching Symptoms:</h2>
            <ul>
                {diseaseList.map((disease, index) => (
                <li key={index}>
                    <DiseaseListItem disease={disease} /> <br/>
                </li>
                ))}
            </ul>



                    {/* <div className="but-cont">
                    <a className="but but-ques"  href='/Diagnosis' style={anchorStyle}><span>continue</span></a>
                    </div> */}
        </div>

        </div>
    )
}

