import { useEffect, useState } from 'react';

const RootLayout = () => {
  return (
    <div className="App">
      <ParallaxSection />
      {/* You can add more content below */}
      <div className="flex items-center justify-center w-screen h-screen">
        <p>Scroll down to see the effect.</p>
      </div>
    </div>
  )
}

export default RootLayout



const ParallaxSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-300 bg-center bg-cover"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundImage: "url('/image.png')",
        }}
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white md:text-6xl">Parallax Effect</h1>
      </div>
    </div>
  );
};

