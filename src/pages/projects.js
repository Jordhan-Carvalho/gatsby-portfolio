import React from 'react'
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
            {/* <Budget /> */}
            {/* <PigGame />
            <ColorGame /> */}
            <WikiSearch />
            
        </Layout>
     );
}
 
export default ProjectsPage;