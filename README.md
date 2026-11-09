# Taskify

A simple task list application built with React and TypeScript.

## About The Project

Taskify is an unfinished learning project. Submitting the input adds a task to React state, but the task-list component currently renders an empty container. Task display, completion, deletion and persistence are not implemented. Each task is modeled with an id, a label, and a completion flag.

This project was built following a Roadside Coder tutorial (per the repository's original description), and originally used Create React App. The build and tests now use Vite and Vitest.

### Built With

- React 18
- TypeScript
- Vite 8 / Vitest 5

## Getting Started

### Prerequisites

- Node.js 26 LTS (`nvm use`)
- pnpm 12.18.0 (recorded in `packageManager`)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Dyrits/TASKIFY.git
   ```

2. Install dependencies:

   ```sh
   pnpm install --frozen-lockfile
   ```

3. Start the development server:

   ```sh
   pnpm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Other scripts

- `pnpm build` builds the app for production into the `build` folder.
- `pnpm test` launches the test runner in interactive watch mode.

`pnpm test:run` runs the regression tests once, and `pnpm typecheck` checks TypeScript. Tests preserve the current input/submission behavior and explicitly assert the unfinished task list, rather than claiming a complete task manager.

The Vite build keeps the `build/` output and development port 3000. It targets modern browsers; CRA's previous Browserslist configuration no longer applies. No deployment is configured by this change.

## License

No license file is present in this repository.
