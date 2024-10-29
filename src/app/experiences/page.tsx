export default function Experiences() {
  return (
    <>
      <main className="flex-col justify-center items-center min-h-screen font-dm pt-16 px-4">
        <h1 className="font-heading text-3xl md:text-4xl pt-2">
          Places that helped me <span className="text-main">grow</span>
        </h1>
        <p className="pt-5 text-medium max-w-3xl leading-relaxed">
          Each place has its own unique blend of fun, sadness, lessons, and stories to tell. But the common thread is that they all <span className="border-b-4 border-main">helped</span> me become a{" "}
          <span className="border-b-4 border-main">better person</span>.
        </p>
        <div className="flex flex-col container my-6">
          <ol className="relative border-s-2 border-main">
            <li className="ms-6 p-5">
              <span className="absolute mt-1.5 -start-2 rounded-full w-3 h-3 bg-main" />
              <div className="mb-4 space-y-1">
                <h2 className="text-xl font-bold font-plus">{"Bangkit"}</h2>
                <p className="text-sm">{"asdasd"}</p>
                <p className="text-sm">{"asdasdas"}</p>
              </div>
              <div className="mb-4 space-y-1">
                <p className="font-semibold text-base mb-3">Key Responsibilities</p>
                <p>{"asdasdas"}</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-base mb-1">Technology Used:</p>
                <span className="text-sm">{"asdsadas"}</span>
              </div>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}
