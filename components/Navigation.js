import Link from 'next/link'
import React from 'react'
import NoSSR from 'react-no-ssr'
import 'isomorphic-fetch'

// Next.js uses these Link components for cross-page routing

export default class Navigation extends React.Component {
  static async getInitialProps ({query}) {
    // query.slug
    alert (query);
  }

  render () {
    let pathname = this.props.url
    console.log(pathname)
    return (<nav>
      <Link href='/'>
        <a 
          className={pathname ==='/' ? 'active' : ''}
        >Home</a>
      </Link>
      <Link href='/blog'>
        <a
          className={pathname ==='/blog' ? 'active' : ''}
        >Blog</a>
      </Link>
      <Link href='/contact'>
        <a
          className={pathname ==='/contact' ? 'active' : ''}
        >Contact</a>
      </Link>
    </nav>)
  }
}