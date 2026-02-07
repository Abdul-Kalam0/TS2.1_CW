import "./styles.css";

export default function App() {
  let id: number | string;
  id = 10;
  id = "one";

  //This is Union
  let numberOrString: (string | number)[] = [1, "three", 2, "four"];
  let mixedArray: (boolean | string | number)[] = [1, 2, "three"];

  //this is Intersection
  type TypeA = { name: string };
  type TypeB = { rollNo: number };

  const objectA: TypeA = {
    name: "abdul",
  };

  const objectB: TypeB = {
    rollNo: 1,
  };

  type TypeC = TypeA & TypeB;

  const person: TypeC = {
    name: "abdul",
    rollNo: 1,
  };

  type TypeD = TypeC & {
    city: string;
  };

  const details: TypeD = {
    name: "abdul",
    rollNo: 123,
    city: "bareilly",
  };

  //This is Inference property
  let num = 10;
  // num = "string"; X

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
