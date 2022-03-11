import "./leftbar.css";
import { Chat } from "@material-ui/icons";
export default function Leftbar() {
  return (
    <div className="left">
      <div className="wrap">
        <ul className="leftul">
          <li className="item">
            <Chat className="icon"/>
            Prabhu raam
          </li>
          <li className="item">
            <Chat className="icon" />
            Followers
          </li>
          <li className="item">
            <Chat className="icon" />
            Groups
          </li>
          <li className="item">
            <Chat className="icon" />
            Memories
          </li>
          <li className="item">
            <Chat className="icon" />
            Videos
          </li>
          <li className="item">
            <Chat className="icon" />
            Saved
          </li>
          <li className="item">
            <Chat className="icon" />
            Watch
          </li>
          <li className="item">
            <Chat className="icon" />
            Feed
          </li>
          <li className="item">
            <Chat className="icon" />
            Following
          </li>
          <li className="item">
            <Chat className="icon" />
            Courses
          </li>
        </ul>
      </div>
    </div>
  );
}
