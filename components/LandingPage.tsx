import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards"
import Grid from "./Grid";
import Navbar from "./Navbar"

export const LandingPage = () => {
    const [properties, setProperties] = useState([])
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        axios.get("http://app1.ap-south-1.elasticbeanstalk.com/index.php/wp-json/wp/v2/real_estates").then((res) => {
            setProperties(res.data)
            setIsloading(false)
            console.log(properties)
        })
    }, [])
    return (
        <div>
            <div className="w-full">
                <Navbar />
            </div>
            <div className="min-h-full bg-gray-100 font-body">
                <div className="flex flex-col h-screen">
                    <div
                        className="flex items-center justify-center h-full bg-fixed bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: 'url(/home.jpg)' }}>
                        <div className="top-0 left-0 z-0 flex items-center justify-center w-full h-full">
                            <input type="text" placeholder="Search..." className="w-4/5 h-10 pl-6 outline-none md:w-4/12 rounded-3xl" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 ">
                    <div>
                        <h2 className="p-2 pt-6 text-2xl text-center text-blue-600">Recommend For You or <span className="font-medium">Invest Homes</span> Near You</h2>
                        <p className="p-2 pt-2 text-sm text-center text-blue-600">Newest Listing in Los Angeles we think you'll love - Offering over <span className="font-medium">$05,768 discounted residential Home</span> for home</p>
                    </div>
                    <div>
                        <h2 className="mt-8 ml-8 text-lg font-bold text-blue-600">Los Angeles, CA Foreclosures Homes For Sales</h2>
                        <div className="flex justify-between w-full overflow-auto overflow-y-hidden whitespace-nowrap p-7">
                            {
                                isloading
                                    ?
                                    <p>loading.....</p>
                                    :
                                    properties.map((property, index) => {
                                        return (
                                            <Cards property={property} key={index} />
                                        )
                                    })
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-8 ml-8 text-lg font-bold text-blue-600">Don't Miss These Hot Homes - 20% Under Market Value</h2>
                        <div className="flex justify-between w-full overflow-auto overflow-y-hidden whitespace-nowrap p-7">
                            {
                                isloading
                                    ?
                                    <p>loading.....</p>
                                    :
                                    properties.map((property, index) => {
                                        return (
                                            <Cards property={property} key={index} />
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
                <Grid />
            </div>
        </div>
    );
}