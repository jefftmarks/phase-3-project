import React, { useEffect, useState } from "react";
import './Feed.css'
import FeedCard from './FeedCard.js'

function Feed({ activeUser }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
		fetch("http://localhost:9292/recent_menus")
  			.then((res) => res.json())
  			.then(menus => setMenus(menus))
				.catch(e => console.error(e));
  }, []);


  return (
    <div>
      {activeUser ? (
        <>
          <div className="feed-clearfix">
            <div className="feed-row">
              <div className="feed-col-md-4 animated fadeIn">
                <div className="feed-card">
                  <div className="feed-card-body">
                    <div className="feed-avatar">
                    </div>
                    <h5 className="feed-card-title">Menu Feed</h5>
                    <br />
                    <div className="card-container-div">
                    {menus.map((menu) => {
                      return <FeedCard menu={menu} key={menu.id} />;
                    })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default Feed;



