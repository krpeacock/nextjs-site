import Layout from '../components/Layout.js';
import Link from 'next/link';
import React from 'react';

var headProperties = (
  <title>Home Page</title>
)

const Index = () => (
  <Layout
    headProperties={headProperties}
  >
    <div className="banner">
      <h1>Creative Developer</h1>
      <p>My name is Kyle Peacock. I am a full-stack ECMAScript developer based in San&nbsp;Francisco,&nbsp;California.
      This website is designed to showcase my professional work and host my&nbsp;personal&nbsp;projects.</p>
      <p>
        Visit the&nbsp;
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        &nbsp;to read some of what my family has written.
      </p>
    </div>
    <section id="specialties">
      <div className="item-a">
        <h3>JavaScript</h3>
        <p>Recently, JavaScript development has become the standard for modern web applications. The environment is constantly evolving, thanks to passionate open-source developers, and I am always reading and experimenting to introduce new tools and efficiencies into my work.</p>
      </div>
      <div className="item-b">
        <h3>Tinkering</h3>
        <p>foo bar</p>
      </div>
      <div className="item-c">
        <h3>stuff</h3>
        <p>foo bar</p>
      </div>
      <div className="item-d">
        <h3>stuff</h3>
        <p>foo bar</p>
      </div>
    </section>
    <style jsx>
      {`
        .banner > h1, .banner > p {
          text-align: center;
          padding: 0 20vw;
        }
        .banner > a {
          margin-left: 0;
        }
        h1 {
          font-size: 2em;
          margin: 0 auto 1em;
          color: #415161
        }
        p {
          color: #8496b3;
          font-size: 1.15em;
          line-height: 1.5;
          margin: 0.5em;
          font-weight: 200;
        }
        a {
          color: #415161;
        }
        .banner {
          background: #f9fafb;
          border-bottom: 1px solid #e6e9eb;
          width: 100vw;
          position: relative;
          left: 0;
          padding: 3.5em 0
        }
        #specialties {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 3em;
          grid-template-rows: 1fr 1fr;
          text-align: center;
        }
        #specialties > * > p {
          padding: 0 10%;
        }
        .item-a {
          grid-column: 1 / 2;
          grid-row: 1/1;
          justify-content: center;
        }
        .item-b {
          grid-column: 2 / 2;
          grid-row: 1/1;
        }
        .item-c {
          grid-column: 1 / 2;
          grid-row: 2/2;
        }
        .item-d {
          grid-column: 2 / 2;
          grid-row: 2/2;
        }
        @media (max-width: 800px) {
          #specialties {
            grid-template-columns: 1fr;
            grid-auto-flow: row;
            grid-template-rows: repeat(4, 1fr);
          }
        }
      `}
    </style>
  </Layout>
)

export default Index