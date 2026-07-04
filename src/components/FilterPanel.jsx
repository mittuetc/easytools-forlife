
import React, { memo, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { RotateCcw } from 'lucide-react';

export const defaultFilters = {
  startsWith: '',
  endsWith: '',
  contains: '',
  includesLetter: '',
  minLength: '',
  maxLength: '',
};

const FilterPanel = memo(function FilterPanel({ filters, setFilters, onReset }) {
  
  const handleAlphaChange = useCallback((field) => (e) => {
    const val = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
    setFilters((prev) => ({ ...prev, [field]: val }));
  }, [setFilters]);

  const handleNumChange = useCallback((field) => (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val === '') {
      setFilters((prev) => ({ ...prev, [field]: '' }));
      return;
    }
    
    const num = parseInt(val, 10);
    // Enforce 1-15 range
    if (num >= 1 && num <= 15) {
      setFilters((prev) => ({ ...prev, [field]: num.toString() }));
    }
  }, [setFilters]);

  return (
    <div className="bg-muted/40 border border-border/60 rounded-xl p-5 mb-2 shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5">
        
        <div className="space-y-1.5">
          <label htmlFor="filter-starts-with" className="text-xs font-medium text-muted-foreground ml-0.5">
            Words starting with
          </label>
          <Input
            id="filter-starts-with"
            placeholder="e.g. S"
            value={filters.startsWith}
            onChange={handleAlphaChange('startsWith')}
            className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
            autoComplete="off"
            spellCheck="false"
            aria-label="Filter words starting with letter"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="filter-ends-with" className="text-xs font-medium text-muted-foreground ml-0.5">
            Words ending with
          </label>
          <Input
            id="filter-ends-with"
            placeholder="e.g. ING"
            value={filters.endsWith}
            onChange={handleAlphaChange('endsWith')}
            className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
            autoComplete="off"
            spellCheck="false"
            aria-label="Filter words ending with letter"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="filter-contains" className="text-xs font-medium text-muted-foreground ml-0.5">
            Contains letters
          </label>
          <Input
            id="filter-contains"
            placeholder="e.g. ART"
            value={filters.contains}
            onChange={handleAlphaChange('contains')}
            className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
            autoComplete="off"
            spellCheck="false"
            aria-label="Filter words containing sequence"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="filter-includes-letter" className="text-xs font-medium text-muted-foreground ml-0.5">
            Must include
          </label>
          <Input
            id="filter-includes-letter"
            placeholder="e.g. X"
            value={filters.includesLetter}
            onChange={handleAlphaChange('includesLetter')}
            className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
            autoComplete="off"
            spellCheck="false"
            aria-label="Filter words that must include specific letters"
          />
        </div>

        <div className="col-span-2 sm:col-span-3 md:col-span-2 grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="filter-min-length" className="text-xs font-medium text-muted-foreground ml-0.5">
              Min word length
            </label>
            <Input
              id="filter-min-length"
              type="text"
              placeholder="1"
              value={filters.minLength}
              onChange={handleNumChange('minLength')}
              className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
              autoComplete="off"
              aria-label="Minimum word length"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="filter-max-length" className="text-xs font-medium text-muted-foreground ml-0.5">
              Max word length
            </label>
            <Input
              id="filter-max-length"
              type="text"
              placeholder="15"
              value={filters.maxLength}
              onChange={handleNumChange('maxLength')}
              className="h-10 sm:h-9 min-h-[44px] sm:min-h-0 text-sm bg-background/50 focus:bg-background"
              autoComplete="off"
              aria-label="Maximum word length"
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-3 md:col-span-2 flex items-end justify-end">
          <button
            type="button"
            onClick={onReset}
            className="btn-reset-filters px-4 py-2 h-10 sm:h-9 min-h-[44px] sm:min-h-0 rounded-md text-sm sm:text-xs flex items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0"
            aria-label="Reset all filters"
          >
            <RotateCcw className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            Reset Filters
          </button>
        </div>

      </div>
    </div>
  );
});

export default FilterPanel;
