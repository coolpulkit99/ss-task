<h1>Task 1</h1>

The folder named data contains the convertedd file and the script used to convert the same.

<h1>Task 2 & 3</h1>
To setup for this task run npm install to install dependencies for the project in folder "/step1" and "/step2".Also set up the required environment variables like MONGO_URI etc.
This task is divided in two due to error in post request while file uploading.
step1:has the UI for uploading the file and handles the request.
step2:parses the given csv file and renders it into a table.The table currently rendered is pure html but libraries can be used to draw dynamic tables.Also it handles the connection to the mongo db database.

The schema of the database is:

<code>
const personSchema = new Schema({
    id: { type: String, required: true },
    phones: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: Number, required: true },
    username: { type: String, required: true },
    isActive: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
</code>