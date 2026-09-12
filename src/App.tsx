import Nav from "./components/Nav";
import type { IStacks } from "./Types/types";

const stacksPromise = async () : Promise<IStacks[]>  => {
  const res = await fetch ("/public/data.json")
  const data = await res.json()
  return data;
}
stacksPromise()

function App() {
  

  return (
    <>
      
<Nav />
      
    </>
  )
}

export default App
