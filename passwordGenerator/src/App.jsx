import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8); // for password length
  const [numAllowed, setNumAllowed] = useState(false); // for adding num in password
  const [charAllowed, setCharAllowed] = useState(false); // for adding char in password

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?/.,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback (() => {
    passwordRef.current?.select() // for the selecting the value in the input field
    passwordRef.current?.setSelectionRange(0, 15) //for selecting character in range 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length,numAllowed,charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-cyan-400">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-gray-600"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="outline-none bg-blue-500 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {setNumAllowed((prev)=> !prev)}} 
               />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {setCharAllowed((prev)=> !prev)}} 
               />
              <label>Characater</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
