import { useState } from "react";

const Iframes = () => {
  const [iframeMessage, setIframeMessage] = useState("");
  const [iframeSrc, setIframeSrc] = useState("about:blank");

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Iframes Playground</h1>

      {/* 1️⃣ Simple Iframe */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Simple Iframe</h2>
        <iframe
          title="simple-iframe"
          className="w-full h-40 border"
          srcDoc={`
            <html>
              <body style="font-family:sans-serif;padding:20px">
                <h3>Simple Iframe Content</h3>
                <p>This content is inside an iframe.</p>
              </body>
            </html>
          `}
        />
      </section>

      {/* 2️⃣ Iframe with Form */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Iframe with Form</h2>
        <iframe
          title="form-iframe"
          className="w-full h-56 border"
          srcDoc={`
            <html>
              <body style="font-family:sans-serif;padding:20px">
                <h3>Login Form (Iframe)</h3>
                <input placeholder="Username" style="display:block;margin-bottom:10px" />
                <input type="password" placeholder="Password" style="display:block;margin-bottom:10px" />
                <button onclick="document.body.insertAdjacentHTML('beforeend','<p>Form Submitted</p>')">
                  Submit
                </button>
              </body>
            </html>
          `}
        />
      </section>

      {/* 3️⃣ Iframe Button Interaction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Iframe Button Interaction
        </h2>

        <button
          onClick={() => setIframeMessage("Message sent to iframe ✅")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Trigger Iframe Action
        </button>

        <iframe
          title="button-iframe"
          className="w-full h-40 border"
          srcDoc={`
            <html>
              <body style="font-family:sans-serif;padding:20px">
                <h3>Waiting for parent action...</h3>
              </body>
            </html>
          `}
        />

        {iframeMessage && <p>{iframeMessage}</p>}
      </section>

      {/* 4️⃣ Dynamic Iframe Source */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Dynamic Iframe Source Change
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() =>
              setIframeSrc(
                `data:text/html,
                <h3 style='font-family:sans-serif'>Page One Loaded</h3>`
              )
            }
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Load Page 1
          </button>

          <button
            onClick={() =>
              setIframeSrc(
                `data:text/html,
                <h3 style='font-family:sans-serif'>Page Two Loaded</h3>`
              )
            }
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Load Page 2
          </button>
        </div>

        <iframe
          title="dynamic-iframe"
          className="w-full h-40 border"
          src={iframeSrc}
        />
      </section>

      {/* 5️⃣ Nested Iframe (Simulated) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. Nested Iframe (Iframe inside Iframe)
        </h2>

        <iframe
          title="outer-iframe"
          className="w-full h-56 border"
          srcDoc={`
            <html>
              <body style="font-family:sans-serif;padding:20px">
                <h3>Outer Iframe</h3>
                <iframe
                  style="width:100%;height:120px;border:1px solid gray"
                  srcdoc="
                    <html>
                      <body style='font-family:sans-serif;padding:10px'>
                        <p>This is INNER iframe</p>
                        <button onclick='document.body.insertAdjacentHTML(\"beforeend\",\"<p>Clicked inside inner iframe</p>\")'>
                          Inner Button
                        </button>
                      </body>
                    </html>
                  "
                ></iframe>
              </body>
            </html>
          `}
        />
      </section>
    </div>
  );
};

export default Iframes;
