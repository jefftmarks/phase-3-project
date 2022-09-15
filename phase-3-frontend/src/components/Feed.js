import React, { useEffect, useState } from "react";
import './Feed.css'
import Card from './Card.js'
import Carousels from "./Carousels";

function Feed({ activeUser }) {
  const [menus, setMenus] = useState([]);
  //const [formData, setFormData] = useState(initialValues);

  // mapping over menu cards mayve make diff component

  //function handleChange(event) {
  //  const { name, value } = event.target;
  //  setFormData((formData) => ({ ...formData, [name]: value }));
  //}

  useEffect(() => {
	if (activeUser) {
		fetch(`http://localhost:9292/your_recent_menus/${activeUser.id}`)
  			.then((res) => res.json())
  			.then((menus) => {
   			 setMenus(menus);
		});
	}
  }, []);

  console.log(menus)


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
                      <img
                        src="https://randomuser.me/api/portraits/men/67.jpg"
                        className="feed-card-img-top"
                      />
                    </div>
                    <h5 className="feed-card-title">{activeUser.first_name}</h5>
                    <p className="feed-card-text"></p>
                    <br />
                    <div className="card-container-div">
                    {menus.map((menu) => {
                      return <Card menu={menu} key={menu.id} />;
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



