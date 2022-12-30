import App from "next/app";
import React, { useState } from "react";
import HomePage from "./header/HomePage";


export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    function submitData(){
        setFinalData(finalData=>[...finalData, userData]);
        setUserData('')
    }

    function nextStep(){
        if (userData == null){
            setUserData('')
            alert('Isi dulu')
        } else{
            setStep(currentStep + 1)
        }
    }

    return ( 
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData, nextStep}} >
                <HomePage />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContext;