import { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ 
  totalPages, 
  currentPage = 1,
  onPageChange 
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);
  const [startPage, setStartPage] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const maxVisible = 4;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && !isAnimating) {
      const isGoingForward = page > activePage;
      setDirection(isGoingForward ? 'next' : 'prev');
      setActivePage(page);
      onPageChange?.(page);
      
      // Ajustar la ventana visible si es necesario
      if (page > startPage + maxVisible - 1) {
        setIsAnimating(true);
        setStartPage(startPage + 1);
        setTimeout(() => setIsAnimating(false), 300);
      } else if (page < startPage) {
        setIsAnimating(true);
        setStartPage(startPage - 1);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  };

  const handleNext = () => {
    if (activePage < totalPages && !isAnimating) {
      setDirection('next');
      const nextPage = activePage + 1;
      setActivePage(nextPage);
      onPageChange?.(nextPage);
      
      // Si el siguiente número está fuera de la ventana visible, animar
      if (nextPage > startPage + maxVisible - 1 && startPage + maxVisible <= totalPages) {
        setIsAnimating(true);
        setStartPage(startPage + 1);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  };

  const handlePrev = () => {
    if (activePage > 1 && !isAnimating) {
      setDirection('prev');
      const prevPage = activePage - 1;
      setActivePage(prevPage);
      onPageChange?.(prevPage);
      
      // Si el anterior número está fuera de la ventana visible, animar
      if (prevPage < startPage) {
        setIsAnimating(true);
        setStartPage(startPage - 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const endPage = Math.min(startPage + maxVisible - 1, totalPages);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`
            w-12 h-12 rounded-2xl font-medium transition-all duration-400
            ${i === activePage 
              ? 'bg-[#D69F04] text-black' 
              : 'text-[#777777] hover:bg-gray-100'
            }
          `}
          style={{
            animation: isAnimating 
              ? direction === 'next' 
                ? 'slideInFromRight 0.3s ease-out' 
                : 'slideInFromLeft 0.3s ease-out'
              : 'none'
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const showPrevButton = startPage > 1;
  const showNextButton = startPage + maxVisible - 1 < totalPages;

  return (
    <div className="flex items-center gap-4">
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      
      {/* Botón anterior */}
      {showPrevButton && (
        <button
          onClick={handlePrev}
          disabled={activePage === 1}
          className={`
            w-12 h-12 rounded-2xl flex items-center justify-center transition-all
            ${activePage === 1 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
      )}
      
      <div className="flex items-center gap-4 overflow-hidden">
        {renderPageNumbers()}
      </div>
      
      {/* Botón siguiente */}
      {showNextButton && (
        <button
          onClick={handleNext}
          disabled={activePage === totalPages}
          className={`
            w-12 h-12 rounded-2xl flex items-center justify-center transition-all
            ${activePage === totalPages 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      )}
    </div>
  );
}