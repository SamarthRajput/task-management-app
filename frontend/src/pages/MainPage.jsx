import { CardSection } from "../components/CardSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"

export const MainPage = () => {
    return <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-green-900 to-gray-900">
        <Navbar />
        <HeroSection />
        <CardSection />
        <Footer />
    </div>
}