import React, { useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: 'What is Full Mon Matrimony?',
            answer: 'Full Mon Matrimony is a platform designed to help individuals find their ideal life partners by providing comprehensive bio-data and matchmaking services.',
        },
        {
            question: 'How can I create an account on Full Mon Matrimony?',
            answer: 'To create an account, simply visit our website and click on the "Sign Up" button. Fill in the required details, and your account will be created.',
        },
        {
            question: 'Is it mandatory to provide personal details?',
            answer: 'Yes, providing accurate personal details is essential for finding suitable matches. However, your privacy is our priority, and we ensure the confidentiality of your information.',
        },
        {
            question: 'Can I search for specific preferences in a partner?',
            answer: 'Absolutely! Our platform allows you to filter potential matches based on various criteria, including age, occupation, location, and more.',
        },
        {
            question: 'Is Full Mon Matrimony a paid service?',
            answer: 'While basic features are available for free, we also offer premium membership with additional benefits for those seeking advanced matchmaking services.',
        },
    ];

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='my-16'>
            <h2 className="text-2xl font-bold my-8 text-center text-pink-900"> FAQ</h2>
            <div className="flex justify-center items-center px-16">
            
            <div className="w-1/2 p-12 mb-8">
                <div className="accordion">
                    {faqData.map((faq, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="checkbox"
                                id={`question${index + 1}`}
                                className="hidden"
                                checked={activeIndex === index}
                            />
                            <label
                                htmlFor={`question${index + 1}`}
                                className="flex text-pink-500 justify-between items-center bg-pink-200 hover:bg-pink-300 cursor-pointer py-2 px-4 rounded-lg font-semibold"
                                onClick={() => handleAccordion(index)}
                            >
                                <span>{faq.question}</span>
                                < FaArrowDown className='text-pink-600'>
                                </FaArrowDown>
                            </label>
                            <div className={`panel mt-2 ${activeIndex === index ? '' : 'hidden'}`}>
                                <p className="py-2 rounded-md text-pink-800 px-4 border">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-1/2 p-4">
                {/* Add your image */}
                <img src="https://i.ibb.co/ZLf8CMX/faq-image-fmm.png" alt="Your Image" className="w-full" />
            </div>
        </div>
        </div>
    );
};

export default FaqAccordion;
