import {useState} from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import {Container, StepButton, Step, Stepper, StepLabel, Box, Button, Typography} from '@mui/material'
import { Stack } from '@mui/system';

const MultiStepProgress = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        {label:'Data Personal', completed:false},
        {label:'Kelas Pilihan', completed:false},
        {label:'Anggota Kelompok Belajar', completed:false},
    ])
    

    const handleNext = () => {
        if(activeStep < steps.length - 1){
            setActiveStep(activeStep => activeStep + 1)
        }else {
            const stepIndex = findUnfinished()
            setActiveStep(stepIndex)
        }
    }

    const checkDisabled = () => {
        if(activeStep < steps.length - 1) return false
        const index = findUnfinished()
        if(index !== -1 ) return false
        return true
    }

    const findUnfinished = () => {
        return steps.findIndex(step => !step.completed)
    }

    return (
        <Container className='mt-[100px]'>
            <Stepper
            alternativeLabel
            activeStep={activeStep}
            className="mb-3"
            >
                {steps.map((step, index)=>(
                    <Step key={step.label} completed={step.completed}>
                        <StepButton onClick={()=>setActiveStep(index)}>
                            <Typography className='font-Cairo text-[13px]'>
                                {step.label}
                            </Typography>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>

            <Box className='xl:-mx-[200px]'>
                {{
                    0: <FirstStep/>,
                    1: <SecondStep/>
                }[activeStep]}
            </Box>

            <Stack
            direction='row'
            className="pt-2 pb-7"
            >
                <Button 
                color='inherit'
                disabled={!activeStep}
                onClick={() => setActiveStep(activeStep => activeStep - 1)}
                >
                    Back
                </Button>

                <Button
                type='submit'
                className='mr-0 ml-auto block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'
                disabled={checkDisabled()}
                onClick={handleNext}
                >
                    Berikutnya
                </Button>
            </Stack>
        </Container>
    )
}

export default MultiStepProgress;