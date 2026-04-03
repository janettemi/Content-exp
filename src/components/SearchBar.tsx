'use client';

import { SearchIcon, XIcon } from "./Icon";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 group">
      {/* Search Icon Decorator */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
      </div>

      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for products..."
        className="pl-11 pr-12 text-black" // Extra padding to make room for icons
      />

      {/* Clear Button - only shows when there is text */}
      {value && (
        <Button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <XIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}