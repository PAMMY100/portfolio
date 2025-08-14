'use client'

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { languages } from '@/constant';
import Image from 'next/image';

const LanguageIcons = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const icons = useRef<HTMLDivElement[]>([]);
  const magnifierRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 1, ease: 'power2.inOut' }
      });

      icons.current.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { opacity: 0, y: 50, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.7)'
          }
        );

        tl.to(
          icon,
          {
            y: '-=20',
            rotation: index % 2 === 0 ? 5 : -5,
            stagger: 0.1
          },
          index * 0.1
        );
      });

      const handleMouseMove = (e: MouseEvent) => {
        const container = containerRef.current;
        const magnifier = magnifierRef.current;
        if (!container || !magnifier) return;

        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Floating icons effect
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        icons.current.forEach((icon, index) => {
          const strength = 0.03;
          const offsetX = mouseX * strength * (index % 3);
          const offsetY = mouseY * strength * (index % 3);

          gsap.to(icon, {
            duration: 1.5,
            x: offsetX,
            y: offsetY,
            overwrite: 'auto'
          });
        });

        // Magnifier effect
        const zoom = 2; // zoom factor
        const bgX = ((e.clientX - rect.left) / rect.width) * 100;
        const bgY = ((e.clientY - rect.top) / rect.height) * 100;

        magnifier.style.left = `${e.clientX}px`;
        magnifier.style.top = `${e.clientY}px`;
        magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
        magnifier.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-fit grid grid-cols-3 gap-3 z-20 cursor-none" // hide cursor
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Magnifier Circle */}
      {isHovering && (
        <div
          ref={magnifierRef}
          className="pointer-events-none fixed z-50 w-32 h-32 rounded-full border-2 border-[#93b0da] shadow-lg transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: `url(${window.location.href})`, // We'll replace this in a sec
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      {languages.map((lang, index) => (
        <div
          key={lang.name}
          ref={(el) => {
            if (el) icons.current[index] = el;
          }}
          className="flex flex-col items-center justify-center cursor-none opacity-0"
        >
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300 hover:scale-150"
            style={{ backgroundColor: 'white' }}
          >
            <Image src={lang.icon} alt={lang.name} width={40} height={40} />
          </div>
          <span className="mt-2 text-xs font-medium text-gray-300">
            {lang.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LanguageIcons;
