import Banner from "./Banner";
import BioDatas from "./BioDatas";
import FaqSection from "./FaqSection";
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
            <FaqSection></FaqSection>
            <BioDatas></BioDatas>
        </div>
    );
};

export default Home;