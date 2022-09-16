import React, { useEffect, useState } from "react";
import './Feed.css'
import FeedCard from './FeedCard.js'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

function Feed({ activeUser }) {
  const [menus, setMenus] = useState([]);
	const [count, setCount] = useState(0)

	function handleIncrementCount() {
		setCount(count => count + 20)
	}

	function handleDecrementCount() {
		setCount(count => count - 20)
	}

  useEffect(() => {
		fetch(`http://localhost:9292/recent_menus/${count}`)
  			.then((res) => res.json())
  			.then(menus => setMenus(menus))
				.catch(e => console.error(e));
			window.scrollTo(0, 0);
  }, [count]);

  return (
    <div>
      {activeUser ? (
        <>

					<div className="feed-container">
						{menus.map(menu => (
							<FeedCard menu={menu} key={menu.id} />
						))}

						<div className="prev-next-container">

							{count === 0 ? null : (
								<button className="prev-next-button" onClick={handleDecrementCount}>
									<BsArrowLeft size="18" style={{marginBottom: "-5px"}} /> Prev
								</button>
							)}

							{menus.length < 20 ? null : (
								<>
									<div className="button-space"></div>
								
									<button className="prev-next-button" onClick={handleIncrementCount}>
										Next <BsArrowRight size="18" style={{marginBottom: "-5px"}} />
									</button>	
								</>
							)}			
						
						</div>
						
					</div>

        </>
      ) : null}
    </div>
  );
}
export default Feed;



