"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryBtnHandler = (id: number): void => {
    setActiveCategory(id);
  };

  const foodMenu = [
    {
      id: 1,
      name: "Hamburger",
      price: 200,
      category: { id: 1, name: "Snack" },
      image: "image1.png",
    },
    {
      id: 2,
      name: "French Fries",
      price: 120,
      category: { id: 1, name: "Snack" },
      image: "image1.png",
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      price: 180,
      category: { id: 1, name: "Snack" },
      image: "image1.png",
    },
    {
      id: 4,
      name: "Grilled Chicken",
      price: 350,
      category: { id: 2, name: "Main Course" },
      image: "image1.png",
    },
    {
      id: 5,
      name: "Beef Steak",
      price: 550,
      category: { id: 2, name: "Main Course" },
      image: "image1.png",
    },
    {
      id: 8,
      name: "Coca Cola",
      price: 80,
      category: { id: 3, name: "Beverage" },
      image: "image1.png",
    },
  ];

  const categories = [
    { id: 1, name: "Snack" },
    { id: 2, name: "Main Course" },
    { id: 3, name: "Beverage" },
  ];

  const filteredMenu =
    activeCategory === 0
      ? foodMenu
      : foodMenu.filter((menu) => menu.category.id === activeCategory);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-medium">Food Menu</h1>

      <div className="grid grid-cols-3 gap-3">
        {/* CATEGORY LIST */}
        <div className="col-span-1 space-y-2">
          <Card
            onClick={() => categoryBtnHandler(0)}
            className={`p-3 cursor-pointer ${
              activeCategory === 0 && "bg-accent"
            }`}
          >
            All
          </Card>

          {categories.map((category) => (
            <Card
              key={category.id}
              onClick={() => categoryBtnHandler(category.id)}
              className={`p-3 cursor-pointer ${
                activeCategory === category.id && "bg-accent"
              }`}
            >
              {category.name}
            </Card>
          ))}
        </div>

        {/* FOOD ITEMS */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMenu.map((menu) => (
              <Card key={menu.id} className="p-3 space-y-2">
                <div className="relative w-full h-32">
                  <Image
                    src="/menu/assets/image1.png"
                    fill
                    alt={menu.name}
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain rounded-md"
                  />
                </div>

                <Badge variant="outline">{menu.category.name}</Badge>

                <h2 className="font-semibold text-sm">{menu.name}</h2>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    MMK {menu.price}
                  </p>
                  <Button className={"hover:bg-transparent hover:border hover:text-black hover:border-black active:scale-95 cursor-pointer"}>Add</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
