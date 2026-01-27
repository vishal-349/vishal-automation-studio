import { useEffect, useState } from "react";

/* ===================== NESTED ITEM ===================== */
const NestedItem = ({
  label,
  level = 1,
  selectedItem,
  setSelectedItem,
  closeDropdown,
}) => {
  const [open, setOpen] = useState(false);

  // 🔥 LAST LEVEL (SELECTABLE)
  if (level > 5) {
    return (
      <li
        data-testid={`leaf-${label}`}
        onClick={() => {
          setSelectedItem(label);
          closeDropdown();
        }}
        className={`pl-6 py-1 text-sm cursor-pointer rounded
          ${
            selectedItem === label
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "text-slate-700 hover:bg-slate-100"
          }`}
      >
        • {label}
      </li>
    );
  }

  return (
    <li className="pl-4">
      <div
        data-testid={`nested-${label}-level-${level}`}
        onClick={() => setOpen(!open)}
        className="cursor-pointer py-1 font-medium text-slate-800 hover:text-blue-600"
      >
        {open ? "▾" : "▸"} {label}
      </div>

      {open && (
        <ul className="border-l ml-3">
          {Array.from({ length: 5 }).map((_, idx) => (
            <NestedItem
              key={idx}
              label={`${label}.${idx + 1}`}
              level={level + 1}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              closeDropdown={closeDropdown}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

/* ===================== MAIN COMPONENT ===================== */
const Dropdowns = () => {
  /* ---------- Native / Multi ---------- */
  /* nothing special */

  /* ---------- Custom Dropdown ---------- */
  const [customOpen, setCustomOpen] = useState(false);
  const [customValue, setCustomValue] = useState("Select option");

  /* ---------- Async Dropdown ---------- */
  const [asyncOptions, setAsyncOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAsyncOptions(["India", "USA", "Germany", "Japan"]);
      setLoading(false);
    }, 1500);
  }, []);

  /* ---------- Searchable Dropdown ---------- */
  const companies = [
    "Google","Microsoft","Amazon","Meta","Netflix","Apple",
    "Infosys","TCS","Wipro","Accenture","Cognizant","Capgemini",
    "IBM","Oracle","Salesforce","Adobe","PayPal","Uber",
    "Airbnb","Flipkart","Zomato","Swiggy","Stripe"
  ];
  const [search, setSearch] = useState("");

  /* ---------- Nested Dropdown ---------- */
  const [nestedOpen, setNestedOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredCompanies = companies.filter(c =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Dropdowns Playground
      </h1>

      <p className="text-slate-600 mb-8 max-w-2xl">
        Practice Cypress automation on native, custom, async, searchable
        and deeply nested dropdowns used in real-world applications.
      </p>

      <div className="max-w-4xl bg-white p-8 rounded-xl shadow-sm space-y-12">

        {/* ================================================= */}
        {/* 1️⃣ Native Select */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Native Select</h2>
          <select
            data-testid="native-select"
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select language</option>
            <option value="js">JavaScript</option>
            <option value="ts">TypeScript</option>
            <option value="py">Python</option>
          </select>
        </div>

        {/* ================================================= */}
        {/* 2️⃣ Multi Select */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Multi Select</h2>
          <select
            data-testid="multi-select"
            multiple
            className="w-full px-4 py-2 border rounded-lg h-32"
          >
            <option value="ui">UI Testing</option>
            <option value="api">API Testing</option>
            <option value="performance">Performance</option>
            <option value="security">Security</option>
          </select>
        </div>

        {/* ================================================= */}
        {/* 3️⃣ Custom Dropdown */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Custom Dropdown</h2>

          <div
            data-testid="custom-dropdown"
            className="border rounded-lg px-4 py-2 cursor-pointer"
            onClick={() => setCustomOpen(!customOpen)}
          >
            {customValue}
          </div>

          {customOpen && (
            <ul className="border rounded-lg mt-2">
              {["Option A","Option B","Option C"].map(item => (
                <li
                  key={item}
                  data-testid={`custom-${item}`}
                  onClick={() => {
                    setCustomValue(item);
                    setCustomOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ================================================= */}
        {/* 4️⃣ Async Dropdown */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Async Dropdown</h2>

          {loading ? (
            <p data-testid="async-loader">Loading options...</p>
          ) : (
            <select
              data-testid="async-select"
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select country</option>
              {asyncOptions.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
        </div>

        {/* ================================================= */}
        {/* 5️⃣ Searchable Dropdown (SHOW ONLY ON TYPE) */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Searchable Dropdown (IT Companies)
          </h2>

          <input
            data-testid="search-input"
            type="text"
            placeholder="Try: Google, Infosys, Amazon, Microsoft..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-2"
          />

          {search && (
            <ul
              data-testid="search-results"
              className="border rounded-lg max-h-60 overflow-y-auto"
            >
              {filteredCompanies.length ? (
                filteredCompanies.map(company => (
                  <li
                    key={company}
                    data-testid={`company-${company}`}
                    className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                  >
                    {company}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-slate-500">
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>

        {/* ================================================= */}
        {/* 6️⃣ Nested Accordion Dropdown (5 LEVELS) */}
        {/* ================================================= */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Nested Accordion Dropdown (5 Levels)
          </h2>

          <div
            data-testid="nested-trigger"
            onClick={() => setNestedOpen(!nestedOpen)}
            className="border rounded-lg px-4 py-2 cursor-pointer"
          >
            {selectedItem
              ? `Selected: ${selectedItem}`
              : "Select from nested dropdown"}
          </div>

          {nestedOpen && (
            <div className="mt-3 border rounded-lg p-4 max-h-96 overflow-y-auto">
              <ul>
                {Array.from({ length: 20 }).map((_, i) => (
                  <NestedItem
                    key={i}
                    label={`Item ${i + 1}`}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    closeDropdown={() => setNestedOpen(false)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dropdowns;
