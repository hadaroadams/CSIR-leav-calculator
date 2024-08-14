import logo from "./../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="flex items-center flex-col">
        <div>
          <img src={logo} alt="CSIR logo" className="sm:w-64 w-44" />
        </div>
      </header>
    </>
  );
}
