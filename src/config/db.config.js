const mongoose = require('mongoose');

if (mongoose.connection.readyState === 0) {
  mongoose.connect(
    'mongodb+srv://osmanaziz012:zimmq14QByfPAHFG@cluster0.sfhjoq5.mongodb.net/?retryWrites=true&w=majority'
  );
}
