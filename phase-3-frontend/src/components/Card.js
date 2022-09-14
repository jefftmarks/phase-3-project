import React from "react";
import Carousel from "better-react-carousel";
import { BsDisplay } from "react-icons/bs";



function Card ({menu}) {
const {name, description, id, image_url, date} = menu

    return (
      <Carousel.Item cols={2} rows={1} gap={10} width="20%" loop>
        <img width="20%" src={image_url} />
        <div
          style={{
            padding: "8px",
            display: "inline-block",
          }}
        ></div>
      </Carousel.Item>
    );
}




export default Card 