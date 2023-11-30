import { Helmet } from "react-helmet";
import Banner from "./Banner";
import BioDatas from "./BioDatas";
import FaqSection from "./FaqSection";
import SuccessCounter from "./SuccessCounter";
import SuccessStory from "./SuccessStory";
import HowWebsitesWork from "./howWebsitesWork";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Full Moon Matrimony | Home</title>
            </Helmet>
            <Banner></Banner>
            <BioDatas></BioDatas>
            <HowWebsitesWork></HowWebsitesWork>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;