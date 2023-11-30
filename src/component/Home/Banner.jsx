


const Banner = () => {
    const backgroundImageUrl = 'https://i.ibb.co/bmk5gQk/banner-FMM.jpg'; 

    return (
        <div className='bg-slate-300 relative my-2'>
            {/* Darkened background image */}
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(50%)', //
                }}
            />

            {/* Text content */}
            <div className='relative z-10 flex flex-col justify-center items-center text-center px-6 pt-2 lg:px-8 max-h-fit'>
                <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                    <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                        {/* ... */}
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='text-2xl font-bold tracking-tight sm:text-6xl'>
                        New Era of Matrimony
                        </h2>
                        <p className='mt-6 text-lg leading-'>
                        "Welcome to Full Mon Matrimony - Where Love Finds Its Perfect Match! Embrace a revolutionary matrimony experience tailored to modern connections. Discover a seamless blend of tradition and technology, empowering you to find your ideal partner effortlessly. Join us on this journey, where every story begins with a promise of everlasting love and compatibility."
                        </p>
                        <div className='mt-10 gap-2 flex items-center justify-center'>
                            <a
                                href='#'
                                className='rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'
                            >
                                Get started
                            </a>
                            <a href='#' className='text-sm font-semibold leading-6 text-white'>
                                Learn more <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
                    aria-hidden='true'
                >
                    <div
                        className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
