# URL Shortener Backend

A robust and scalable URL shortening service built with Node.js, Express, and MongoDB. This service allows users to convert long URLs into short, manageable links that can be easily shared.

## Features

- Shorten long URLs to compact, unique identifiers
- Redirect users from short URLs to original destinations
- RESTful API architecture
- MongoDB database for persistent storage
- Input validation and error handling
- CORS support for cross-origin requests

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Dependencies**:
  - `cors`: Cross-origin resource sharing
  - `dotenv`: Environment variable management
  - `express`: Web framework
  - `mongoose`: MongoDB object modeling
  - `shortid`: Unique ID generation

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd url-shortener-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=your_port_number
   MONGODB_URI=your_mongodb_connection_string
   ```

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── app.js        # Express app configuration
│   └── server.js     # Server entry point
├── .env              # Environment variables
├── .gitignore       # Git ignore rules
└── package.json     # Project dependencies
```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The API will be available at `http://localhost:<PORT>`

## API Endpoints

- `POST /api/shorten` - Create a short URL
  - Request body: `{ "longUrl": "https://example.com/very/long/url" }`
  - Response: `{ "shortUrl": "http://domain/abc123" }`

- `GET /:shortId` - Redirect to the original URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Luqman

---

For any questions or issues, please open an issue in the repository. 