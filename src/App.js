import "./App.css";
import { useState } from "react";

function App() {
  const [Data, setData] = useState();
  const [fontSize, setfontSize] = useState(16);
  const [Bold, setBold] = useState("normal");
  const [Italic, setItalic] = useState("normal");
  const [color, setColor] = useState();
  const [Family, setFamily] = useState();

  function handleChange(event) {
    let inputVal = event.target.value;
    setData(inputVal);
  }

  return (
    <div id="wrapper" className="bg-slate-400 w-full h-screen flex">
      <div id="left" className="w-1/4 bg-slate-50 flex items-center border-r-2 border-slate-500">
        <div id="features" className="w-full h-full bg-blue-300 p-2 flex  flex-col gap-4">
          <p className="text-center font-serif font-bold text-lg"> Text Editor </p>
          <div id="font-size " className="border-2 p-1 rounded-md">
            <p className="mb-1"> Font Size: {fontSize}</p>
            {["+", "-"].map((item) => {
              return (
                <button
                  onClick={() =>
                    setfontSize(item == "+" ? fontSize + 2 : fontSize - 2)
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4  mr-1 rounded-lg"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div id="font-weight " className="border-2 p-1 rounded-md">
            <p className="mb-1"> Font Styles: </p>
            <button
              onClick={(e) =>
                setBold(Bold === "normal" ? e.target.value : "normal")
              }
              value={"bold"}
              className="bg-blue-500 hover:bg-blue-700 text-white  p-1 px-4  mr-1 rounded-lg"
            >
              Bold
            </button>
            <button onClick={(e) => setItalic(Italic === "normal" ? e.target.value : "normal")} value={"italic"} className="bg-blue-500 hover:bg-blue-700 text-white  p-1 px-4 rounded-lg">
              italic
            </button>
          </div>
          <div id="font-family " className="border-2 p-1 rounded-md">
            <p className="mb-1"> Font Family: </p>
            <select onClick={(e) => setFamily(e.target.value)}>              
              <option value={""}> Choose Font </option>
              <option value={"Times New Roman"}> Times New Roman </option>
              <option value={"Courier New"}> Courier New </option>
              <option value={"Cursive"}> Cursive </option>
              <option value={"Monospace"}> Monospace </option>
            </select>
          </div>
          <div id="font-color " className="border-2 p-1 rounded-md">
            <p className="mb-1"> Font Color: </p>
            {[ "blue", "red", "green", "pink", "yellow", "black", "orange", "grey",].map((item) => {
              return (
                <button onClick={(e) => setColor(e.target.value)} value={item} style={{ backgroundColor: `${ item }`, color: `${ item }`}} className="py-4 px-7  mr-1 mb-1 rounded-lg"></button>
              );
            })}
          </div>
        </div>
      </div>
      <div id="right" className="flex flex-col p-2 w-full gap-1">
        <div id="input">
          <p className="mb-1"> Input Text Here... </p>
          <textarea onChange={handleChange} rows={5} cols={50} className="w-100 bg-white p-1 border-solid border-2 border-slate-500 rounded-md" placeholder="Type something here..."/> </div>
        <div id="display" className="w-full h-2/3 bg-white  border-solid border-2 border-slate-500 rounded-md" style={{ fontSize: `${fontSize}px`, fontWeight: `${Bold}`, fontStyle: `${Italic}`, color: color, fontFamily: `${Family}`}}
        >{Data}</div>
        <button
          onClick={window.print}
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Print</button>
      </div>
    </div>
  );
}
export default App;