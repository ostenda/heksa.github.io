import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Aboutus from '@/components/aboutus'
import Program from '@/components/program'
import Schedule from '@/components/schedule'
import ContactForm from '@/components/contactform'

export default function Home() {
  return (
   <div>
      <Header/>
       <div><Hero/></div> 
      <div><Aboutus/></div>
      <div><Program/></div>
      <div><Schedule/></div>
      <div><ContactForm/></div>
    </div>
  )
}
