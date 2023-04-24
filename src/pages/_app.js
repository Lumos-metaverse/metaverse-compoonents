import "@/styles/globals.css";

import { useState } from "react";

function AppLockPassword({ children }) {
  let pass = ":)";

  const [password, setPassword] = useState("");

  return (
    <div>
      {password === pass ? (
        children
      ) : (
        <div>
          <h1>Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <AppLockPassword>
      <Component {...pageProps} />
    </AppLockPassword>
  );
}
