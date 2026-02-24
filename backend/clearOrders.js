const mongoose = require("mongoose");

async function clearOrders() {
  await mongoose.connect(
    "***REMOVED***/supplysense?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  try {
    const db = mongoose.connection.db;
    const result = await db.collection("orders").deleteMany({});
    console.log(`Successfully deleted ${result.deletedCount} orders.`);
  } catch (err) {
    console.log("Error clearing orders:", err.message);
  }

  process.exit();
}

clearOrders();
