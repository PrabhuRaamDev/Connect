import Centerbar from '../../components/centerbar/Centerbar'
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import './home.css';

export default function Home() {
  return (
  <>
    <Topbar/>
    <div className="home">
       <Leftbar/>
       <Centerbar/>
       <Rightbar/>

    </div>
  </>
  );
  
}
