function GridSquare({ children }) {
  return (
    <div className="w-full h-full p-5 border rounded-md border-light/20">
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <main className="container flex flex-col pt-24">
      <div className="grid h-[75vh] grid-cols-4 grid-rows-3 gap-2">
        <div className="col-span-2 row-span-2 ">
          <GridSquare>
            <div className="flex flex-col justify-between w-full h-full">
              <h1 className="mb-10 text-6xl font-bold md:text-7xl">
                Lorem ipsum dolor sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                accusantium.
              </p>
            </div>
          </GridSquare>
        </div>

        <div className="col-span-2 row-span-3">
          <GridSquare></GridSquare>
        </div>
        <div className="">
          <GridSquare></GridSquare>
        </div>
        <div className="">
          <GridSquare></GridSquare>
        </div>
      </div>
    </main>
  )
}
