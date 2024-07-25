//////// connecting mongodb /////////////

import mongoose from "mongoose";
import 'dotenv/config.js'



mongoose.connect(`mongodb+srv://${process.env.DATABASE_URL}`

);




export default mongoose





