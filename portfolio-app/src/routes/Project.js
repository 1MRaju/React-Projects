
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgNew from '../components/HeroImgNew'
import ProjectItems from '../components/ProjectItems'

const Project = () => {
    
  return (
    <>
      <Navbar/>
      <HeroImgNew heading='PROJECTS.' text='Some of my most recent works'/>
      <ProjectItems/>
      <Footer/>
    </>
  )
}

export default Project
