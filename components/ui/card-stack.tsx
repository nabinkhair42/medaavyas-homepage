import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  // Function to generate unique IDs for each item
  const generateUniqueIds = (items: Card[]): Card[] => {
    return items.map((item, index) => ({ ...item, id: item.id + index }));
  };

  const [cards, setCards] = useState<Card[]>(generateUniqueIds(items));

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-72 w-80 md:h-80 md:w-96">
      {cards.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute h-72 w-80 md:h-60 md:w-96 rounded-3xl p-4 shadow-md border flex flex-col justify-between bg-card"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div>
            {item.content}
          </div>
          <div className="flex gap-1">
            <p className="text-nowrap text-primary">
              {item.name}:
            </p>
            <p>
              {item.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
