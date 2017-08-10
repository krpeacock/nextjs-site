import Header from './Header.js';
import SharedHead from './SharedHead.js'


export default (props) => (
  <div className="app">
    <SharedHead>
      {props.headProperties}
    </SharedHead>
    <Header/>
    <main>
      {props.children}
    </main>
    <style jsx>{`
      * {
        font-family: "Roboto" !important;
      }
    `}</style>
  </div>
)