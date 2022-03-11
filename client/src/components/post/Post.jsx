import './post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import { ChatBubbleRounded, FavoriteRounded } from '@material-ui/icons';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setLiked] = useState(false);

  const changeLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setLiked(!isLiked);
  };

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const res = await axios.get(`users/${post.userId}`);
    setUser(res.data);
  };
  useEffect(() => {
    fetchUser();
  }, [post.userId]);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postwrap">
        <div className="toppost">
          <div className="lefttop">
            <Link to={`profile/${user.username}`}>
            <img src={user.profilepicture ? publicFolder + user.profilepicture : "assets/noAvatar.png"} alt="" className="postprofile" />

            </Link>
            <div className="postnametime">
              <span className="postname">{user.username}</span>
              <span className="posttime">{format(post.createdAt)}</span>
            </div>
          </div>
          <MoreHorizIcon className="optionsicon posticon" />
        </div>
        <div className="captions">
          <span className="captiontext">
            {post.desc}
          </span>
          <img
            src= {post.img}
            alt=""
            className="postpost"
          />
        </div>
        <div className="postbottom">
          <div className="bottomiconsleft">
            <FavoriteRounded
              className="bottomicons likeicon"
              onClick={changeLike}
            />
            <ChatBubbleRounded className="bottomicons" />
            <ShareRoundedIcon className="bottomicons" />
          </div>
          <div className="bottomiconsright">
            <BookmarkRoundedIcon className="bottomicons" />
          </div>
        </div>
        <span className="totallikes">{like} likes</span>
      </div>
    </div>
  );
}
