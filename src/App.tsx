function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white lg:py-4 lg:px-4 lg:pl-14 rounded-3xl max-w-80 lg:max-w-4xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4 flex flex-col justify-center px-6 pb-10 lg:pb-0 lg:px-0 order-last">
            <p className="text-black font-bold text-4xl lg:text-6xl pb-2 lg:pb-4 tracking-tighter">
              Stay updated!
            </p>
            <p className="text-black font-medium">
              Join 60,000+ product managers receiving montly updates on:
            </p>
            <div className="pt-2">
              <ul className="text-black font-medium space-y-2">
                <li className="flex gap-3 items-center">
                  <img src="icon-list.svg" alt="list" /> Product discovery and
                  building what matters
                </li>
                <li className="flex gap-3 items-center">
                  <img src="icon-list.svg" alt="list" />
                  Measuring to ensure updates are a success
                </li>
                <li className="flex gap-3 items-center">
                  <img src="icon-list.svg" alt="list" />
                  And much more!
                </li>
              </ul>
            </div>
            <div className="space-y-1.5 pt-4">
              <label
                htmlFor="email"
                className="block font-bold text-black text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                className="rounded-md w-full bg-white border-2 border-gray-200 px-5 py-3 text-sm focus:border-black focus:ring-2 focus:ring-black"
                placeholder="email@company.com"
              />
            </div>
            <button className="bg-blue-950 transition-colors duration-300 ease-in-out rounded-lg px-4 lg:px-8 py-3 font-semibold hover:bg-gradient-to-r from-rose-400 to-orange-300">
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="place-self-center lg:place-self-end lg:order-last">
            <img
              src="illustration-sign-up-desktop.svg"
              alt="illustration"
              className="hidden lg:block"
            />
            <img
              src="illustration-sign-up-mobile.svg"
              alt="illustration"
              className="block lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
