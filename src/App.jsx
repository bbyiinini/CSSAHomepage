import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import Department from "./components/department/Department"
import GlobalStyle from "./styles/global/Global";
import homepageImage from './assets/homepage_newstudents_services.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false,
      silde_didMount: false
    }
  }


  handleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidMount(){
    document.title = "UCSD CSSA"
    setTimeout(() => {
      this.setState({didMount: true})
    }, 0)
  }

  render() {
    const images = [
       { url: homepageImage}
    ];
    const {didMount} = this.state;


    // const SimpleImageSlider_Wrapper = useSpring({
    //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    //   delay: 800,
    //   config: config.wobbly,
    // });

    

    return (
      <Router>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Switch>
          <Route exact path="/">
            <div className={`slide-fade-in ${didMount && 'visible'}`}>
              <SimpleImageSlider
                width={window.innerWidth}
                height={504}
                images={images}
                style={{ margin: "0 auto", marginTop: "50px"}}
              />
              <Department/>
            </div>
          </Route>
          <Route exact path="/tech">
            <h1>技术部</h1>
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    );
    
  }
}
export default App;


