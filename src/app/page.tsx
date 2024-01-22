// Home.tsx
import DynamicHeader from "./components/DynamicHeader";

export default function Home() {
  return (
<div className="flex min-h-screen items-center justify-center">
  <div className="flex flex-col items-center" style={{ maxWidth: '650px' }}>
    <div className="main-container flex items-center justify-center">
      <DynamicHeader finalText="Studio 256" intervalMs={125} />
      <span className="typed-cursor text-2xl">|</span>
    </div>
    {/* Use 'vh' units for top margin to be relative to the viewport height */}
    <div className="info-container text-center" style={{ marginTop: '-45vh' }}>
      <p>hello@studio-256.com</p>
    </div>
  </div>
</div>

  );
}
