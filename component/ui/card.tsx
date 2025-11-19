import Link from "next/link";

interface CardProps {
    category: string;
    title: string;
    brand: string;
    warranty: string;
    price: string;
    image: string;
}

export default function Card({ 
    category, 
    title, 
    brand, 
    warranty, 
    price, 
    image 
}: CardProps) {
    return (
        <div className="bg-white block max-w-sm p-4 border border-gray-300 rounded-2xl shadow-sm">
            <img className="rounded-2xl w-full mb-4" src={image} alt={title} />

            <div className="space-y-2">
                <p className="text-[#777777] text-sm">{category}</p>
                
                <h3 className="text-[#022954] font-semibold text-lg">
                    {title}
                </h3>
                
                <p className="text-[#022954] text-sm">{brand}</p>
                
                <p className="text-[#D69F04] text-sm font-medium">{warranty}</p>
                
                <p className="text-[#022954] font-bold text-2xl pt-2">
                    ${price} <span className="text-[#022954] font-normal text-base">USD</span>
                </p>
                
                <div className="flex items-center justify-between pt-4 ">
                    <div className="flex items-center rounded-2xl border border-[#D9D9D9]">
                        <button className="px-3 py-2 text-yellow-500 ">
                            −
                        </button>
                        <span className="px-4 my-1 border-x border-gray-300">1</span>
                        <button className="px-3 py-2 text-yellow-500 ">
                            +
                        </button>
                    </div>
                    
                    <button className="p-2.5 px-5 border border-[#022954] rounded-2xl">
                        <svg 
                            className="w-5 h-5 font-bold text-[#022954]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}