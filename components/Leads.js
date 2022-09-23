import Head from "next/head";
const items = [
  {
    id: 1,
    href: "https://doyle.gumroad.com/l/tiewc?wanted=true",
    title: "Decision Makers at all Inc 5000 companies (28k Leads)",
    price: "$49",
    emoji: "👨‍💼",
  },
  {
    id: 2,
    href: "https://doyle.gumroad.com/l/aqjoxl?wanted=true",
    title: "Decision Makers at companies in the news this week (1k+ Leads)",
    price: "$29",
    emoji: "🗞️",
  },
  {
    id: 3,
    href: "https://doyle.gumroad.com/l/rfmht?wanted=true",
    title: "Decision Makers at Y Combinator Companies",
    price: "$39",
    emoji: "💡",
  },
  {
    id: 4,
    href: "https://doyle.gumroad.com/l/tuupj?wanted=true",
    title: "Decision Makers at TechStar Companies",
    price: "$39",
    emoji: "⭐",
  },
  {
    id: 5,
    href: "https://doyle.gumroad.com/l/hawzz?wanted=true",
    title: "All 4 lead lists, bundle discount (normally $156)",
    price: "$99",
    emoji: "💡",
  },
];

export default function Leads() {
  return (
    <div className="mx-8 mt-8 mb-24">
      <Head>
        <script src="https://gumroad.com/js/gumroad.js"></script>
      </Head>
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
          <a href={item.href}>
            <li
              key={item.id}
              className="grid grid-cols-6 relative bg-white my-2 text-black overflow-hidden rounded-md px-6 py-4 shadow hover:bg-blue-100 transition ease-in-out duration-75"
            >
              <span className=" col-span-1 mr-1 sm:mr-4 text-xl">
                {item.emoji}{" "}
              </span>{" "}
              <span className="col-span-4 mr-16 text-sm md:text-lg">
                {" "}
                {item.title}
              </span>
              <span className="absolute col-span-1 font-bold right-0 mr-4 mt-8 sm:mt-6">
                {" "}
                {item.price}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
