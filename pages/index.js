import Layout from '../components/Layout.js';

var headProperties = (
  <title>Home Page</title>
)


const Index = () => (
  <Layout
    headProperties={headProperties}
  >
    <div className="banner">
      <h1>Creative Developer</h1>
      <p>My name is Kyle Peacock. Come at me</p>
    </div>
    <style jsx>
      {`
        h1, p {
          text-align: center;
        }
        h1 {
          font-size: 2em;
          margin: 0 auto 1em;
          color: #415161
        }
        p {
          color: #8496b3;
          font-size: 1.15em;
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