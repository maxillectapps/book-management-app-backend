# Book Management App Backend

Welcome to the **Book Management App Backend**! This project is built using **NestJS**, **TypeORM**, and **MySQL**. Follow the instructions below to set up the project locally and get it running smoothly.

## Prerequisites

To run this project, you will need the following installed on your machine:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **MySQL** (or compatible database like MariaDB)
- **Git**

## Setup Instructions

### 1. Clone the Repository

To start, clone this repository to your local machine:

```bash
git clone https://github.com/maxillectapps/book-management-app-backend.git
cd book-management-app-backend
```

### 2. Install Dependencies

Once you are inside the project directory, install the required dependencies:

```bash
npm install
```

or if you prefer **yarn**:

```bash
yarn install
```

### 3. Environment Configuration

Create a `.env` file at the root of the project to store your environment variables. Use `.env.example` as a reference.

Create a new file `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=book_management_db
PORT=5500
```

- **DB_HOST**: The host where your database is running (e.g., `localhost`).
- **DB_PORT**: Port number for your database (default is `3306` for MySQL).
- **DB_USERNAME**: Your database username.
- **DB_PASSWORD**: Your database password.
- **DB_DATABASE**: The name of your database.
- **PORT**: The port for the NestJS application to run (default is `5500`).

### 4. Database Setup

You need to set up a MySQL database for this project.

1. Start MySQL and create a database called `book_management_db`:

   ```sql
   CREATE DATABASE book_management_db;
   ```

2. Make sure the credentials in your `.env` file match your MySQL settings.

3. Run TypeORM migrations to set up the database schema:

   ```bash
   npm run typeorm migration:run
   ```

### 5. Run the Application

You can run the application in **development** mode or **production** mode.

#### Development Mode

To start the server in development mode:

```bash
npm run start:dev
```

The server will start on the port specified in the `.env` file (e.g., `http://localhost:5500`).

#### Production Mode

First, build the project:

```bash
npm run build
```

Then start the server:

```bash
npm run start:prod
```

### 6. API Endpoints

The following endpoints are available in this backend:

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| POST   | `/books`     | Add a new book                |
| GET    | `/books`     | Get the list of all books     |
| GET    | `/books/:id` | Get a specific book by its ID |
| PUT    | `/books/:id` | Update a book's information   |
| DELETE | `/books/:id` | Delete a book by its ID       |

### 7. Common Issues

- **Database Connection Error**: Ensure that your database credentials in the `.env` file are correct and that MySQL is running.
- **Port in Use**: Make sure the port specified in the `.env` file (default `3000`) is available and not used by another process.

### 8. Testing the Application

You can use tools like **Postman** or **cURL** to test the API endpoints. For example, to get all books:

```bash
curl http://localhost:5500/books
```

### License

This project is licensed under the MIT License.

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!
