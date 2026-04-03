export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl 
      focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
      transition-all placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
}