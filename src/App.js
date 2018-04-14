import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="screen">
          <div className='container'>
            <div className='leftSide'>
              <div className='search'>

              </div>
              <div className='content'>
                <div className='targets'>
                  <div className='targets_header'>
                    <h3>Targets</h3>
                  </div>
                  <div className='targets_container'>
                    <table className='table'>
                      <tr>
                        <th>Name</th>
                        <th>Distance</th>
                        <th>Speed</th>
                      </tr>
                      <tr>
                        <td>Laser</td>
                        <td>400</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Laser</td>
                        <td>400</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Laser</td>
                        <td>400</td>
                        <td>20</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              

            </div>
            <div className='rightSide'>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div>
              <div className='module'>

              </div> 
              <div className='module'>

              </div> 
              <div className='module'>

              </div>
            </div>
          </div>
          <div className="bottomBar">
          <div className="menu">
            <div className='menu_item'>
              <h4>Targets</h4>
            </div>
            <div className='menu_item'>
              <h4>Overload</h4>
            </div>
            <div className='menu_item'>
              <h4>All</h4>
            </div>
          </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
