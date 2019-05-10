import React from 'react'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Layout from '../components/layout'
import Head from '../components/head'
import MinID from '../components/projects/minid'
import CentralBudget from '../components/projects/centralbudget'
import Geologando from '../components/projects/geologando'
import WikiSearch from '../components/projects/wikiSearch'
import JordhanDev from '../components/projects/jordhanDev'


const ProjectsPage = () => {

    return ( 
        <Layout>
            <Head title="Projects"/>
            <h1>Projects</h1>
            <MinID />
            <CentralBudget />
            <JordhanDev />
            <Geologando />
            <WikiSearch />
            <ScrollUpButton 
            ShowAtPosition={900}
            />
        </Layout>
     );
}
 
export default ProjectsPage;
