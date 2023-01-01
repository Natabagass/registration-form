import HeroSection from "../../components/Hero"
import FirstStep from "../../components/FirstStep"
import SecondStep from "../../components/SecondStep"
import {Container, Paper, styled} from '@mui/material'
import {Stepper, StepLabel, Step} from '@mui/material'
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { multiStepContext } from "../StepContext"
import { useContext } from "react"
import ThirdStep from "../../components/ThirdStep"
import FourthStep from "../../components/FourthStep"
import FifthStep from "../../components/FifthStep"

const steps = ['Data Personal', 'Kelas Pilihan', 'Anggota Kelompok belajar', 'Pilih Sesi', 'Selesai']

export default function HeaderPage() {
    const {currentStep, finalData} = useContext(multiStepContext);

    function showStep(step: number){
        switch(step) {
            case 1:
                return <FirstStep/>
            case 2:
                return <SecondStep/>
            case 3:
                return <ThirdStep/>
            case 4:
                return <FourthStep/>
            case 5: 
                return <FifthStep/>
        }
    }

    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#5885E9',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#5885E9',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 4,
            borderRadius: 1,
        },
    }));

    const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
        ({ theme, ownerState }) => ({
                color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
                display: 'flex',
                height: 22,
                alignItems: 'center',
                ...(ownerState.active && {
                color: '#5885E9',
            }),
                '& .QontoStepIcon-completedIcon': {
                backgroundColor: '#5885E9',
                borderRadius: '50%',
                zIndex: 1,
                width: 14,
                height: 14,
                padding: 7
            },
            '& .QontoStepIcon-circle': {
                width: 14,
                height: 14,
                borderRadius: '50%',
                borderColor: 'currentColor',
                borderWidth: 3,
            },
        }),
    );

    function QontoStepIcon(props: StepIconProps) {
        const { active, completed, className } = props;

        return (
            <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
            </QontoStepIconRoot>
        );
    }

    return ( 
        <>
            <HeroSection/>
            <Stepper alternativeLabel activeStep={currentStep - 1} connector={<QontoConnector/>} className="lg:w-[600px] vsm:w-[344px] mt-[100px] mx-auto">
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon} >
                            <div className="text-[10px] lg:text-[13px] text-black font-Cairo">
                                {label}
                            </div></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {showStep(currentStep)}
            </div>
        </>
    );
}