import Layout from '../components/Layout.js';
import Link from 'next/link';

var headProperties = (
  <title>Home Page</title>
)


const Index = () => (
  <Layout
    headProperties={headProperties}
  >
    <div className="banner">
      <h1>Creative Developer</h1>
      <p>My name is Kyle Peacock. I am a full-stack ECMAScript developer based in San Francisco, California.</p>
      <p>This website is designed to showcase my professional work and host my psersonal projects.</p>
      <p>
        Visit the&nbsp;
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        &nbsp;to read some of what my family has written.
      </p>
    </div>
    <style jsx>
      {`
        h1, p {
          text-align: center;
          padding: 0 20vw;
        }
        h1 {
          font-size: 2em;
          margin: 0 auto 1em;
          color: #415161
        }
        p {
          color: #8496b3;
          font-size: 1.15em;
          margin: 0.5em
        }
        a {
          color: #415161;

        }
        .banner {
          background: #f9fafb;
          border-bottom: 1px solid #e6e9eb;
          width: 100vw;
          position: absolute;
          left: 0;
          padding: 3.5em 0
        }
      `}
    </style>
  </Layout>
)

export default Index