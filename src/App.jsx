import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import Department from "./components/department/Department";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./styles/global/Global";
import homepageImage from './assets/homepage_newstudents_services.png';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false,
      silde_didMount: false
    }
  }


  handleNavbar = () =>{
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidMount(){
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
          <Footer/>
        </div>
        <GlobalStyle />
      </>
    );
    
  }
}
export default App;


