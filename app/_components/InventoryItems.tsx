import { getItems, updateItem } from "../_lib/data-service";
import ItemCards, { Item } from "@/app/_components/ItemCards";

export default async function InventoryItems() {
  const items: Item[] = await getItems();
  // const [optimisticItems, setOptimisticItems] = useOptimistic(items, () => {});

  const totalItems = items.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <nav className="border-r midPhone:border-none border-primary-900 pb-8 h-full flex flex-col phone:px-2">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-[1.5rem] text-accent-600 midPhone:text-[1rem]">
          Items
        </div>
        <div className="text-[1.5rem] text-accent-600 midPhone:text-[1rem]">
          Quantity
        </div>
        {/* Empty cell to maintain grid structure */}
      </div>
      <div className="flex-grow">
        <div className="h-[23rem] midPhone:h-[10rem] overflow-y-auto space-y-4 mr-5 midPhone:mr-0">
          {items.map((item) => (
            <ItemCards
              name={item.name}
              quantity={item.quantity}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 text-[1.25rem] midPhone:text-[1rem] grid grid-cols-3 gap-4">
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>
    </nav>
  );
}
