export default function Loading() {
  return (
    <div className="min-h-[300px] flex items-center justify-center bg-white">
      <div className="loader-elegant">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-text-elegant">Loading...</div>
      </div>
    </div>
  );
}