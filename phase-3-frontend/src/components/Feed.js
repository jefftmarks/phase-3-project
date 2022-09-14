import React, {useEffect, useState} from "react";
import './Feed.css'
import Card from './Card.js'
import Carousel from "better-react-carousel";


function Feed ({ activeUser}) {
const [menus, setMenus] = useState([])
//const [formData, setFormData] = useState(initialValues);

// mapping over menu cards mayve make diff component

	//function handleChange(event) {
  //  const { name, value } = event.target;
  //  setFormData((formData) => ({ ...formData, [name]: value }));
  //}

  useEffect(() => {
	fetch(`http://localhost:9292/your_recent_menus/${activeUser.id}`)
	.then(res => res.json())
	.then(menus => {
		setMenus(menus)
	})

  },[])




	return (
    <div className="contain-feed">
      {activeUser ? <h1>{activeUser.first_name}'s Feed</h1> : null}
      <div className="feed-clearfix">
        <div className="feed-row">
          <div className="feed-col-md-4 animated fadeIn">
            <div className="feed-card">
              <div className="feed-card-body">
                <div className="feed-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    className="feed-card-img-top"
                  />
                </div>
                <h5 className="card-title">
                 {activeUser.first_name}
                </h5>
                <p className="card-text">
                  Your Feed 
                  <br />
                  <span className="phone">345083737338</span>
				  <Carousel ></Carousel>
                  {menus.map((menu) => {
                    return <Card menu={menu} key={menu.id} />;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;