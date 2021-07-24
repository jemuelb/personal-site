import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {css} from "@emotion/react"

const navBranding = css`
  font-weight: bold;
  text-decoration: none;
  color: #ede7e3;
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
  color: #ede7e3;
`

const headerContainer = css`
  background-color: #2D3142;
  font-family: sans-serif;
  height: 60px;
  box-shadow: 0 0 25px 0 darkgray;
  display: flex;
  align-items: center;
`

const navContent = css`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Navbar = () => {
    return (
        <nav css={headerContainer}>
            <div css={navContent}>
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
            </div>
        </nav>
    )
}

export default Navbar