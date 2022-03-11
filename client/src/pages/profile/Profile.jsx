
import Centerbar from '../../components/centerbar/Centerbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="leftprofile"></div>
        <div className="profileTop">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="http://localhost:3000/assets/coverphoto.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="http://localhost:3000/assets/profile1.jpg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Prabhu raam</h4>
              </div>
            </div>
          </div>
          <div className="profileCenter">
            <div className="profileCenterLeft">
              <div className="profileCenterWrap">
                <span className="info"> User Information</span>
                <div className="profileInfo">
                  <div className="livesIn">
                    <HomeIcon className="homeIcon profileIcon" />
                    <span className="lives infoSpan">Lives in Mannargudi</span>
                  </div>
                  <div className="location">
                    <LocationOnIcon className="locationIcon profileIcon" />
                    <span className="from infoSpan">From Thanjavur</span>
                  </div>
                  <div className="relationship">
                    <FavoriteIcon className="profileIcon favouriteIcon" />
                    <span className="relatioshipSpan infoSpan">Single</span>
                  </div>
                </div>
                <span className="editInfo">Edit Info</span>
              </div>
              <div className="friendsWrap">
                <span className="friendsName">Friends</span>
                <div className="friendwrap">
                  <div className="friends">
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Sadhasivam</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Puviarasu</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Yogeshwaran</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Sundhareswar</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">ManiKandan</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Manibharathi</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Yogesh</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Ramesh</span>
                    </div>
                    <div className="friend">
                      <img
                        src="http://localhost:3000/assets/profile1.jpg"
                        alt=""
                        className="friendimg"
                      />
                      <span className="friendName">Keerthi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Centerbar username="prabh"/>
          </div>
        </div>
        <div className="rightprofile"></div>
      </div>
    </>
  );
}
