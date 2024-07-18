export default function Page() {
  return (
    <>
      <div>
        <div>拼手气红包</div>
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className=" rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300   sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>BNB Chain</option>
              <option>Ethereum</option>
              <option>Polygon</option>
              <option>opBNB</option>
            </select>
          </div>
        </div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">总金额</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              value={0}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-right text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>BNB</option>
                <option>WBNB</option>
                <option>USTD</option>
              </select>
            </div>
          </div>
        </div>
        <div className="m-md flex justify-between align-middle">
          <label>网络</label>
          <div>选择网络哦</div>
        </div>
        <div className="flex justify-between border align-middle">
          <label>红包数量</label>
          <div>
            <input type="text" value={1} />
          </div>
        </div>
        <div className="flex justify-between align-middle">
          <label>总金额</label>
          <div>
            <input type="text" value={1} />
          </div>
        </div>
      </div>
    </>
  );
}
