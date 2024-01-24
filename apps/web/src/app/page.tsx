export default function Home() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 p-4 backdrop-blur-md bg-zinc-700/25 shadow-md">
        <ul className="flex gap-6 justify-center w-full">
          <li>
            <a
              className="px-4 rounded py-1 hover:bg-zinc-900/25 backdrop-blur-sm transition-all"
              href="#um"
            >
              #um
            </a>
          </li>
          <li>
            <a
              className="px-4 rounded py-1 hover:bg-zinc-900/25 backdrop-blur-sm transition-all"
              href="#dois"
            >
              #dois
            </a>
          </li>
          <li>
            <a
              className="px-4 rounded py-1 hover:bg-zinc-900/25 backdrop-blur-sm transition-all"
              href="#tres"
            >
              #tres
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
