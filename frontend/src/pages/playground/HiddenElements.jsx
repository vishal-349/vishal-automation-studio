import { useState } from "react";

const HiddenElements = () => {
  const [showButton, setShowButton] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);
  const [removeOverlay, setRemoveOverlay] = useState(false);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">Hidden Elements</h1>

      {/* 1. display none */}
      <section>
        <h2 className="font-semibold mb-2">1. display: none element</h2>

        <button
          className="btn-primary"
          onClick={() => setShowButton(true)}
        >
          Show Hidden Button
        </button>

        <button
          className={`ml-4 btn-secondary ${showButton ? "block" : "hidden"}`}
        >
          I was hidden
        </button>
      </section>

      {/* 2. Conditional render */}
      <section>
        <h2 className="font-semibold mb-2">2. Conditional Rendering</h2>

        <label>
          <input
            type="checkbox"
            onChange={(e) => setShowInput(e.target.checked)}
          />{" "}
          Show Input
        </label>

        {showInput && (
          <input
            className="ml-4 border p-1"
            placeholder="Now you see me"
          />
        )}
      </section>

      {/* 3. Disabled element */}
      <section>
        <h2 className="font-semibold mb-2">3. Disabled Button</h2>

        <button disabled={!enableBtn} className="btn-secondary">
          Submit
        </button>

        <label className="ml-4">
          <input
            type="checkbox"
            onChange={(e) => setEnableBtn(e.target.checked)}
          />{" "}
          Enable button
        </label>
      </section>

      {/* 4. Overlay covered element */}
      <section>
        <h2 className="font-semibold mb-2">4. Covered Element</h2>

        <div className="relative w-48 h-16">
          {!removeOverlay && (
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          )}

          <button className="btn-primary w-full h-full">
            Click Me
          </button>
        </div>

        <button
          className="mt-2 btn-secondary"
          onClick={() => setRemoveOverlay(true)}
        >
          Remove Overlay
        </button>
      </section>
    </div>
  );
};

export default HiddenElements;
