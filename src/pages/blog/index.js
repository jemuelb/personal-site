import * as React from 'react'
import {graphql, Link} from "gatsby"
import Layout from '../../components/layout'

const PostIndex = ({data}) => {
    return (
        <Layout pageTitle="Post Index">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <li>
                            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default PostIndex

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {regex: "/blog/"}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                body
                slug
            }
        }
    }
`
