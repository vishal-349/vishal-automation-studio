import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Upload,
  FolderUp,
  Download,
  FileText,
  Folder,
  ChevronRight,
} from "lucide-react";


const FileManagerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <p
  className="text-sm text-gray-500 mb-3 flex items-center gap-1 cursor-pointer"
  onClick={() => navigate("/playground/file-managers")}
>
  File Managers <ChevronRight size={14} />
  <span className="text-black">{id}</span>
</p>


      {/* Action bar */}
      <div className="flex gap-3 mb-4">
  <button className="btn-primary flex items-center gap-2">
    <Upload size={16} />
    Upload File
  </button>

  <button className="btn-secondary flex items-center gap-2">
    <FolderUp size={16} />
    Upload Folder
  </button>

  <button
    disabled={selected.length === 0}
    className={`btn-primary flex items-center gap-2 ${
      selected.length === 0 &&
      "opacity-50 cursor-not-allowed"
    }`}
  >
    <Download size={16} />
    Download
  </button>
</div>

      {/* Table */}
      <div className="bg-white border rounded">
        {items.length === 0 ? (
          <div className="h-[250px] flex items-center justify-center text-gray-500">
            No records found
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-3"></th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Size</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 flex items-center gap-2">
  {item.type === "folder" ? (
    <Folder size={18} className="text-blue-600" />
  ) : (
    <FileText size={18} className="text-gray-600" />
  )}
  {item.name}
</td>

                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.type}</td>
                  <td className="p-3">{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FileManagerDetails;
