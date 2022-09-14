import React, { useEffect, useState } from "react";
import './Feed.css'

function Feed ({ activeUser}) {
	const [menus, setMenus] = useState([])

  useEffect(() => {
		if (activeUser) {
			setMenus(activeUser.menus)
		}
  },[activeUser])

	return (
    <div>
      {activeUser ? (
        <>
          <h1>{activeUser.first_name}'s Feed</h1>
          <h5 className="card-title">{activeUser.first_name}</h5>
          <p className="card-text">Your Feed</p>
          <br />
          <span className="phone">345083737338</span>
          {/* {menus.map((menu) => {
            return <Carousels menu={menu} key={menu.id} />;
          })} */}
        </>
      ) : null}
    </div>
  );
}

export default Feed;