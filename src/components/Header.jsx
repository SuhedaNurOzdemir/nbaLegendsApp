import  Container from "react-bootstrap/Container";
import nbaLogo from "../assets/nba-logo.png"
import Image from 'react-bootstrap/Image';


const Header = () => {
  return ( 
    <Container> 
      <Image src={nbaLogo} width="200px"></Image> 
      <h1 className="my-2 display-4">NBA Legends</h1>
    </Container>

  )
}

export default Header;
