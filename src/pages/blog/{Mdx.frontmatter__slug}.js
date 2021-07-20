import * as React from 'react'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from '../../components/layout'

const PostPage = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <ul>
                {
                    <article key={data.mdx.id}>
                        <h2>{data.mdx.frontmatter.title}</h2>
                        <p>Posted: {data.mdx.frontmatter.date}</p>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </article>
                }
            </ul>
        </Layout>
    )
}

export default PostPage

export const query = graphql`
    query Post($id: String!)  {
        mdx(id: { eq: $id }) {
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
