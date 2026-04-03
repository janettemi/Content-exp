export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 w-32 bg-gray-200 rounded mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Skeleton */}
        <div className="aspect-square bg-gray-200 rounded-3xl" />

        {/* Content Skeleton */}
        <div className="space-y-6">
          <div className="h-10 w-3/4 bg-gray-200 rounded" />
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-2/3 bg-gray-100 rounded" />
          </div>
          <div className="h-12 w-40 bg-gray-200 rounded-xl pt-10" />
        </div>
      </div>
    </div>
  );
}