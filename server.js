import { express } from 'express';
import { cors } from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

/**
 * CONFIGURE .env file FOR PRODUCTION
 */
if (process.env.NODE_ENV !== 'production') {
  import dotenv from 'dotenv';
  dotenv.config();
}

/**
 * EXPRESS APPLICATION
 */
// Instantiate express application
const app = express();
// Set server port to env.PORT or 5000 otherwise
const port = process.env.PORT || 5000;
// Process the incomming request's body tags and convert them to json
app.use(bodyParser.json());
// Make sure urls contain the right characters
app.use(bodyParser.urlencoded({ extended: true }));
// Cross Origin Requests Setup
app.use(cors());

// If server is in production, serve build folder from client, which incldues all the static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve for any url
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Listen to port 5000 & handle error
app.lister(port, error => {
  if (error) throw error;
  console.log('Server running on port ', +port);
});
