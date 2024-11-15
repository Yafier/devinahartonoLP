export function GradientSeparator() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent translate-x-[-50%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent translate-x-[50%]" />
    </div>
  );
} 