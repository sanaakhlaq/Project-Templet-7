export default function PickDropComponent() {
    return (
      <div className="bg-gray-50 p-6 rounded-lg flex justify-between items-center shadow-lg">
        {/* Pick-Up Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-800">Pick-Up</h4>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm text-gray-500">Locations</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500">Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
  
        {/* Swap Button */}
        <button className="bg-primary text-white p-4 rounded-full mx-4 flex items-center justify-center shadow-md transform hover:scale-105 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v6h6M20 20v-6h-6M4 10l6-6m10 10l-6 6"
            />
          </svg>
        </button>
  
        {/* Drop-Off Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-800">Drop-Off</h4>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm text-gray-500">Locations</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500">Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  