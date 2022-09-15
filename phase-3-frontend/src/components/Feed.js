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
					<div className="feed-container">
						<div className="card-container">
						{menus.map((menu) => {
							return <FeedCard menu={menu} key={menu.id} />;
						})}
						</div>
					</div>
        </>
      ) : null}
    </div>
  );
}
export default Feed;



