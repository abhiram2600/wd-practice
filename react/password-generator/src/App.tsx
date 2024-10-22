import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState<string>("");

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) chars += "0123456789";
    if (charsAllowed) chars += "!@#$%^&*_+";
    let result = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length + 1);
      result += chars.charAt(idx);
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charsAllowed]);

  const copyPassword = (): void => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="container">
      <h3>password generator</h3>
      <div>
        <input
          type={"text"}
          contentEditable={false}
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button onClick={copyPassword}>copy</button>
      </div>

      <input
        type="range"
        name="length"
        id="length"
        min={0}
        max={20}
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />
      <label htmlFor="length">Length:{length}</label>
      <input
        type="checkbox"
        name="numbersAllowed"
        id="numbersAllowed"
        checked={numbersAllowed}
        onChange={() => {
          setNumbersAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numbersAllowed">Numbers Allowed</label>
      <input
        type="checkbox"
        name="charactersAllowed"
        id="charactersAllowed"
        checked={charsAllowed}
        onChange={() => {
          setCharsAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="charactersAllowed">Chars Allowed</label>
    </div>
  );
}

export default App;
