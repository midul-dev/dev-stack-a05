import { Suspense } from "react";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import type { IStacks } from "./Types/types";

const stacksPromise = async () : Promise<IStacks[]>  => {
  const res = await fetch ("/data.json")
  const data = await res.json()
  return data;
}
const fullStacks = stacksPromise()

function App() {
  

  return (
    <>
      
<Nav />
<Hero />
<Suspense fallback={<h1>Loading .....</h1>} >
<Explore fullStacks ={fullStacks} />
</Suspense>
<Footer />
      
    </>
  )
}

export default App
