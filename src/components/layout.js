import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {css} from "@emotion/react"

const container = css`
  margin: auto;
  max-width: 600px;
  font-family: sans-serif;
`

const heading = css`
  color: darkgoldenrod;
`

const navBranding = css`
  font-weight: bold;
  text-decoration: none;
  color: black;
`

const navLinks = css`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const navLinkItem = css`
  padding-right: 2rem;
`

const navLinkText = css`
  color: black;
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
        <main css={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            <nav>
                <ul css={navLinks}>
                    <li css={navLinkItem}>
                        <Link to="/" css={navBranding}>Jemuel Balangcod</Link>
                    </li>
                    <li css={navLinkItem}>
                        <Link to="/" css={navLinkText}>Home</Link>
                    </li>
                    <li css={navLinkItem}>
                        <Link to="/about" css={navLinkText}>About</Link>
                    </li>
                    <li css={navLinkItem}>
                        <Link to="/blog" css={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <h1 css={heading}>{pageTitle}</h1>
                {children}
            </div>

        </main>

    )
}

export default Layout