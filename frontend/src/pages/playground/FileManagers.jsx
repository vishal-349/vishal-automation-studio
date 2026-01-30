import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Folder, Plus } from "lucide-react";


const FileManagers = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const [managers, setManagers] = useState([
    {
      id: "default",
      name: "Default File Manager",
      createdBy: "Vishal",
      createdOn: "Jan 13, 2026",
    },
  ]);

  const createManager = () => {
    if (!name.trim()) return;

    setManagers((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        createdBy: "Vishal",
        createdOn: new Date().toDateString(),
      },
    ]);

    setName("");
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          File / Folder Upload & Download
        </h1>

        <button
  className="btn-primary flex items-center gap-2"
  onClick={() => setShowModal(true)}
>
  <Plus size={16} />
  Create File Manager
</button>

      </div>

      <div className="bg-white border rounded">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Created By</th>
              <th className="p-3 text-left">Created On</th>
            </tr>
          </thead>

          <tbody>
            {managers.map((m) => (
              <tr
                key={m.id}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  navigate(`/playground/file-managers/${m.id}`)
                }
              >
                <td className="p-3 font-medium flex items-center gap-2">
  <Folder size={18} className="text-blue-600" />
  {m.name}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[400px]">
            <h2 className="text-lg font-semibold mb-4">
              Create File Manager
            </h2>

            <input
              className="border w-full p-2 mb-4"
              placeholder="File Manager Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                className="btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn-primary"
                onClick={createManager}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileManagers;
