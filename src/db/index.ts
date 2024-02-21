import { Database } from "bun:sqlite";

const db = new Database("mydb.sqllite");
const query = db.query("select 'Hello world' as message;");
console.log(query.get())
query.get() // => { message: "Hello world" }
