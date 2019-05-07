import React, {useState} from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'


const IndexPage = () => {
  
    return ( 
        <Layout>
            <Head title="Home" />
       

<aside className={indexStyles.profileCard}>
  <header>
    <a href="http://jordhan.dev">
      <img src="https://0.gravatar.com/avatar/bb9bf20fb6f55b4af10b0f98c540075f?s=150" />
    </a>
    <h1>Jordhan Carvalho</h1>
    <h3>Full Stack Web Developer</h3>
  </header>

</aside>
<div className={indexStyles.profileBio}>
<p>Hey there ! I'm Jordhan, a full-stack web developer currently living in Barreiras.
Although my professional path has taken many twists and turns — from a geologist, to small business owner and entrepreneur, to programming — I've never stopped engaging my passion to help others and solve problems. As a web developer, I enjoy using  my undeniable love for programming and building things to join people on their endeavour to make life better.
</p> 
<p>
Want to know about my skills and experience? Visit the <Link to='/projects' className={indexStyles.links}>Projects</Link> section</p>


</div>
        </Layout>
     );
}
 
export default IndexPage;
