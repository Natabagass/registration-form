import axios from "axios";
import App from "next/app";
import React, { useState } from "react";
import HomePage from "./header/HomePage";


export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    const getData = () => {
        axios.get('https://backendmern.technologytorch.repl.co/api/v1/users/register',
        {
            data: userData
        })
        .then(res => {
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    function submitData(){
        getData
        setFinalData(finalData=>[...finalData, userData]);
        setUserData('')
    }

    return ( 
        <div>
            <multiStepContext.Provider value={{currentStep, sendData, setStep, userData, setUserData, finalData, setFinalData}} >
                <HomePage />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContext;