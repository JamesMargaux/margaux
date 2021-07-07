import './Main.css'
import Section from './Section'

const Main = (props) => {
  return (
    <main>
      <Section sectionData = {props.sectionData[0]} />
      <Section sectionData = {props.sectionData[1]}/>
      <Section sectionData = {props.sectionData[2]}/>
      <Section sectionData = {props.sectionData[3]}/>
    </main>
  )
}

export default Main
