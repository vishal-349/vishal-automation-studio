import { useState } from "react";

const AlertsModals = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");
  const [promptValue, setPromptValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalResult, setModalResult] = useState("");

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Alerts & Modals</h1>

      {/* 1️⃣ Simple Alert */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Simple Alert</h2>
        <button
          onClick={() => {
            alert("This is a simple alert!");
            setAlertMsg("Alert was shown ✅");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Show Alert
        </button>
        {alertMsg && <p>{alertMsg}</p>}
      </section>

      {/* 2️⃣ Confirm Alert */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Confirm Alert</h2>
        <button
          onClick={() => {
            const result = confirm("Are you sure?");
            setConfirmMsg(
              result ? "User clicked OK ✅" : "User clicked Cancel ❌"
            );
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Show Confirm
        </button>
        {confirmMsg && <p>{confirmMsg}</p>}
      </section>

      {/* 3️⃣ Prompt Alert */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Prompt Alert</h2>
        <button
          onClick={() => {
            const value = prompt("Enter your name:");
            setPromptValue(value || "No input provided");
          }}
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Show Prompt
        </button>
        {promptValue && <p>Input: {promptValue}</p>}
      </section>

      {/* 4️⃣ Custom Modal */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Custom Modal</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Open Modal
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded p-6 w-96 space-y-4">
              <h3 className="text-lg font-semibold">Basic Modal</h3>
              <p>This is a custom modal dialog.</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 5️⃣ Confirmation Modal */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Confirmation Modal</h2>
        <button
          onClick={() => setIsConfirmModalOpen(true)}
          className="px-4 py-2 bg-orange-600 text-white rounded"
        >
          Delete Item
        </button>

        {isConfirmModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded p-6 w-96 space-y-4">
              <h3 className="text-lg font-semibold">Confirm Action</h3>
              <p>Are you sure you want to delete this item?</p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setModalResult("Item deleted successfully 🗑️");
                    setIsConfirmModalOpen(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setModalResult("Delete action cancelled ❌");
                    setIsConfirmModalOpen(false);
                  }}
                  className="px-4 py-2 bg-gray-400 rounded"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {modalResult && <p>{modalResult}</p>}
      </section>

      {/* 6️⃣ Modal with Backdrop Click */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Modal Close on Backdrop Click
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Open Backdrop Modal
        </button>
      </section>
    </div>
  );
};

export default AlertsModals;
