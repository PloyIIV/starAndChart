import { useState } from "react";
import "./App.css";
import 'chart.js/auto'
import { Bar, Pie } from "react-chartjs-2";

const jsonData = [
  { City: "Chongqing", Population: "30165500", Country: "China" },
  { City: "Shanghai", Population: "24183300", Country: "China" },
  { City: "Beijing", Population: "21707000", Country: "China" },
  { City: "Istanbul", Population: "15029231", Country: "Turkey" },
  { City: "Karachi", Population: "14910352", Country: "Pakistan" },
  { City: "Dhaka", Population: "14399000", Country: "Bangladesh" },
  { City: "Moscow", Population: "13200000", Country: "Russia" },
  { City: "Guangzhou", Population: "13081000", Country: "China" },
  { City: "Shenzhen", Population: "12528300", Country: "China" },
  { City: "Mumbai", Population: "12528300", Country: "India" },
];

function App() {
  const [count, setCount] = useState("");
  const [star, setStar] = useState("");
  const [number, setNumber] = useState({
    hundred: "",
    seven: "",
    hundredSeven: "",
    three: "",
    hundredFour: "",
  });
  let newArr = [];
  const array1 = [
    ["101", "AAA"],
    ["102", "BBB"],
    ["103", "CCC"],
  ];
  const array2 = [
    ["103", "Singapore"],
    ["102", "Tokyo"],
    ["101", "Bangkok"],
  ];

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNumber({ ...number, [name]: value });
  };
  const calculateNumber = (event) => {
    let result = 0;
    for (let num in number) {
      if (number[num] !== "" && num === "hundred") {
        result = 100 / number.hundred;
        setNumber({
          seven: (7 / result).toFixed(2),
          hundredSeven: (107 / result).toFixed(2),
          three: (3 / result).toFixed(2),
          hundredFour: (104 / result).toFixed(2),
        });
      } else if (number[num] !== "" && num === "seven") {
        result = 7 / number.seven;
        setNumber({
          hundred: (100 / result).toFixed(2),
          hundredSeven: (107 / result).toFixed(2),
          three: (3 / result).toFixed(2),
          hundredFour: (104 / result).toFixed(2),
        });
      } else if (number[num] !== "" && num === "hundredSeven") {
        result = 107 / number.hundredSeven;
        setNumber({
          hundred: (100 / result).toFixed(2),
          seven: (7 / result).toFixed(2),
          three: (3 / result).toFixed(2),
          hundredFour: (104 / result).toFixed(2),
        });
      } else if (number[num] !== "" && num === "three") {
        result = 3 / number.three;
        setNumber({
          hundred: (100 / result).toFixed(2),
          seven: (7 / result).toFixed(2),
          hundredSeven: (107 / result).toFixed(2),
          hundredFour: (104 / result).toFixed(2),
        });
      } else if (number[num] !== "" && num === "hundredFour") {
        result = 104 / number.hundredFour;
        setNumber({
          hundred: (100 / result).toFixed(2),
          seven: (7 / result).toFixed(2),
          hundredSeven: (107 / result).toFixed(2),
          three: (3 / result).toFixed(2),
        });
      }
    }
  };

  const clearNumber = () => {
    setNumber({
      hundred: "",
      seven: "",
      hundredSeven: "",
      three: "",
      hundredFour: "",
    });
  };

  const triangleStar = (count) => {
    let result = "";
    if (count % 2 === 0) {
      for (let i = 0; i < count; i++) {
        for (let j = 0; j <= i; j++) {
          result = result + "*";
        }
        result = result + "\n";
      }
    } else {
      for (let i = count; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
          result = result + "*";
        }
        result = result + "\n";
      }
    }
    setStar(result);
    setCount("");
  };

  const arrayOutput = () => {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i][0] == array2[j][0]) {
          newArr.push([array1[i][0], array1[i][1], array2[j][1]]);
        }
      }
    }
    return newArr;
  };

  arrayOutput();

  return (
    <>
      <div>
        <p>Number of Star:</p>
        <input
          type="number"
          onChange={(event) => setCount(event.target.value)}
          value={count}
        />
        <button
          onClick={() => {
            triangleStar(count);
          }}
        >
          Go
        </button>
        <pre>{star}</pre>
      </div>
      <hr />
      <div>
        <p>ผู้ใช้กรอกได้ 1 ช่อง</p>
        <table>
          <thead>
            <tr>
              <th>100</th>
              <th>7</th>
              <th>107</th>
              <th>3</th>
              <th>104</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  name="hundred"
                  value={number.hundred}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="seven"
                  value={number.seven}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="hundredSeven"
                  value={number.hundredSeven}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="three"
                  value={number.three}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="hundredFour"
                  value={number.hundredFour}
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => calculateNumber()}>Go</button>
        <button onClick={() => clearNumber()}>Clear</button>
      </div>
      <hr />
      <div>
        <table>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>City</th>
          </tr>
          {newArr.map((item, index) => {
            return (
              <tr key={index}>
                {item.map((i, key) => {
                  return <td key={key}>{i}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
      <hr />
      <div className="chart-container">
        <div className="chart-div">
          <Bar data={{
            labels: jsonData.map((data) => data.City),
            datasets: [
              {
                label: "Range by Country",
                data: jsonData.map((data) => data.Population),
                backgroundColor: [
                  `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`,
                  `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`,
                  `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`, 
                ],
                borderColor: [
                  'rgb(50,50,50)'
                ],
                borderRadius: 10,
                borderWidth: 3
              },
            ]
          }} />
        </div>
        <hr />
        <div className="chart-div">
          <Pie data={{
            labels: jsonData.map((data) => data.City),
            datasets: [
              {
                label: "Range by Country",
                data: jsonData.map((data) => data.Population),
                backgroundColor: [
                  `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.7)`,
                  `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.7)`,
                  `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.7)`, 
                ],
                borderColor: [
                  'rgb(50,50,50)'
                ],
                borderRadius: 10,
                borderWidth: 3,
              },
            ]
          }} />
        </div>
      </div>
    </>
  );
}

export default App;
