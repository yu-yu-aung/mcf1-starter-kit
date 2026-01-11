import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  const foodMenu = [
    {
      id: 1,
      name: "Hamburger",
      price: 200,
      category: {
        id: 1,
        name: "Snack",
        description: "Light snacks and quick bites",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 2,
      name: "French Fries",
      price: 120,
      category: {
        id: 1,
        name: "Snack",
        description: "Light snacks and quick bites",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      price: 180,
      category: {
        id: 1,
        name: "Snack",
        description: "Light snacks and quick bites",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 4,
      name: "Grilled Chicken",
      price: 350,
      category: {
        id: 2,
        name: "Main Course",
        description: "Full meals and entrees",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 5,
      name: "Beef Steak",
      price: 550,
      category: {
        id: 2,
        name: "Main Course",
        description: "Full meals and entrees",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 6,
      name: "Chicken Biryani",
      price: 300,
      category: {
        id: 2,
        name: "Main Course",
        description: "Full meals and entrees",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 7,
      name: "Vegetable Pasta",
      price: 280,
      category: {
        id: 2,
        name: "Main Course",
        description: "Full meals and entrees",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 8,
      name: "Coca Cola",
      price: 80,
      category: {
        id: 3,
        name: "Beverage",
        description: "Drinks and refreshments",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 9,
      name: "Orange Juice",
      price: 100,
      category: {
        id: 3,
        name: "Beverage",
        description: "Drinks and refreshments",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
    {
      id: 10,
      name: "Coffee",
      price: 150,
      category: {
        id: 3,
        name: "Beverage",
        description: "Drinks and refreshments",
        created_at: "2026-01-11",
      },
      image: "image1.png",
      created_at: "2026-01-11",
    },
  ];

  const categories = [
  {
    id: 1,
    name: "Snack",
    description: "Light snacks and quick bites",
    created_at: "2026-01-11"
  },
  {
    id: 2,
    name: "Main Course",
    description: "Full meals and entrees",
    created_at: "2026-01-11"
  },
  {
    id: 3,
    name: "Beverage",
    description: "Drinks and refreshments",
    created_at: "2026-01-11"
  }
];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Food Menu</h1>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          {categories.map((category) => (
            <Card key={category.id} className="p-3 last:mb-0 hover:bg-accent cursor-pointer">
            {category.name}
          </Card>
          ))}
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {foodMenu.map((menu) => (
              <Card key={menu.id} className="p-3 space-y-2">
                <div className="relative w-full h-32">
                  {/* <Image
                src={`/assets/${menu.image}`}
                fill
                className="object-cover rounded-md"
                alt={menu.name}
              /> */}
                </div>

                <Badge variant="outline">{menu.category.name}</Badge>

                <h2 className="font-semibold text-sm">{menu.name}</h2>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      MMK {menu.price}
                    </p>
                  </div>
                  <div>
                    <Button className={"cursor-pointer hover:bg-transparent hover:text-black hover:border-black duration-100 active:scale-95"}>Add</Button>
                  </div>
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
