


const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // Handle the submitted email as needed
        console.log('Submitted Email:', email);
        e.target.reset();
    };

    return (
        <footer className="bg-gray-900 text-white py-8 mt-24">
            
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   

                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Legal Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Social</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                     {/* Subscription Form */}
                     <div className="col-span-2 md:col-span-1">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                            
                        </div>
                        <form onSubmit={handleSubmit} className="flex items-center gap-1 w-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-4/5 px-4 py-2 rounded-md mb-2 bg-gray-800 text-white focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-pink-600 text-white px-4 py-2 mb-2 rounded-md transition duration-300 hover:bg-pink-500 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                

                {/* Additional demo text */}
                <p className="mt-8 text-center">
                    &copy; {new Date().getFullYear()} Full Moon Matrimony. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
