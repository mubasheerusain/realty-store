import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export const Cards = ({property}) => {
    
    return (
            <div className="flex-shrink-0 mr-6 bg-white rounded-lg shadow-md w-80 md:w-72">
                <Carousel interval={null}>
                    <Carousel.Item >
                        <img
                            className="w-full rounded-lg h-36 d-block"
                            src={property.image.guid}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="px-4 py-2">
                    <div className="flex justify-between mb-2 text-base">
                        <div className="text-blue-600">{property.title.rendered}</div>
                        <div><a className="p-1 text-xs text-purple-600 bg-transparent border-2 border-purple-600 rounded-xl">Get EMI</a></div>
                    </div>
                    <ul>
                        <li className="mb-2 text-xs"><strong>${property.ask_price}</strong></li>
                        <li className="mb-2 text-xs"><p>{property.beds} beds <span>|</span> {property.baths} bath <span>|</span> {property.sqft} sqft plot</p></li>
                        <li className="mb-1 text-xs"><p>{property.address}</p></li>
                    </ul>
                </div>
            </div>
    );
}

export default Cards;