import React, { useRef, useEffect, useState } from "react";

export type FilterOption = {
  label: string;
  value: string | number;
};

export type FilterType = "checkbox" | "radio" | "range";

interface FilterSectionProps {
  title: string;
  type: FilterType;

  // Para checkbox y radio:
  options?: FilterOption[];
  selected?: (string | number)[];

  // Para range:
  min?: number;
  max?: number;
  step?: number;
  valueMin?: number;
  valueMax?: number;

  // Handlers
  onChange?: (value: any) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  type,
  options = [],
  selected = [],
  min = 0,
  max = 100,
  step = 1,
  valueMin = min,
  valueMax = max,
  onChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Por defecto cerrado

  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const clampValue = (value: number, minVal: number, maxVal: number) => {
    return Math.max(minVal, Math.min(maxVal, value));
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current || isDraggingMin || isDraggingMax) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const value = Math.round((percentage / 100) * (max - min) + min);
    
    const distToMin = Math.abs(value - valueMin);
    const distToMax = Math.abs(value - valueMax);
    
    if (distToMin < distToMax) {
      const newMin = clampValue(value, min, valueMax);
      onChange?.([newMin, valueMax]);
    } else {
      const newMax = clampValue(value, valueMin, max);
      onChange?.([valueMin, newMax]);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current || (!isDraggingMin && !isDraggingMax)) return;
      
      const rect = trackRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const value = Math.round((percentage / 100) * (max - min) + min);
      
      if (isDraggingMin) {
        const newMin = clampValue(value, min, valueMax);
        onChange?.([newMin, valueMax]);
      } else if (isDraggingMax) {
        const newMax = clampValue(value, valueMin, max);
        onChange?.([valueMin, newMax]);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingMin(false);
      setIsDraggingMax(false);
    };

    if (isDraggingMin || isDraggingMax) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingMin, isDraggingMax, valueMin, valueMax, min, max, onChange]);

  const handleMinInputChange = (val: number) => {
    const newMin = clampValue(val, min, valueMax);
    onChange?.([newMin, valueMax]);
  };

  const handleMaxInputChange = (val: number) => {
    const newMax = clampValue(val, valueMin, max);
    onChange?.([valueMin, newMax]);
  };

  return (
    <div className="relative bg-[#F5F7FA] rounded-2xl border border-[#D9D9D9] p-6 mb-5">
      {/* Title - Clickable para toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full font-semibold text-[#1A2B49] text-base mb-4 flex items-center justify-between cursor-pointer hover:text-[#17243b] transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 text-[#1A2B49]/60 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Content - Con animación */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2">
          {/* CHECKBOX */}
          {type === "checkbox" && options.length > 0 &&
            options.map((opt, index) => (
              <label
                key={(opt as any).key || opt.value || index}
                className="flex items-center gap-2.5 text-sm text-[#6B7280] mb-3 cursor-pointer hover:text-[#17243b] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt.value)}
                  onChange={() => {
                    const exists = selected.includes(opt.value);
                    const newValues = exists
                      ? selected.filter((v) => v !== opt.value)
                      : [...selected, opt.value];

                    onChange?.(newValues);
                  }}
                  className="h-4 w-4 rounded border-[#D9D9D9] cursor-pointer accent-[#17243b]"
                />
                {opt.label}
              </label>
            ))}
          
          {type === "checkbox" && options.length === 0 && (
            <p className="text-sm text-[#6B7280] italic">Cargando opciones...</p>
          )}

          {/* RADIO */}
          {type === "radio" &&
            options.map((opt, index) => (
              <label
                key={(opt as any).key || opt.value || index}
                className="flex items-center gap-2.5 text-sm text-[#3A4B66] mb-3 cursor-pointer hover:text-[#1A2B49] transition-colors"
              >
                <input
                  type="radio"
                  name={title}
                  checked={selected.includes(opt.value)}
                  onChange={() => onChange?.([opt.value])}
                  className="h-4 w-4 border-[#D9D9D9] cursor-pointer accent-[#17243b]"
                />
                {opt.label}
              </label>
            ))}

          {/* RANGE */}
          {type === "range" && (
        <div className="mt-2">
          {/* Dual Range Slider */}
          <div className="relative mb-15 pt-2 px-2 ">
            {/* Track container */}
            <div
              ref={trackRef}
              onClick={handleTrackClick}
              className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
            >
              {/* Active range */}
              <div
                className="absolute h-full bg-blue-600 rounded-full transition-all duration-150"
                style={{
                  left: `${getPercentage(valueMin)}%`,
                  right: `${100 - getPercentage(valueMax)}%`,
                }}
              ></div>

              {/* Min thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform z-10"
                style={{ left: `${getPercentage(valueMin)}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsDraggingMin(true);
                }}
              >
                {/* Tooltip min */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap  max-w-max">
                  ${valueMin.toLocaleString()}
                </div>
              </div>

              {/* Max thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform z-10"
                style={{ left: `${getPercentage(valueMax)}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsDraggingMax(true);
                }}
              >
                {/* Tooltip max */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2  text-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap  max-w-max">
                  ${valueMax.toLocaleString()}
                </div>
              </div>
            </div>

           
          </div>

          {/* Input boxes */}
          <div className="flex items-center gap-1">
            <div className="flex">
              <input
                type="text"
                value={ `Min.     ${valueMin}`}
                onChange={(e) => Number(e.target.value)}
                tabIndex={-1} 
                readOnly 
                className="w-28  border bg-gray-200 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
              />
            </div>
            <span className="flex w-10 h-full justify-center items-center">-</span>
            <div className="flex">
              <input
                type="text"
                value={`Máx.     ${valueMax}`}
                onChange={(e) => Number(e.target.value)}
                tabIndex={-1} 
                readOnly 
                className="w-28 border bg-gray-200 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
              />
              
            </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};