import React from "react"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"
import Layout from "../components/layout"
import Head from "../components/head"
import MinID from "../components/projects/minid"
import CentralBudget from "../components/projects/centralbudget"
import Geologando from "../components/projects/geologando"
import JordhanDev from "../components/projects/jordhanDev"
import AdoteLobo from "../components/projects/adotelobo"
import Fik from "../components/projects/fik"
import AlugaBrasil from "../components/projects/alugabrasil"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <MinID />
      <AlugaBrasil />
      <CentralBudget />
      <AdoteLobo />
      <JordhanDev />
      <Geologando />
      <Fik />
      <ScrollUpButton ShowAtPosition={900} />
    </Layout>
  )
}

export default ProjectsPage
