type propsType = {
    label: string;
    type: string;
    id: string;
    value?: string;
  };
  
  export default function FormInput(prop: propsType) {
    return (
      <div>
        <label htmlFor="email" className="block text-sm mb-2 text-black">
          {prop.label}
        </label>
        <div className="relative">
          <input
            type={prop.type}
            id={prop.id}
            name={prop.id}
            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
            defaultValue={prop.value}
          />
        </div>
      </div>
    );
  }