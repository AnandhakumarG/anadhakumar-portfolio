import Experience from './components/Home/Experience'
import EducationAchievements from './components/Home/EducationAchievements'
import Hero from './components/Home/Hero'
import Records from './components/Home/Records'
import Specialize from './components/Home/Specialize'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Records />
      <Experience />
      <Specialize />
      <EducationAchievements />
      <ContactForm />
    </main>
  )
}
