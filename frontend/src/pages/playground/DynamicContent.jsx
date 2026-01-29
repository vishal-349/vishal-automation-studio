import { useEffect, useState } from "react";

const DynamicContent = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [count, setCount] = useState(3);
  const [randomQuote, setRandomQuote] = useState("");

  const quotes = [
    "Automation is the future 🚀",
    "QA is not testing, it's quality mindset 🧠",
    "Code today, automate tomorrow 💻",
    "Bugs are opportunities 🐛",
    "Cypress makes testing fun 😎",
  ];

  // Initial fake API call
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Rahul Sharma" },
        { id: 2, name: "Priya Singh" },
        { id: 3, name: "Aman Verma" },
      ]);
      setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleLoadMore = () => {
    setLoadMoreLoading(true);

    setTimeout(() => {
      const newUsers = [
        { id: count + 1, name: `User ${count + 1}` },
        { id: count + 2, name: `User ${count + 2}` },
        { id: count + 3, name: `User ${count + 3}` },
      ];

      setUsers((prev) => [...prev, ...newUsers]);
      setCount(count + 3);
      setLoadMoreLoading(false);
    }, 1500);
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Dynamic Content & Loaders</h1>

      {/* 1️⃣ Skeleton Loader */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Skeleton Loader</h2>

        {loading ? (
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4"></div>
          </div>
        ) : (
          <p className="text-green-600">
            Data loaded successfully ✅
          </p>
        )}
      </section>

      {/* 2️⃣ Spinner Loader */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Spinner Loader</h2>

        {loading ? (
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <p className="text-blue-600">Spinner finished 🎯</p>
        )}
      </section>

      {/* 3️⃣ Dynamic Users List */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Dynamic User List</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="px-3 py-2 border rounded w-fit"
              >
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 4️⃣ Load More Button */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Load More (Infinite-like)</h2>

        <button
          onClick={handleLoadMore}
          disabled={loadMoreLoading}
          className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-60"
        >
          {loadMoreLoading ? "Loading..." : "Load More"}
        </button>
      </section>

      {/* 5️⃣ Random Dynamic Quote */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Random Dynamic Content</h2>

        <button
          onClick={() =>
            setRandomQuote(
              quotes[Math.floor(Math.random() * quotes.length)]
            )
          }
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Generate Quote
        </button>

        {randomQuote && (
          <p className="mt-2 text-lg font-medium">{randomQuote}</p>
        )}
      </section>
    </div>
  );
};

export default DynamicContent;
