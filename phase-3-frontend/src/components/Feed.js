import React from "react";
import './Feed.css'
import Card from './Card.js'

function Feed ({ activeUser}) {
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
    <div>
      {activeUser ? (
        <>
          <h1>{activeUser.first_name}'s Feed</h1>
          <h5 className="card-title">{activeUser.first_name}</h5>
          <p className="card-text">Your Feed</p>
          <br />
          <span className="phone">345083737338</span>
          {menus.map((menu) => {
            return <Carousel menu={menu} key={menu.id} />;
          })}
        </>
      ) : null}
    </div>
  );
}

export default Feed;