
export default  function Header() {
    
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("render header");


  return (
    <>
      <header className="flex flex-col items-center justify-between bg-slate-100 p-4">
        <h1 className="text-4xl text-black font-bold">Pizza Shop Finder</h1>
      </header>
    </>
  );
}
