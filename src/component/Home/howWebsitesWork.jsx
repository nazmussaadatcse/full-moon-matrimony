


const HowWebsitesWork = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-pink-900">How the Website Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-pink-600 text-white rounded-lg p-12 shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Step 1: Create a Profile</h3>
                    <p>
                        To get started, every user must create a personalized profile on our platform. This profile will serve as your digital identity and enable you to access the site's features and functionalities.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-pink-600 text-white rounded-lg p-12 shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Step 2: Find Biodata</h3>
                    <p>
                        Once registered, users can seamlessly explore and discover the comprehensive biodata of other members. Our platform provides filtering options to refine search results according to specific preferences.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-pink-600 text-white rounded-lg p-12 shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Step 3: Update Biodata</h3>
                    <p>
                        Maintain and keep your information current! Users have the liberty to update their own biodata, ensuring that the displayed information remains accurate and relevant. Only premium or Requested member can see your contact info.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-pink-600 text-white rounded-lg p-12 shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Step 4: Request Contacts</h3>
                    <p>
                        Unlock direct communication! Users can request access to contact information after making a payment. Also you may request admin approval for premium membership, granting access to additional features.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HowWebsitesWork;
