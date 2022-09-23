const items = [
  {
    id: 1,
    href: "https://i.imgur.com/9MmDW8D.png",
    title: "Decision Makers at all Inc 5000 companies",
    emoji: "👨‍💼",
  },
  {
    id: 2,
    href: "https://i.imgur.com/9MmDW8D.png",
    title: "Decision Makers at companies in the news this week",
    emoji: "🗞️",
  },
  {
    id: 3,
    href: "https://i.imgur.com/9MmDW8D.png",
    title: "Decision Makers at Y Combinator Companies",
    emoji: "💡",
  },
];

export default function Leads() {
  return (
    <div className="mx-8 my-8">
      <div className="">
        <div className=" max-w-7xl px-4  sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Leads
            </h2>
          </div>
        </div>
      </div>
      <ul role="list" className="space-y-3 rounded mx-6">
        {items.map((item) => (
          <a target="_blank" href={item.href}>
            <li
              key={item.id}
              className="bg-white my-2 text-black overflow-hidden rounded-md px-6 py-4 shadow hover:bg-blue-100 transition ease-in-out duration-75"
            >
              <span className="mr-4 text-xl">{item.emoji} </span>{" "}
              <span> {item.title}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
