import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import Department from "./components/department/Department"
import GlobalStyle from "./styles/global/Global";



import logo from './logo.svg';
//import './App.css';

class App extends Component {
  state = {
    navbarOpen: false,
    silde_didMount: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({didMount: true})
    }, 0)
  }

  render() {
    const images = [
      { url: "./logo192.png" },
      { url: "./logo192.png" },
    ];
    const {didMount} = this.state;


    // const SimpleImageSlider_Wrapper = useSpring({
    //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    //   delay: 800,
    //   config: config.wobbly,
    // });

    

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <div className={`slide-fade-in ${didMount && 'visible'}`}>
          <SimpleImageSlider
            width={window.innerWidth}
            height={504}
            images={images}
            style={{ margin: "0 auto", marginTop: "50px"}}
          />
          <Department/>
        </div>
       
        
        <GlobalStyle />
      </>
    );
    
  }
}
// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
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
export default App;


