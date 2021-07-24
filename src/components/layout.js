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
  color: #b36a5e;
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
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            <Navbar/>

            <main css={container}>
                <h1 css={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>
    )
}

export default Layout