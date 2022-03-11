import { TextField } from "@mui/material";
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import {Search} from '@material-ui/icons/';
import {Link} from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
       
          <i class="fa-duotone fa-c c-iconi"></i>
        
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbaricon">
        <Link to="/" className="link-connect">
          <span className="connect">Connect</span>
        </Link>
      </div>
      <div className="right">
        <img src="/assets/profile1.jpg" alt="" className="profileimg" />

        <div className="firstIcon">
          <PeopleIcon />
          <span className="peoplespan">1</span>
        </div>
        <div className="secondIcon">
          <NotificationsIcon />
          <span className="notificationspan">1</span>
        </div>
        <div className="thirdIcon">
          <ChatIcon />
          <span className="notificationspan">1</span>
        </div>
      </div>
    </div>
  );
}
