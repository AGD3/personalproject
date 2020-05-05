import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import BizView from './views/BizView.jsx';
import BuyView from './views/BuyView.jsx';
import LeaseView from './views/LeaseView.jsx';
import SellView from './views/SellView.jsx';
import CommercialLoanView from './views/CommercialLoanView.jsx';
import BrokerFinderView from './views/BrokerFinderView.jsx';
import BusinessStructureView from './views/BusinessStructureView.jsx';
import MoreView from './views/MoreView.jsx';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={BizView} />
    <Route path='/buy' component={BuyView} />
    <Route path='/lease' component={LeaseView} />
    <Route path='/sell' component={SellView} />
    <Route path='/commercialLoan' component={CommercialLoanView} />
    {/* verify "commercialLoan" and "commercialLoanView" */}
    <Route path='/brokerfinder' component={BrokerFinderView} />
    <Route path='/businessStructure' component={BusinessStructureView} />
    <Route path='/more' component={MoreView} />
  </Router>
)

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
