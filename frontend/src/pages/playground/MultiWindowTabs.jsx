import { useState } from "react";

const MultiWindowTabs = () => {
  const [popupRef, setPopupRef] = useState(null);
  const [status, setStatus] = useState("");

  const openPopup = () => {
    const newWindow = window.open(
      "",
      "VASPopup",
      "width=500,height=400"
    );

    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Child Window</title>
          </head>
          <body style="font-family:sans-serif;padding:20px">
            <h2>Child Window</h2>
            <p>This window was opened from parent.</p>
            <button onclick="window.close()">Close Window</button>
          </body>
        </html>
      `);
      setPopupRef(newWindow);
      setStatus("Popup opened ✅");
    }
  };

  const closePopup = () => {
    if (popupRef && !popupRef.closed) {
      popupRef.close();
      setStatus("Popup closed ❌");
    }
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Multi-Window / Tabs</h1>

      {/* 1️⃣ Open Link in New Tab */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. Open Link in New Tab
        </h2>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Open Example.com in new tab
        </a>
      </section>

      {/* 2️⃣ Multiple Links with Same Target */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Multiple Links (_blank)
        </h2>
        <div className="flex gap-4">
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Google
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
          <a
            href="https://stackoverflow.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            StackOverflow
          </a>
        </div>
      </section>

      {/* 3️⃣ window.open() Popup */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Open Window Using window.open()
        </h2>

        <div className="flex gap-4">
          <button
            onClick={openPopup}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Open Popup
          </button>

          <button
            onClick={closePopup}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Close Popup
          </button>
        </div>

        {status && <p>{status}</p>}
      </section>

      {/* 4️⃣ Child Window Status */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Popup Status Check
        </h2>

        <button
          onClick={() =>
            setStatus(
              popupRef && !popupRef.closed
                ? "Popup is still open 🟢"
                : "Popup is closed 🔴"
            )
          }
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Check Popup Status
        </button>
      </section>

      {/* 5️⃣ Notes */}
      <section className="space-y-2 text-sm text-gray-600">
        <p>
          ⚠️ Browsers restrict full control over new tabs.
        </p>
        <p>
          This playground simulates real application behavior.
        </p>
      </section>
    </div>
  );
};

export default MultiWindowTabs;
