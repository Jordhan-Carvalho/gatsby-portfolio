import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return ( 
        <Layout>
            <Head title="Contact"/>
            <h1>Contact Page</h1>
            <p> My contact info</p>
            <p><a target="_blank" href="https://twitter.com/jordhanpc">twitter</a></p>
        </Layout>
     );
}
 
export default ContactPage
