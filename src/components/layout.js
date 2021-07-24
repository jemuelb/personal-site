import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {css} from "@emotion/react"
import Navbar from "./navbar"

const container = css`
  margin: auto;
  max-width: 600px;
  font-family: sans-serif;
`

const heading = css`
  color: darkgoldenrod;
`

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div css={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            <Navbar/>

            <main>
                <h1 css={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>

    )
}

export default Layout