const NoImage = () => {
  return (
    <div
      className="relative aspect-video w-full bg-card/50 flex items-center justify-center rounded-md border-2 border-dashed border-border"
      aria-hidden="true"
    >
      <div className="text-center p-4 text-muted">
        <svg
          className="h-12 w-12 mx-auto mb-2 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm font-medium">No preview available</p>
        <p className="text-xs opacity-70">Add an image to showcase this project</p>
      </div>
    </div>
  );
};

export default NoImage;