import './share.css';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import EventIcon from '@material-ui/icons/Event';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import { EmojiEmotionsOutlined, HomeRounded } from '@material-ui/icons';

export default () => {
  return (
    <div className='share'>
       <div className="sharewrap">
       <div className="topshare">
           <img src="/assets/profile1.jpg" alt="" className='shareimg'/>
           <input type="text" className="inputshare" placeholder='Anything Special,Prabhu?'/>
       </div>
       <div className="downshare">
           <div className="photo sharediv">
             <PermMediaIcon  htmlColor='tomato' className='mediaicon shareicon'/>
             <span className="phototext sharetext">Photo/video</span>
           </div>
           <div className="feeling sharediv">
             <EmojiEmotionsRoundedIcon htmlColor='orange' className='feelingicon shareicon'/>
             <span className="feelingtext sharetext">Feeling</span>
           </div>
           <div className="workplace sharediv">
              <HomeRounded htmlColor='blue' className='homeicon shareicon'/>
              <span className="homeshare sharetext">WorkPlace</span>
           </div>
           <div className="event sharediv">
              <EventIcon htmlColor='green' className='eventicon shareicon'/>
              <span className="eventshare sharetext">Event</span>
           </div>
           
       </div>
       </div>
    </div>
  )
}
