export const Grid = () => {
    return (
        <div className="items-center w-full mt-8 text-center text-white bg-blue-800 md:pl-52 md:pr-52">
            <h2 className="pt-8 pb-12 text-xl font-medium">What is happening in los Angeles, CA</h2>
            <div className="grid items-center grid-cols-3 gap-8 pb-16">
                <div className="p-4">
                    <h2 className="text-2xl font-medium">32,235</h2>
                    <p className="text-sm">Sales</p>
                </div>
                <div className="p-4 border-l border-r border-blue-200">
                    <h2 className="text-2xl font-medium">8,698</h2>
                    <p className="text-sm">Foreclosures</p>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium">4,268</h2>
                    <p className="text-sm">HUD Homes</p>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium">2,681</h2>
                    <p className="text-sm">FSBO</p>
                </div>
                <div className="p-4 border-l border-r border-blue-200">
                    <h2 className="text-2xl font-medium">5,896</h2>
                    <p className="text-sm">Bank Owned</p>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium">3,698</h2>
                    <p className="text-sm">Pre-Foreclosures</p>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium">6,987</h2>
                    <p className="text-sm">Short Sales</p>
                </div>
                <div className="p-4 border-l border-r border-blue-200">
                    <h2 className="text-2xl font-medium">10,598</h2>
                    <p className="text-sm">Homes for Rent</p>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium">569</h2>
                    <p className="text-sm">Rent to Own</p>
                </div>
            </div>
        </div>
    )
};

export default Grid;