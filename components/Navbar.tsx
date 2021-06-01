import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const onClick = () => {
        setActive(!active)
    }
    return (
        <header className="fixed z-10 w-full p-3 bg-gray-800 shadow-md md:p-0">
            <div className="flex items-center justify-between px-4">
                <div>
                    <img src={"/logo.png"} width={150}/>
                </div>

                <div onClick={onClick} className={`md:hidden uppercase text-white`}>
                    {
                        active
                        ?
                        <p>Close</p>
                        :
                        <p>Menu</p>
                    }
                </div>

                <nav
                className={`
                ${!active && 'hidden'}
                transition duration-500 ease-in-out absolute flex items-center bg-gray-900 flex-col top-full w-full left-0 z-20 md:static md:w-auto  md:flex md:bg-transparent
                `}
                >
                    <ul className="pt-4 md:flex-row md:flex">
                        <li className="mt-4 mb-2 list-none md:mr-5 md:mt-0">
                            <a className="flex w-full text-base px-2 py-1 rounded-lg hover:text-blue-600 cursor-pointer pz-2.5 text-white">Foreclosures</a>
                        </li>
                        <li className="mb-2 list-none md:mr-5">
                            <a className="flex w-full text-base px-2 py-1 rounded-lg hover:text-blue-600 cursor-pointer pz-2.5 text-white">Bargain Homes</a>
                        </li>
                        <li className="mb-2 list-none md:mr-5">
                            <a className="flex w-full text-base px-2 py-1 rounded-lg hover:text-blue-600 cursor-pointer pz-2.5 text-white">Home</a>
                        </li>
                        <li className="mb-2 list-none md:mr-5">
                            <a className="flex w-full text-base px-2 py-1 rounded-lg hover:text-blue-600 cursor-pointer pz-2.5 text-white">Financing</a>
                        </li>
                        <li className="mb-4 list-none md:mr-5">
                            <a className="flex w-full text-base px-2 py-1 rounded-lg hover:text-blue-600 cursor-pointer pz-2.5 text-white">MyCredit</a>
                        </li>
                        <li className="-mt-0.5">
                            <button className="p-1 mb-2 text-white bg-blue-600 border-2 border-blue-600 border-solid rounded-md hover:bg-transparent hover:text-blue-600 md:mb-0">SignUp</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;