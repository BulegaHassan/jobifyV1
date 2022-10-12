import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Knausgaard gentrify whatever salvia, kitsch raw denim try-hard
            shaman plaid kale chips locavore polaroid cloud bread. Put a bird on
            it listicle gluten-free, trust fund franzen vaporware bushwick DIY
            vexillologist yr skateboard venmo subway tile. Gluten-free roof
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};


export default Landing;
