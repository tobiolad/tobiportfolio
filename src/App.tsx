import './App.css'
import { About, Contact, Footer, Header, Portfolio, Press, Resume, Testimonials } from './components'
import { default as resumeData } from "./resumeData.json"
import { useScrollReveal } from './hooks'

function App() {
  useScrollReveal();

  return (
    <div>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Press data={resumeData.press} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  )
}

export default App
