export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 font-mono text-primary">
          <span className="animate-pulse">$</span>
          <span>Loading</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>
      </div>
    </div>
  );
}
