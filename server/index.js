const app = require("./app"); // the actual Express application
const { connectToDatabase } = require("./utils/db");

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Server running on port ${PORT}`);
});
