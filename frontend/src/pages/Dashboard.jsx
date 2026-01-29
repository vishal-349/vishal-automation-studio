import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🔹 SVG ICONS (inline – lightweight & Cypress friendly)
  const icons = {
    form: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
    checkbox: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
    dropdown: (
      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" />
      </svg>
    ),
    button: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="8" width="16" height="8" rx="2" />
      </svg>
    ),
    dynamic: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3v6l4 2" />
      </svg>
    ),
    alert: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 9v4M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    iframe: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
      </svg>
    ),
    window: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 7h12v12H8z" />
        <path d="M4 5h12v12" />
      </svg>
    ),
    hidden: (
      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3l18 18" />
        <path d="M10.6 10.6a2 2 0 002.8 2.8" />
      </svg>
    ),
    file: (
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" />
      </svg>
    ),
    table: (
      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 10h18M3 14h18M9 4v16M15 4v16" />
      </svg>
    ),
    hover: (
      <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
    scroll: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 5v14" />
        <path d="M8 9l4-4 4 4" />
      </svg>
    ),
    auth: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" />
      </svg>
    ),
    api: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 12h16" />
      </svg>
    ),
    url: (
      <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10 14l2-2 2 2" />
      </svg>
    ),
    tab: (
      <svg className="w-6 h-6 text-violet-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="12" rx="2" />
      </svg>
    ),
    edge: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l4 8-4 12-4-12z" />
      </svg>
    ),
  };

  const cards = [
    { title: "Form Elements",
  icon: "form",
  path: "/playground/forms" },

    {  title: "Checkboxes & Radio",
  icon: "checkbox",
  path: "/playground/checkbox-radio" },

    { title: "Dropdowns (All Types)",
  icon: "dropdown",
  path: "/playground/dropdowns" },

    { title: "Buttons & Click Actions",
    icon: "button",
    path: "/playground/buttons"
  },
    { title: "Dynamic Content & Loaders",
  icon: "dynamic",
  path: "/playground/dynamic-content" },

    { title: "Alerts & Modals",
  icon: "alert",
  path: "/playground/alerts-modals" },

    { title: "Iframes",
  icon: "iframe",
  path: "/playground/iframes" },

    { title: "Multi-Window / Tabs",
  icon: "window",
  path: "/playground/multi-window" },
  
    { title: "Hidden Elements", icon: "hidden" },
    { title: "File Upload & Download", icon: "file" },
    { title: "Tables & Data", icon: "table" },
    { title: "Hover & Tooltips", icon: "hover" },
    { title: "Scrolling & Viewport", icon: "scroll" },
    { title: "Auth & Security UI", icon: "auth" },
    { title: "API Driven UI", icon: "api" },
    { title: "URL & Routing Checks", icon: "url" },
    { title: "Tab Title & Metadata", icon: "tab" },
    { title: "Edge / Tricky Cases", icon: "edge" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">
          Vishal <span className="text-blue-600">Automation</span> Studio
        </h1>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Logout
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 py-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Automation Playground
        </h2>
        <p className="max-w-2xl text-base font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          A hands-on UI playground designed to practice and master real-world
          Cypress automation scenarios — from basic form handling to advanced
          browser-level edge cases.
        </p>
      </section>

      {/* Cards */}
      <section className="px-8 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
  onClick={() => card.path && navigate(card.path)}
  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
>

              <div className="flex items-center gap-3 mb-2">
                {icons[card.icon]}
                <h3 className="text-lg font-semibold text-slate-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Click to practice automation scenarios.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
