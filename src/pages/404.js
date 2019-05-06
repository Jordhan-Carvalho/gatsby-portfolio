import React from 'react'
import Layout from '../components/layout'
import notFoundStyles from './404.module.scss'

const NotFound = () => {
    return ( 
        <Layout>
            <h1>404 Page Not Found</h1>

<section className={notFoundStyles.errorContainer}>
  <span className={notFoundStyles.four}><span className={notFoundStyles.screenReaderText}>4</span></span>
  <span className={notFoundStyles.zero}><span className={notFoundStyles.screenReaderText}>0</span></span>
  <span className={notFoundStyles.four}><span className={notFoundStyles.screenReaderText}>4</span></span>
</section>
        </Layout>
     );
}
 
export default NotFound;