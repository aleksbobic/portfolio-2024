interface ItemListProps {
  items: { title: string; subtitle: string; date: string }[];
}

export function ItemList(props: ItemListProps) {
  return (
    <div className="w-full h-full gap-3 flex flex-col overflow-y-scroll pr-4">
      {props &&
        props.items &&
        props.items.map((item) => (
          <div className="w-full dark:bg-gray-700/15 bg-gray-200 p-4 rounded-xl">
            <h4 className="text-xl font-bold dark:text-gray-200 text-gray-800 font-archivo">
              {item.title}
            </h4>
            <p className="text-sm font-semibold text-gray-500 font-poppins">
              {item.subtitle}
            </p>
            <p className="text-sm font-semibold text-gray-500 font-poppins">
              {item.date}
            </p>
          </div>
        ))}
    </div>
  );
}
