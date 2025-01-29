import { PizzaShop } from "../form/pizza-search/page";

const handleClick = async () => {
  "use server";
  const json = await import("../../../mock-pizza-shops.json");
  const result: { data: PizzaShop[] } = await JSON.parse(JSON.stringify(json));
  console.log(result.data);
  console.log(typeof window);
};

const Page = () => {
  return (
    <div>
      <h1>Server Action Example</h1>
      <button className="pl-4" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Page;
