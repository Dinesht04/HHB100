import {Link, Navigate, useNavigate} from 'react-router-dom'
import {HHB} from '../Icons/hhb'
import {WBMP} from '../Icons/wbmp'
import {useContext,useState} from 'react'
import {AppContext} from './AppContext'

export const Questions = () =>{

    const { symptomList, setSymptomList } = useContext(AppContext);

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [diabetes, setDiabetes] = useState(false);
    const [otherCondition, setOtherCondition] = useState('');

    const handleSymptomToggle = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
        setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
        } else {
        setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    };

    const handleDiabetesChange = (event) => {
        setDiabetes(event.target.checked);
      };
    
      const handleOtherConditionChange = (event) => {
        setOtherCondition(event.target.value);
      };

      const submitSymptoms = () => {
        // Do something with the selected symptoms and general welfare data
        console.log('Selected Symptoms:', selectedSymptoms);
        console.log('Diabetes:', diabetes);
        console.log('Other Condition:', otherCondition);
      }

      const navigate = useNavigate();

      const handleContinueClick = () =>{
        navigate('/Diagnosis')
    }

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
                <div className='la'><WBMP/></div>
                </div>

                <div className='Sympt-Ques'>
                <h3>Select the symptoms bothering you the most:</h3>
                    <ul>
                        {symptomList.map((symptom) => (
                        <li key={symptom} className='question-item' >
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedSymptoms.includes(symptom)}
                                onChange={() => handleSymptomToggle(symptom)}
                            />
                            {symptom}
                            </label>
                        </li>
                        ))}
                    </ul>
                        
                    
                    
                </div>

                <div className='Diabetes-Ques'>
                    <label  >
                        <input type="checkbox"  checked={diabetes} onChange={handleDiabetesChange} />
                        Do you have diabetes?
                        </label>
                            <br/>
                </div>
                    <div className='Genral-Questions'>
                    <label>
                        Any other medical condition (if yes, please specify):
                        <input
                        type="text"
                        value={otherCondition}
                        onChange={handleOtherConditionChange}
                        />
                    </label>
                </div>

        </div>
                    <div className="but-cont">
                    <a className="but but-ques"  onClick={handleContinueClick} style={anchorStyle}><span>continue</span></a>
                    </div>
        </div>
    </div>
    )
}
