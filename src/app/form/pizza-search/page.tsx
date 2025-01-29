import { FC, Suspense } from "react";

export type PizzaShop = {
  id: number;
  name: string;
  address: string;
  phone: string;
  rating: number;
};

const getSearchResults = async (query: string) => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const json = await import("../../../../mock-pizza-shops.json");
  const result: { data: PizzaShop[] } = await JSON.parse(JSON.stringify(json));
  return result.data.filter((shop: PizzaShop) =>
    shop.name.toLowerCase().includes(query.toLowerCase())
  );
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  return (
    <div>
      Search results for: <strong>{query}</strong>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}

const SearchResults: FC<{ query?: string }> = async ({ query }) => {
  const searchResults = await getSearchResults(query ?? "");
  console.log("render search results");
  return (
    <div className="flex flex-col items-center p-4">
      {searchResults.map((shop: PizzaShop) => (
        <div
          key={shop.id}
          className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md hover:bg-gray-100"
        >
          <h2 className="text-xl font-bold mb-2 text-black">{shop.name}</h2>
          <p className="text-gray-700 mb-1">{shop.address}</p>
          <p className="text-gray-700 mb-1">{shop.phone}</p>
          <p className="text-gray-700">Rating: {shop.rating}</p>
        </div>
      ))}
    </div>
  );
};
