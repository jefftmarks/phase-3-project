import React from "react";
import Carousel from "better-react-carousel";
import Card from "./Card";

function Carousels ({menu}) {
 const [image_url, name, description, date, id] = menu

    return (
    <Card cols={2} rows={1} gap={10} width="50%" loop 
    ></Card>

    )
}

export default Carousels