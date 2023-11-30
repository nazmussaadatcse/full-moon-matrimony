import useStories from "../hooks/useStories";
import ReactStars from "react-rating-stars-component";



const SuccessStory = () => {
    const [successStories,] = useStories();
    console.log(successStories);


    return (
        <div className="container mx-auto px-4 py-8">


            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-8 text-center text-pink-900"> Success Story</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {successStories.map((story, index) => (
                        <div key={index} className="bg-pink-600 text-white rounded-lg p-8 shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                {/* Couple Image */}
                                <img
                                    src={story.coupleImageLink}
                                    alt="Couple Image"
                                    className="w-72 h-42 rounded-md"
                                />
                            </div>
                            {/* Marriage Date */}
                            <p className="text-md mb-1">Marriage Date: <span className="uppercase text-black">{story.selectedDate}</span></p>
                            
                            <ReactStars
                                count={5}
                                value={story?.selectedReview}
                                edit={false} // Set edit to false to prevent changes
                                size={24}
                                activeColor="#ffd700"
                            />
                            <p className="text-md mb-1">
                                Success Story : <br></br> <span className="text-black text-base">
                                    {story.successStory.length > 100
                                        ? `${story.successStory.substring(0, 520)}...`
                                        : story.successStory
                                    }
                                </span>
                            </p>

                            {/* Success Story Text */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;