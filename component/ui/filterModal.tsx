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

  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
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
      onChange?.([Math.min(value, valueMax), valueMax]);
    } else {
      onChange?.([valueMin, Math.max(value, valueMin)]);
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
        onChange?.([Math.min(value, valueMax), valueMax]);
      } else if (isDraggingMax) {
        onChange?.([valueMin, Math.max(value, valueMin)]);
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

  return (
    <div className="relative bg-[#F5F7FA] rounded-2xl border-[#D9D9D9] p-6 mb-5 ">
      {/* Brillo sutil en la parte superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#F5F7FA]"></div>
      
      {/* Title */}
      <h3 className="font-semibold text-[#1A2B49] text-base mb-4 flex items-center justify-between">
        {title}
        <span className="text-[#1A2B49]/60 text-sm">⌄</span>
      </h3>

      {/* CHECKBOX */}
      {type === "checkbox" &&
        options.map((opt) => (
          <label
            key={opt.value}
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

      {/* RADIO */}
      {type === "radio" &&
        options.map((opt) => (
          <label
            key={opt.value}
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
          <div className="relative pt-6 pb-8">
            {/* Track background */}
            <div
              ref={trackRef}
              onClick={handleTrackClick}
              className="relative h-2 bg-linear-to-r from-gray-200/60 to-gray-300/60 rounded-full cursor-pointer"
            >
              {/* Active range */}
              <div
                className="absolute h-full bg-linear-to-r from-[#003F7F] to-[#0059B3] rounded-full transition-all duration-150"
                style={{
                  left: `${getPercentage(valueMin)}%`,
                  width: `${getPercentage(valueMax) - getPercentage(valueMin)}%`,
                }}
              ></div>

              {/* Min thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-[#17243b] cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                style={{ left: `${getPercentage(valueMin)}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsDraggingMin(true);
                }}
              >
                {/* Valor flotante min */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#17243b] text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  ${valueMin.toLocaleString()}
                </div>
              </div>

              {/* Max thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-[#17243b] cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                style={{ left: `${getPercentage(valueMax)}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsDraggingMax(true);
                }}
              >
                {/* Valor flotante max */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#17243b] text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  ${valueMax.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Labels min/max en los extremos */}
            <div className="flex justify-between text-xs text-[#6B7A90] mt-2 px-1">
              <span>${min.toLocaleString()}</span>
              <span>${max.toLocaleString()}</span>
            </div>
          </div>

          {/* Input boxes más compactos y elegantes */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1">
              <input
                type="number"
                value={valueMin}
                min={min}
                max={valueMax}
                onChange={(e) =>
                  onChange?.([Number(e.target.value), valueMax])
                }
                className="w-full border border-[#E5E7EB] bg-white rounded-lg px-3 py-2 text-sm text-[#17243b] font-medium focus:outline-none focus:ring-2 focus:ring-[#17243b]/20 focus:border-[#17243b] transition-all"
                placeholder="Min"
              />
            </div>
            
            <span className="text-[#6B7A90] text-sm">—</span>
            
            <div className="flex-1">
              <input
                type="number"
                value={valueMax}
                min={valueMin}
                max={max}
                onChange={(e) =>
                  onChange?.([valueMin, Number(e.target.value)])
                }
                className="w-full border border-white/40 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-[#1A2B49] font-medium focus:outline-none focus:ring-2 focus:ring-[#003F7F]/30 focus:border-[#003F7F]/50 transition-all"
                placeholder="Máx"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};