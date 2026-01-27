import { useState } from "react";

const CheckboxRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState("option2");
  const [dynamicOptions] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Checkboxes & Radio Buttons
      </h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        Practice Cypress automation on different checkbox and radio button
        scenarios including default, disabled and dynamic options.
      </p>

      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm space-y-10">
        {/* 🔹 Single Checkbox */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Single Checkbox
          </h2>
          <label className="flex items-center gap-2">
            <input
              data-testid="single-checkbox"
              type="checkbox"
              className="w-4 h-4"
            />
            Accept terms and conditions
          </label>
        </div>

        {/* 🔹 Multiple Checkboxes */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Multiple Checkboxes
          </h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                data-testid="checkbox-option-1"
                type="checkbox"
                className="w-4 h-4"
              />
              Option 1
            </label>

            <label className="flex items-center gap-2">
              <input
                data-testid="checkbox-option-2"
                type="checkbox"
                className="w-4 h-4"
              />
              Option 2
            </label>

            <label className="flex items-center gap-2">
              <input
                data-testid="checkbox-option-3"
                type="checkbox"
                className="w-4 h-4"
              />
              Option 3
            </label>
          </div>
        </div>

        {/* 🔹 Checked by Default */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Checked by Default
          </h2>
          <label className="flex items-center gap-2">
            <input
              data-testid="default-checked-checkbox"
              type="checkbox"
              defaultChecked
              className="w-4 h-4"
            />
            Default checked checkbox
          </label>
        </div>

        {/* 🔹 Disabled Checkbox */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Disabled Checkbox
          </h2>
          <label className="flex items-center gap-2 text-slate-400">
            <input
              data-testid="disabled-checkbox"
              type="checkbox"
              disabled
              className="w-4 h-4"
            />
            Disabled checkbox
          </label>
        </div>

        {/* 🔹 Radio Buttons */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Radio Button Group
          </h2>

          <div className="space-y-2">
            {["option1", "option2", "option3"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  data-testid={`radio-${option}`}
                  type="radio"
                  name="radio-group"
                  value={option}
                  checked={selectedRadio === option}
                  onChange={() => setSelectedRadio(option)}
                  className="w-4 h-4"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* 🔹 Dynamic Radio Options */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Dynamic Radio Options
          </h2>

          <div className="space-y-2">
            {dynamicOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  data-testid={`dynamic-radio-${item}`}
                  type="radio"
                  name="dynamic-radio"
                  className="w-4 h-4"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxRadio;
