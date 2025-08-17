import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useInView = (offset = 0) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      if (rect.top <= window.innerHeight - offset) {
        setIsInView(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);
  return [ref, isInView] as const;
};

const AboutInfo: React.FC = () => {
  const [missionRef, missionInView] = useInView(100);
  const [philosophyRef, philosophyInView] = useInView(100);

  return (
    <section className="w-full flex flex-col gap-12 mb-12">
      {/* Our Mission */}
      <div
        ref={missionRef as React.RefObject<HTMLDivElement>}
        className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 lg:justify-between transition-all duration-700 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex-1 flex flex-col items-start">
          <h2 className="font-bold text-4xl text-white mb-8">Our Mission</h2>
          <p className="text-white max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img
          src="/dummy-image-section.webp"
          alt="Mission"
          className={`rounded-lg w-[500px] h-[375px] object-cover self-center transition-all duration-700 ${missionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        />
      </div>
      {/* Our Philosophy */}
      <div
        ref={philosophyRef as React.RefObject<HTMLDivElement>}
        className={`flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-40 lg:justify-between transition-all duration-700 ${philosophyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex-1 flex flex-col items-start">
          <h2 className="font-bold text-4xl text-white mb-8">Our Philosophy</h2>
          <p className="text-white max-w-xl mb-4 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Link
            to="/philosophy"
            aria-label="More Info"
            tabIndex={0}
            className="font-semibold px-6 py-2 rounded-full shadow transition-transform transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-white hover:scale-105 hover:shadow-lg hover:bg-indigo-700 active:scale-95"
            style={{ backgroundColor: '#4959e4', color: 'white', fontFamily: 'Inter, sans-serif' }}
          >
            More Info
          </Link>
        </div>
        <img
          src="/dummy-image-section.webp"
          alt="Philosophy"
          className={`rounded-lg w-[500px] h-[375px] object-cover self-center transition-all duration-700 ${philosophyInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        />
      </div>
    </section>
  );
};

export default AboutInfo; 