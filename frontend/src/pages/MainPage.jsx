import { CardSection } from "../components/CardSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"

export const MainPage = () => {
    return <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-purple-800 to-white">
        <Navbar />
        <HeroSection />
        <CardSection />
        <Footer />
    </div>
}