import Link from 'next/link'

// Next.js uses these Link components for cross-page routing

if (!window){
  const window = {location: {'pathname': ""}}
}
export default () => (
  <nav>
    <Link href='/'>
      <a 
        className={window.location.pathname ==='/' ? 'active' : ''}
      >Home</a>
    </Link>
    <Link href='/blog'>
      <a
        className={window.location.pathname ==='/blog' ? 'active' : ''}
      >Blog</a>
    </Link>
    <Link href='/contact'>
      <a
        className={window.location.pathname ==='/contact' ? 'active' : ''}
      >Contact</a>
    </Link>
    <style jsx>{`
      a, a:visited {
        margin: 1em;
        text-decoration: none;
        color: #b5c0d1
      }
      a:hover, a.active {
        color: #415161
      }
      nav {
        margin-bottom: 1em;
      }
    `}
    </style>
  </nav>
)