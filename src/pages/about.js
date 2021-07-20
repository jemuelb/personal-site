import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

const AboutPage = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <article key={data.mdx.id}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <p>Last Updated: {data.mdx.frontmatter.date}</p>
            </article>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query MyQuery {
        mdx(slug: {eq: "about"}) {
            frontmatter {
                title
                date
            }
            body
            id
            slug
        }
    }
`