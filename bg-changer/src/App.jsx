import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setcolor("red");
            }} //onClick need function so we jus added a callBack function into it and use setColor prop and give value to it
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setcolor("Green");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setcolor("Yellow");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setcolor("white");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => {
              setcolor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
