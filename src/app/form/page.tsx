import Form from 'next/form';

export default function Page() {
  return (
    <Form action="/form/pizza-search" className="flex flex-col items-center space-y-4 p-4">
      <input 
        className="border border-gray-300 rounded-lg p-2 text-black w-full max-w-md" 
        name="query" 
        placeholder="Enter your query"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </Form>
  );
}
