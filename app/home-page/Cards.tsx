// Cards.tsx

import React, { useEffect, useState } from 'react';
import { getCards } from '../lib/cards';
import { Card } from '../lib/types/interfaces';


const Cards = ({ searchTerm }: { searchTerm: string }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(15); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCards = await getCards();
        setCards(fetchedCards);
        setFilteredCards(fetchedCards); // Initially set filtered cards to all cards
        setLoading(false); // Once data is fetched, set loading to false
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchData();
  }, []);

  // Function to handle resizing and update cardsPerPage
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardsPerPage(5); // Set to 5 for mobile screens
    } else {
      setCardsPerPage(15); // Set to 15 for larger screens
    }
  };

  useEffect(() => {
    handleResize(); // Set initial cardsPerPage based on window size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle filtering based on search term
  useEffect(() => {
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
      // Add more conditions for filtering based on other card properties if needed
    );
    setFilteredCards(filtered);
    setCurrentPage(1); // Reset pagination to first page on search
  }, [searchTerm, cards]);

  // Logic to paginate cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="md:bg-[url('/images/bottombg.png')] md:bg-no-repeat md:bg-left-bottom md:bg-[length:100vw_130vh] bg-no-repeat bg-right">
      
      <div className="relative flex justify-center bg-no-repeat bg-right md:bg-[length:80vw_300vh] md:bg-right-top md:bg-[url('/images/rightBg.png')]">
      <img src='/images/pinkyBg.png' className="absolute inset-0 -z-10 w-[180vw] opacity-[.7] h-[100%] mobile" />
      
      <img src="/images/Ellipse1.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>
      <img src="/images/Ellipse2.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>
      <img src="/images/Ellipse3.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>
      <img src="/images/bgGreyMobile.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center opacity-15"/>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 m-4 md:m-[4rem] mb-10 gap-[30px]">
          {currentCards.map((card, index) => (
            <div key={index} className="mx-auto p-[25px] flex flex-col justify-between lg:w-[412px] lg:h-[549px] w-full h-[446px] border-[2px] border-[#FAB7D0] rounded-xl">
              <div className='flex flex-col h-full justify-between'>
                <div>
                  <div className="flex">
                    <div className="shadow iconCard relative bg-gradient-to-b from-[#3E21F333] to-[#A020F0] p-[1.15px] w-[87px] h-[87px] rounded-md">
                      <img
                        src={card.cardIcon.asset.url}
                        alt=""
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="clash uppercase font-medium text-[#404040] text-[24px] sm:text-[30px] leading-[28px] sm:leading-[36px]">{card.title}</p>
                      <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[25px] bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-3 px-4 text-center w-fit roboto-mono">{card.status}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#696969] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] fira-mono-regular pt-5 md:h-[114px] h-[90px] overflow-hidden">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-8 sm:mt-32 flex flex-col">
                    {card.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center mb-2">
                        <div className="w-[20px] h-[20px] mr-2">
                          <img className="w-full h-full object-cover" src={link.icon.asset.url} alt="" />
                        </div>
                        <p className="text-[#4428F2] leading-[20px] sm:leading-[30px] font-medium tracking-normal text-[14px] sm:text-[16px] clash">{link.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <button className="m-auto bottom-0 z-10 clash font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] border-gradient text-center py-[8px] custom-border-gradient w-full rounded-lg">
                    App List’s Common Ground
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex md:gap-7 gap-2 justify-center pb-32 mx-20">
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white" onClick={() => paginate(currentPage - 1)}>
          <i className="fas fa-chevron-left text-sm"></i>
        </div>
        {[...Array(Math.ceil(filteredCards.length / cardsPerPage)).keys()].map(number => (
          <div key={number} className={` w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white ${currentPage === number + 1 ? 'bg-black text-white' : ''}`} onClick={() => paginate(number + 1)}>
            {number + 1}
          </div>
        ))}
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white" onClick={() => paginate(currentPage + 1)}>
          <i className="fas fa-chevron-right text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
