import About from "../components/About/About";
import Intro from "../components/Intro/Intro";

function Home(){

    return(
        <div style={{height:'100%',width:'100vw',justifyContent:'center'}}>
            <Intro></Intro>
            <About></About>
        </div>
    
    )
}

export default Home;