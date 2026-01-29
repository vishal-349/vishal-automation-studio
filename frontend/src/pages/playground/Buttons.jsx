import { useState } from "react";

const Buttons = () => {
  const [basicMsg, setBasicMsg] = useState("");
  const [toggleOn, setToggleOn] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [doubleMsg, setDoubleMsg] = useState("");
  const [rightClickMsg, setRightClickMsg] = useState("");
  const [debounceMsg, setDebounceMsg] = useState("");
  const [apiMsg, setApiMsg] = useState("");

  let debounceLock = false;

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBasicMsg("Form submitted successfully ✅");
    }, 2000);
  };

  const handleDebounceClick = () => {
    if (debounceLock) return;
    debounceLock = true;
    setDebounceMsg("Button clicked once 🚀");

    setTimeout(() => {
      debounceLock = false;
    }, 2000);
  };

  const handleFakeApi = () => {
    setApiMsg("Calling API...");
    setTimeout(() => {
      const success = Math.random() > 0.5;
      setApiMsg(success ? "API Success ✅" : "API Failed ❌");
    }, 2000);
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Buttons & Click Actions</h1>

      {/* 1. Basic Click */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Click Button</h2>
        <button
          data-testid="basic-click-btn"
          onClick={() => setBasicMsg("Button clicked successfully 🎉")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Click Me
        </button>
        {basicMsg && <p className="text-green-600">{basicMsg}</p>}
      </section>

      {/* 2. Toggle Button */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Toggle Button</h2>
        <button
          onClick={() => setToggleOn(!toggleOn)}
          className={`px-4 py-2 rounded text-white ${
            toggleOn ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          {toggleOn ? "ON" : "OFF"}
        </button>
      </section>

      {/* 3. Disabled → Enabled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Disabled to Enabled Button</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          Enable Button
        </label>
        <button
          disabled={!isEnabled}
          className={`px-4 py-2 rounded ${
            isEnabled
              ? "bg-purple-600 text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </section>

      {/* 4. Loading Button */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Loading Button</h2>
        <button
          onClick={handleLoading}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2 disabled:opacity-60"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Submitting..." : "Submit"}
        </button>
      </section>

      {/* 5. Double Click */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Double Click Button</h2>
        <button
          onDoubleClick={() => setDoubleMsg("Double click detected 🔥")}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Double Click Me
        </button>
        {doubleMsg && <p>{doubleMsg}</p>}
      </section>

      {/* 6. Right Click */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Right Click Area</h2>
        <div
          onContextMenu={(e) => {
            e.preventDefault();
            setRightClickMsg("Right click action performed 🖱️");
          }}
          className="w-64 h-24 flex items-center justify-center border border-dashed border-gray-500 cursor-pointer"
        >
          Right Click Here
        </div>
        {rightClickMsg && <p>{rightClickMsg}</p>}
      </section>

      {/* 7. Same Text Buttons */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Multiple Buttons with Same Text
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setBasicMsg("Save Draft clicked")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setBasicMsg("Save & Publish clicked")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setBasicMsg("Save & Exit clicked")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Save
          </button>
        </div>
      </section>

      {/* 8. Debounce Button */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Debounced Click Button</h2>
        <button
          onClick={handleDebounceClick}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Click Rapidly
        </button>
        {debounceMsg && <p>{debounceMsg}</p>}
      </section>

      {/* 9. Fake API Button */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. API-like Action Button</h2>
        <button
          onClick={handleFakeApi}
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Call API
        </button>
        {apiMsg && <p>{apiMsg}</p>}
      </section>
    </div>
  );
};

export default Buttons;
