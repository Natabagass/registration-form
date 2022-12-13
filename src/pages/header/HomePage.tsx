import HeroSection from "../../components/Hero"
import FirstStep from "../../components/FirstStep"
import ProgressBar from "../../components/MultiStepProgress"

export default function HeaderPage() {
    return ( 
        <>
            <HeroSection/>
            <ProgressBar/>
            <FirstStep/>
        </>
    );
}