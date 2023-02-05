import { Stepper } from "./components/Stepper";

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-700 to-slate-900 px-[5%]">
      <div className="w-full max-w-[600px]">
        <Stepper />
      </div>
    </main>
  );
}

export default App;
