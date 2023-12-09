# Full Moon Matrimony
[Visit the Site](https://amazing-cocada-b859c5.netlify.app)

[Backend](https://github.com/nazmussaadatcse/full-moon-matrimony-server)

Full Moon Matrimony is a comprehensive matrimonial platform built on the MERN (MongoDB, Express.js, React, Node.js) stack. It facilitates partner searching, user authentication, and premium membership features, ensuring a secure and efficient matchmaking experience.

## Features

- **User Authentication**: Secure registration and login using Firebase Authentication.
- **Advanced Partner Search**: Detailed partner search based on gender, occupation, and permanent place.
- **Premium Membership**: Request admin approval for additional features and privileges.
- **Admin Approval Workflow**: Admins manage and approve premium membership requests.
- **Contact Information Requests**: Non-premium users can request contact info for a fee, with admin approval for privacy.
- **JWT Token-based Security**: Ensures secure authentication and authorization processes.

## Technologies Used

- **Frontend**: React, Material UI, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Authorization**: JWT Tokens

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- Firebase account for Authentication setup

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/full-moon-matrimony.git
    cd full-moon-matrimony
    ```

2. **Install Dependencies**
    - Backend:
    ```bash
    cd backend
    npm install
    ```

    - Frontend:
    ```bash
    cd frontend
    npm install
    ```

3. **Configuration**
    - Set up Firebase Authentication and MongoDB credentials in the project.

4. **Running the Application**
    - Backend Server:
    ```bash
    cd backend
    npm nodemon index.js
    ```

    - Frontend:
    ```bash
    cd frontend
    npm run dev
    ```

5. **Access**
    - Open a browser and go to `http://localhost:5173` to access Full Moon Matrimony.


## Acknowledgments

- This project uses Firebase Authentication for user management.
- Material UI and Tailwind CSS for frontend design.
