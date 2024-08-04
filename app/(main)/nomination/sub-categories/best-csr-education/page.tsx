"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const CSRAwardCategoryPage = () => {
    const subcategories = [
        {
            title: "The Overall Best Corporate Social Responsibility (CSR) in Education in Nigeria Award",
            description: "This Award celebrates the significant contributions of corporate entities across various sectors to the education sector in Nigeria through corporate social responsibility initiatives. This Award highlights the crucial impact and strategic importance of CSR in education.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Banking And Finance CSR in Education Award",
            description: "Recognizes financial institutions for their initiatives in supporting education.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Telecommunications CSR in Education Award",
            description: "Honors telecom companies for their support in digital learning programs and connectivity for education.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Oil And Gas CSR in Education Award",
            description: "Celebrates oil and gas companies' contributions to educational development in their host communities.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Food And Beverages CSR in Education Award",
            description: "Acknowledges food and beverage companies' support for nutrition and education programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Manufacturing CSR in Education Award",
            description: "Recognizes manufacturing companies for their initiatives in technical and vocational education.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Aviation CSR in Education Award",
            description: "Honors aviation companies for their support of aerospace education and training programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Technology And ICT CSR in Education Award",
            description: "Recognizes tech companies for their initiatives in digital education, ICT training, and e-learning support.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Real Estate And Construction CSR in Education Award",
            description: "Honors companies in the real estate and construction sector for their educational infrastructure support.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Retail And E-Commerce CSR in Education Award",
            description: "Recognizes retail and e-commerce companies for their support of education through various initiatives.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Pharmaceuticals CSR in Education Award",
            description: "Honors pharmaceutical companies for their support of health education and related initiatives.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Insurance CSR in Education Award",
            description: "Recognizes insurance companies for their contributions to financial literacy and education programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Conglomerates And Diversified Companies CSR in Education Award",
            description: "Honors diversified companies for their wide-ranging support of educational initiatives.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Media And Entertainment CSR in Education Award",
            description: "Recognizes media and entertainment companies for their support of educational content and initiatives.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Agriculture And Agribusiness CSR in Education Award",
            description: "Honors companies in the agricultural sector for their support of agricultural education and training programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Health Care And Hospitals CSR in Education Award",
            description: "Recognizes healthcare providers for their contributions to medical education and health awareness programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Professional Services CSR in Education Award",
            description: "Honors professional services firms for their support of education and skill development programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Fintech CSR in Education Award",
            description: "Recognizes fintech companies for their innovative approaches to financial education and literacy programs.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Microfinance Banks CSR in Education Award",
            description: "Honors microfinance banks for their grassroots level support of education initiatives.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Emerging Telecommunications CSR in Education Award",
            description: "Recognizes emerging telecom companies for their innovative contributions to educational connectivity.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Technology And Software CSR in Education Award",
            description: "Honors technology and software companies for their contributions to digital literacy and coding education.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Real Estate Development CSR in Education Award",
            description: "Recognizes real estate developers for their contributions to educational infrastructure and community development.",
            image: "/images/nesa-card2.png"
        },
        {
            title: "Commercial Retail CSR in Education Award",
            description: "Honors commercial retail companies for their support of education through various community initiatives.",
            image: "/images/nesa-card2.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subcategories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + subcategories.length) % subcategories.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNominate = (categoryTitle: string) => {
        console.log(`Nominated for: ${categoryTitle}`);
        // Implement nomination logic here
    };

    return (
        <div className="min-h-screen bg-[#FFF5E0]">
            {/* Hero Section */}
            <div className="relative bg-[#191307] text-white py-12 sm:py-24 px-4 sm:px-8 mt-16">
                <div className="absolute inset-0 bg-[url('/images/Herosection.png')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-xl sm:text-2xl mb-2 md:mt-16 text-center">Category 3</h2>
                    <h1 className="text-2xl sm:text-4xl font-bold text-[#FFC247] mb-2 sm:mb-4 text-center">{subcategories[currentIndex].title}</h1>
                    <p className="text-sm sm:text-base mb-4 sm:mb-8 text-center">
                        {subcategories[currentIndex].description}
                    </p>
                </div>
                {/* Carousel controls remain the same */}
            </div>

            {/* Purpose and Benefits Section */}
            <div className="bg-white w-full">
                <div className="max-w-6xl mx-auto py-12 px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 relative inline-block">
                            Purpose
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
                        </h2>
                        <p className="mb-4">
                            To recognize and celebrate corporate entities that have made significant contributions to the education 
                            sector through their Corporate Social Responsibility (CSR) initiatives. This award aims to highlight the impact of CSR 
                            activities on education, encourage a strategic approach to CSR in education, and inspire other companies to contribute to 
                            educational development in Nigeria.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl mb-6 relative inline-block">
                            Benefits
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                                <div>
                                    <strong>Awardees:</strong> Winners receive widespread recognition for their CSR efforts in education, enhancing their corporate 
                                    image and reputation, and gain access to a network of like-minded corporate entities committed to educational development. 
                                    They also benefit from increased visibility and positive publicity associated with the NESA Africa Award 2024 winners.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                                <div>
                                    <strong>Nigeria and Africa:</strong> The award helps raise awareness about CSR's role in Quality Education by encouraging corporate entities to invest in 
                                    education. It promotes best practices in CSR and sustainable education development, sharing learning 
                                    opportunities for all. It also encourages more companies to engage in CSR activities, leading to improved educational 
                                    outcomes across Nigeria and Africa, contributing to social and economic development, and inspires other organizations to contribute to 
                                    educational development, creating a ripple effect across various sectors.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                                <div>
                                    <strong>SDG Goals:</strong> This award aligns with SDG Goal 4 (Quality Education) by encouraging corporate entities to invest in educational initiatives that ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sub-Categories Section */}
            <div className="max-w-6xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold mb-8 relative inline-block">
                    The CSR Award Sub-Categories
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#FFC247]"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subcategories.slice(1).map((category, index) => (
                        <div key={index} className="bg-[#191307] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col">
                            <div className="relative h-60 flex items-center justify-center p-6">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    width={300}
                                    height={300}
                                    objectFit="contain"
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h4 className="text-white text-xl font-bold mb-2">{category.title}</h4>
                                    <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                                </div>
                                <button
                                    onClick={() => handleNominate(category.title)}
                                    className="w-full bg-[#FFC247] text-black py-2 rounded font-bold hover:bg-[#FFD277] transition mt-auto"
                                >
                                    Nominate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CSRAwardCategoryPage;
