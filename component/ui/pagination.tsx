import { useState, useEffect } from 'react';

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

  // Sincronizar activePage cuando currentPage cambia desde fuera
  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      onPageChange?.(page);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      const nextPage = activePage + 1;
      setActivePage(nextPage);
      onPageChange?.(nextPage);
    }
  };

  const handlePrev = () => {
    if (activePage > 1) {
      const prevPage = activePage - 1;
      setActivePage(prevPage);
      onPageChange?.(prevPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Mostrar todos los números de página
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`
            w-12 h-12 rounded-2xl font-medium transition-all duration-300
            ${i === activePage 
              ? 'bg-[#D69F04] text-black' 
              : 'text-[#777777] hover:bg-gray-100'
            }
          `}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const showPrevButton = activePage > 1;
  const showNextButton = activePage < totalPages;

  return (
    <div className="flex items-center gap-4">
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
      
      <div className="flex items-center gap-2 flex-wrap justify-center">
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