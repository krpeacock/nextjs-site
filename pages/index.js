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
      <h1>Kyle Peacock</h1>
      <h2>Creative Developer</h2>
      <p>I am a former law student turned full-stack ECMAScript developer, based in San&nbsp;Francisco,&nbsp;California.
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
        <h3>Prototyping</h3>
        <p>While I am comfortable developing for established projects, rapid prototyping is where I shine. During my training in web development, I would build applications from scratch daily, iterating and improving my technique. My favorite projects have all started from scratch to address a specific problem.</p>
      </div>
      <div className="item-c">
        <h3>Hardware / IOT</h3>
        <p>While there are fewer opportunities to do build projects with integrated hardware professionally, it's something I love doing. I've been a maker since I was a kid, and I fell in love with Raspberry Pi and Node.js as a way to quickly add connected functionality to a project.</p>
      </div>
      <div className="item-d">
        <h3>User Experience</h3>
        <p>You most likely came here because you are a recruiter, someone I've met, or someone who enjoyed something I wrote. Most people who visit a portfolio site wouldn't read this paragraph, because this design directs attention to my action items: contact info, my blog, and my project gallery down below.</p>
      </div>
    </section>
    <style jsx>
      {`
        .banner > h1, .banner > p {
          text-align: center;
          padding: 0 10vw;
        }
        .banner > a {
          margin-left: 0;
        }
        h1 {
          font-size: 2em;
          margin: 0 auto 0;
          color: #415161;
        }
        h2 {
          font-size: 1.2em;
          margin: 0 auto 1em;
          color: #8496b3;
          text-align: center;
          font-weight: 500;
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
          padding: 3em 0
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
          .item-a {
            grid-column: 1;
            grid-row: 1;
          }
          .item-b {
            grid-column: 1;
            grid-row: 2;
          }
          .item-c {
            grid-column: 1;
            grid-row: 3;
          }
          .item-d {
            grid-column: 1;
            grid-row: 4;
          }
        }
      `}
    </style>
  </Layout>
)

export default Index