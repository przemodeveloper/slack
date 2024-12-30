# Slack Clone (React TypeScript)

A simple Slack clone built using React and TypeScript. This application allows users to send messages in channels, create new channels, and interact with others in a team workspace, mimicking some basic Slack functionalities.

## Features

- **User Authentication**: Users can log in to the app (oAuth).
- **Channels**: Users can join existing channels or create new ones.
- **Messages**: Send and receive messages in real-time within channels.
- **Real-Time Updates**: Channels update messages in real-time without needing to refresh the page.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Tech Stack

- **React**: Frontend framework used to build the user interface.
- **TypeScript**: Ensures type safety throughout the codebase.
- **Firebase**: For user authentication and real-time database for storing messages.
- **React Router**: For routing between different views (e.g., login, channels).
- **Redux**: For state management (optional, if you need complex state management).
- **Styled Components**: For styling the components.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>=v14)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/slack-clone.git
    cd slack-clone
    ```

2. Install dependencies:

    ```bash
    npm install
    # or if you prefer yarn
    yarn install
    ```
    
3. Start the development server:

    ```bash
    npm start
    # or if you prefer yarn
    yarn start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.
