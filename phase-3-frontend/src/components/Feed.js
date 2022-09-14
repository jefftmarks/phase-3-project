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
			{activeUser ? (
				<>


			<h1>{activeUser.first_name}'s Feed</h1>
			  <div className="user-profile-container">
                <div className="user-image-container">
                    <img src="http://via.placeholder.com/100x100" alt="placeholder" />
                </div>
                <div className="user-name-container">
                    <div className="user-name">{activeUser.first_name}</div>
                    <div className="user-handle"></div>
                </div>

                <div className="user-details-container">
                    <div className="row text-center">
                        <div className="col-xs-4">
                            <div className="user-details-title">Tweets</div>
                            <div className="user-details-count">2</div>
                        </div>
                        <div className="col-xs-4">
                            <div className="user-details-title">Follows</div>
                            <div className="user-details-count">12</div>
                        </div>
                        <div className="col-xs-4">
                            <div className="user-details-title">Followers</div>
                            <div className="user-details-count">1</div>
                        </div>
                    </div>
                </div>
            </div>
			  <div className="col-md-6 feed">


            <div className="create-tweet-container">
                <form action="">
                    <input type="text" />
                    <button className="pull-right" type="submit">tweet</button>
                </form>
            </div>
			</div>            
                        <div className="author-image-container">
                            <img src="http://via.placeholder.com/60x60" alt="placeholder"/>

                        </div>
                        <div className="tweet-creator-data-container">
                            <div className="author-name">Fred Flinstone</div>
                            <div className="author-handle">@FredFlinstone</div>
                            <div className="tweet-timestamp">37m</div>
                        </div>
                        <div className="tweet-content">
                            <p>Here is a tweet</p>

                        </div>
                        <div className="tweet-publish-data-container">
                            <div className="replies-container">1</div>
                            <div className="retweets-container">3</div>
                            <div className="favorited-container">1</div>
                            <div className="message-author-container"></div>
                        </div>
                 {/*<!--end feed container --> */}
								 
				</>
			) : null}
		</div>
	)
}

export default Feed;