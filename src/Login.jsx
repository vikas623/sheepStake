import MetamaskConnect from "components/MetamaskConnect";
import Container from "./components/Container";

const Login = () => {
  return (
    <div className="w-full flex flex-col md:justify-center items-center p-5">

      <div className="title text-center justify-self-start mb-5">
        Sheep Game
      </div>
      <div className="subtitle mt-5"/>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full mb-5" style={{maxWidth:'1500px'}}>
        <div className="h-full w-full md:w-1/2 flex justify-between flex flex-col gap-5">
        <Container>
            <div className="flex flex-col items-center font-pixel gap-5">
                <div className="subtitle mt-5">LOGIN TO PLAY</div>
                {/* <div className="mt-2"></div> */}
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <MetamaskConnect />
                </div>
            </div>
        </Container>    
        </div>
    </div>
    </div>
  )
}

export default Login
