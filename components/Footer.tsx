export const Footer = () => {
    return (
        <div className="text-white bg-gray-800">
            <div className="container flex flex-col items-center justify-center pt-6">
                <p className="pb-4">Copyright © 2021 - RealtyStore.com</p>
                <div className="cursor-pointer md:flex md:flex-row md:justify-between md:pl-4" style={{ textAlign: "center" }}>
                    <div className="pb-2 pl-1">
                        <a>About Us <span className="hidden md:inline-block">-</span></a>
                    </div>
                    <div className="pb-2 pl-1">
                        <a>Contact Us <span className="hidden md:inline-block">-</span></a>
                    </div>
                    <div className="pb-2 pl-1">
                        <a>Privacy Policy <span className="hidden md:inline-block">-</span></a>
                    </div>
                    <div className="pb-2 pl-1">
                        <a>Terms and Conditions <span className="hidden md:inline-block">-</span></a>
                    </div>
                    <div className="pb-2 pl-1">
                        <a>Do Not Sell My Info <span className="hidden md:inline-block">-</span></a>
                    </div>
                    <div className="pb-4 pl-1">
                        <a>RealtyStore FAQs</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;