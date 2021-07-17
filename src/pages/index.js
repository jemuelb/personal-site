import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image"

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <StaticImage
                alt="Coming home"
                src="../images/coming_home.jpg"
            />
        </Layout>
    )
}


export default IndexPage
