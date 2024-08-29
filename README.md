# LEDO

LEDO is a powerful and flexible task and workspace management system built with modern web technologies. Designed for efficiency and ease of use, LEDO helps teams manage their tasks and workspaces seamlessly.

## Features

- **Task Management**: Organize tasks with ease, track progress, and ensure nothing falls through the cracks.
- **Workspace Management**: Manage multiple workspaces and collaborate effectively across teams.
- **User Authentication**: Secure user authentication and management with NextAuth.js.
- **Real-time Updates**: Leveraging Convex for real-time data synchronization across all connected clients.
- **Responsive Design**: Fully responsive design powered by Tailwind CSS and Shadcn/UI for a seamless experience across devices.

## Tech Stack

- **Next.js**: A powerful React framework for server-side rendering and building scalable web applications.
- **Convex**: Real-time backend as a service that powers dynamic data synchronization.
- **NextAuth.js**: Complete authentication solution for Next.js applications.
- **Tailwind CSS**: A utility-first CSS framework for crafting custom designs quickly.
- **Shadcn/UI**: A component library built on Tailwind CSS, offering a set of customizable and accessible UI components.

## Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/LEDO.git
    cd LEDO
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    CONVEX_URL=your_convex_url
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage

- **Tasks:** Create, update, and manage tasks in your workspaces.
- **Workspaces:** Switch between different workspaces to organize your projects.
- **User Profiles:** Manage your profile and settings through the user dashboard.
