import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GAP = 8;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x }) {

  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset
  ];

  const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 flex flex-col items-center justify-center text-center bg-[#222] text-white cursor-pointer overflow-hidden"
      style={{
        width: itemWidth,
        height: itemWidth,
        borderRadius: "50%",
        rotateY
      }}
      whileHover={{ scale: 1.05 }}
    >

      <h3 className="text-lg font-bold">
        {item.name}
      </h3>

      <p className="text-sm opacity-80 mt-2 px-6">
        {item.description}
      </p>

      <span className="text-lime-400 mt-3 text-sm">
        View Project →
      </span>

    </motion.a>
  );
}

export default function Carousel({
  items = [],
  baseWidth = 320,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false
}) {

  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {

    if (!loop) return items;
    if (items.length === 0) return [];

    return [items[items.length - 1], ...items, items[0]];

  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);

  const x = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);

  // hover pause
  useEffect(() => {

    if (!pauseOnHover || !containerRef.current) return;

    const el = containerRef.current;

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };

  }, [pauseOnHover]);

  // autoplay
  useEffect(() => {

    if (!autoplay || itemsForRender.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);

  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, itemsForRender.length]);

  // drag end
  const handleDragEnd = (_, info) => {

    const { offset, velocity } = info;

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
        ? -1
        : 0;

    if (direction === 0) return;

    setPosition(prev => {

      const next = prev + direction;
      const max = itemsForRender.length - 1;

      return Math.max(0, Math.min(next, max));

    });

    useEffect(() => {
  if (!loop) return;

  const max = itemsForRender.length - 1;

  if (position === max) {
    setTimeout(() => {
      setPosition(1);
    }, 300);
  }

  if (position === 0) {
    setTimeout(() => {
      setPosition(items.length);
    }, 300);
  }
}, [position, loop, items.length, itemsForRender.length]);
  };

  // buttons
  const nextSlide = () => {
    setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
  };

  const prevSlide = () => {
    setPosition(prev => Math.max(prev - 1, 0));
  };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
      ? (position - 1 + items.length) % items.length
      : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 border border-[#222] mx-auto"
      style={{
        width: baseWidth,
        height: baseWidth,
        borderRadius: "50%"
      }}
    >

      {/* carousel track */}

      <motion.div
        className="flex"
        drag="x"
        onDragEnd={handleDragEnd}
        style={{
          gap: GAP,
          x,
          perspective: 1000
        }}
        animate={{ x: -(position * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >

        {itemsForRender.map((item, index) => (

          <CarouselItem
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            trackItemOffset={trackItemOffset}
            x={x}
          />

        ))}

      </motion.div>

      {/* buttons */}

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* dots */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">

        {items.map((_, index) => (

          <div
            key={index}
            onClick={() => setPosition(loop ? index + 1 : index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />

        ))}

      </div>

    </div>
  );
}