import React from "react";
import './Feed.css'

function Feed ({ activeUser }) {
const [formData, setFormData] = useState(initialValues);


	function handleChange(event) {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

	return (
		<div>
			{activeUser ? <h1>{activeUser.first_name}'s Feed</h1> : null }
			  <div class="user-profile-container">
                <div class="user-image-container">
                    <img src="http://via.placeholder.com/100x100" />
                </div>
                <div class="user-name-container">
                    <div class="user-name">Fred</div>
                    <div class="user-handle"></div>
                </div>

                <div class="user-details-container">
                    <div class="row text-center">
                        <div class="col-xs-4">
                            <div class="user-details-title">Tweets</div>
                            <div class="user-details-count">2</div>
                        </div>
                        <div class="col-xs-4">
                            <div class="user-details-title">Follows</div>
                            <div class="user-details-count">12</div>
                        </div>
                        <div class="col-xs-4">
                            <div class="user-details-title">Followers</div>
                            <div class="user-details-count">1</div>
                        </div>
                    </div>
                </div>
            </div>
		</div> 
	)
}

export default Feed;