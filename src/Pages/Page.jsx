import About from "../Components/About"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Gallery from "../Components/Gallery"
import Home from "../Components/Home"
import Menu from "../Components/Menu"
import Navbar from "../Components/Navbar"


const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page
