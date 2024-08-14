import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="bg-[#E3F3FD] min-h-[100vh] flex flex-col  items-center w-full p-[50px] pt-5">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
