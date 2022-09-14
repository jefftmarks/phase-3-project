import React from "react";
import './Feed.css'

function Feed ({ activeUser}) {
//const [formData, setFormData] = useState(initialValues);

// mapping over menu cards mayve make diff component

	//function handleChange(event) {
  //  const { name, value } = event.target;
  //  setFormData((formData) => ({ ...formData, [name]: value }));
  //}

	return (
		<div>
			{activeUser ? <h1>{activeUser.first_name}'s Feed</h1> : null }
			  <div class="user-profile-container">
                <div class="user-image-container">
                    <img src="http://via.placeholder.com/100x100" />
                </div>
                <div class="user-name-container">
                    <div class="user-name">{activeUser.first_name}</div>
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
			  <div class="col-md-6 feed">


            <div class="create-tweet-container">
                <form action="">
                    <input type="text" />
                    <button class="pull-right" type="submit">tweet</button>
                </form>
            </div>
			</div>            
                        <div class="author-image-container">
                            <img src="http://via.placeholder.com/60x60"/>

                        </div>
                        <div class="tweet-creator-data-container">
                            <div class="author-name">Fred Flinstone</div>
                            <div class="author-handle">@FredFlinstone</div>
                            <div class="tweet-timestamp">37m</div>
                        </div>
                        <div class="tweet-content">
                            <p>Here is a tweet</p>

                        </div>
                        <div class="tweet-publish-data-container">
                            <div class="replies-container">1</div>
                            <div class="retweets-container">3</div>
                            <div class="favorited-container">1</div>
                            <div class="message-author-container"></div>
                        </div>
                 {/*<!--end feed container --> */}
            </div>
			
	)
}

export default Feed;