export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-3 sm:pb-12">
        <main className="mt-8 sm:mt-12">
          <div className="mx-auto max-w-7xl">
            <div className="px-4 text-center mx-8">
              <div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Tools to sell smarter
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  The quality of your inputs changes the quality of your
                  outputs. Level up your sales game with better leads, smarter
                  strategy, and more meaningful messaging.
                </p>
                <p className="mt-8 text-base font-semibold text-gray-300 sm:mt-10">
                  Made by
                </p>
                <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 text-center inline-block">
                  <div className="flex flex-wrap items-start justify-between text-center">
                    <div className="flex justify-center px-1 text-center">
                      <div className="flex text-center items-center text-center">
                        <div>
                          <img
                            className="inline-block h-12 w-12 rounded-full"
                            src="https://i.imgur.com/OCbkirh.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900 ">
                            Jakob Greenfeld
                          </p>
                          <p className="text-sm font-medium text-gray-300 ">
                            Master Scraper & Hacker
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center px-1">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-12 w-12 rounded-full"
                            src="https://i.imgur.com/n1aiPAq.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900 ">
                            Ryan Doyle
                          </p>
                          <p className="text-sm font-medium text-gray-300 ">
                            Startup Sales Rep
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
