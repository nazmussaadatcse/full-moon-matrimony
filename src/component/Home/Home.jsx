import Banner from "./Banner";
import BioDatas from "./BioDatas";
import SuccessCounter from "./SuccessCounter";
import SuccessStory from "./SuccessStory";
import HowWebsitesWork from "./howWebsitesWork";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWebsitesWork></HowWebsitesWork>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
            <BioDatas></BioDatas>
        </div>
    );
};

export default Home;