import "./App.css";
import { useState } from "react";

function App() {
  const [Data, setData] = useState();

  const [fontSize, setfontSize] = useState(16);
  const [Bold, setBold] = useState();
  const [isClicked, setIsClicked] = useState(1);
  const [Italic, setItalic] = useState("normal");
  const [Flag, setFlag] = useState(1);
  const [FontColor, setFontColor] = useState();
  const [Family, setFamily] = useState();

  function handleChange(event) {
    let inputVal = event.target.value;
    setData(inputVal);
  }

  let handleIncrease = () => {
    setfontSize(fontSize + 2);
  };

  let handleDecrease = () => {
    setfontSize(fontSize - 2);
  };

  let handleFontWeight = () => {
    if (isClicked == 1) {
      setBold("bold");
      setIsClicked(0);
    } else {
      setBold("normal");
      setIsClicked(1);
    }
  };

  let handleFontStyle = (e) => {
    console.log(Italic);
    const { value } = e.target


    setItalic(Italic === "normal" ? value : "normal")
  };

  let handleColorChange = (event) => {
    let colorInput = event.target.value;
    setFontColor(colorInput);
  };

  let handleFontFamily = (event) => {
    let fontFamilyInput = event.target.value;
    setFamily(fontFamilyInput);
  }



  return (
    <div id="wrapper" className="bg-slate-400 w-full h-screen flex">
      <div
        id="left"
        className="w-1/4 bg-slate-50 flex items-center border-r-2 border-slate-500"
      >
        <div
          id="features"
          className="w-full h-3/4 bg-blue-300 p-2 flex  flex-col gap-4"
        >
          <p className="text-center"> Text Editor </p>
          <div id="font-size " className="border-2 p-1 rounded-md">
            <p> Font Size: eifjnwefjnweifjwe</p>



            {["+", "-"].map((item) => {
              return (
                <button
                  onClick={()=>setfontSize(item == "+" ? fontSize + 2 : fontSize - 2 )}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4  mr-1 rounded-lg"
                >
                  {item}
                </button>
              )
            })}




          </div>
          <div id="font-weight " className="border-2 p-1 rounded-md">
            <p> Font Weight: </p>
            <button
              onClick={(e) => handleFontWeight(e)}
              value={"bold"}
              className="bg-blue-500 hover:bg-blue-700 text-white  p-1 px-4  mr-1 rounded-lg"
            >
              Bold
            </button>

            <button
              onClick={(e) => setItalic(Italic === "normal" ? e.target.value : "normal")}
              value={"italic"}
              className="bg-blue-500 hover:bg-blue-700 text-white  p-1 px-4 rounded-lg"
            >
              italic
            </button>
          </div>
          <div id="font-family " className="border-2 p-1 rounded-md">
            <p> Font Style: </p>
            <select onClick={(e) => handleFontFamily(e)}>
              <option value={""}> Choose Font </option>
              <option value={"Times New Roman"}> Times New Roman </option>
              <option value={"Courier New"}> Courier New </option>
            </select>
          </div>
          <div id="font-color " className="border-2 p-1 rounded-md">
            <p> Font Color: </p>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"blue"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 mt-1  mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"red"}
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-4 mt-1 mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"yellow"}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-1 px-4 mt-1  mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"green"}
              className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 px-4 mt-1 mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"black"}
              className="bg-black hover:bg-black text-white font-bold p-1 px-4 mt-1  mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"orange"}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-1 px-4 mt-1 mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"pink"}
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold p-1 px-4 mt-1 mr-1 rounded-lg"
            >
              .
            </button>
            <button
              onClick={(e) => handleColorChange(e)}
              value={"gray"}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-1 px-4 mt-1 mr-1 rounded-lg"
            >
              .
            </button>
          </div>
        </div>
      </div>
      <div id="right" className="flex flex-col p-2 w-full gap-1">
        <div id="input">
          <p> Input Text Here... </p>
          <textarea
            onChange={handleChange}
            rows={5}
            cols={50}
            className="w-100 bg-white p-1 border-solid border-2 border-slate-500 rounded-md"
            placeholder="Type something here..."
          />
        </div>
        <div
          id="display"
          className="w-full h-2/3 bg-white  border-solid border-2 border-slate-500 rounded-md"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: `${Bold}`,
            fontStyle: `${Italic}`,
            color: `${FontColor}`,
            fontFamily: `${Family}`
          }}
        >
          {Data}
        </div>
        <button
          onClick={window.print}
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default App;
