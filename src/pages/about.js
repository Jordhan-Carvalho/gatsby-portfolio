import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return ( 
        <Layout>
            <h1>About Page</h1>
            <p>Giberish blablablabla</p>
            <p>Want to get in touch ? <Link to="/contact">Contact me</Link></p>
        </Layout>
     );
}
 
export default AboutPage;