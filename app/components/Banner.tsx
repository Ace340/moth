function Banner() {
    return <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold max-w-4xl mx-auto px-4 ">
        <div>
            <h1 className="text-7xl">Mints Magazine</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-[#f70a0ae1]">
                    The Mints 
                </span>{" "}
                Community
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Keep up to date with the latest Release, Events and Radio Shows | Listen to our Podcast | Support your Local Artists
        </p>
    </div>;
}

export default Banner;