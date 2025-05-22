import { getDb } from "./connection.js";
//import { ObjectId } from "mongodb";

export async function findAllComments() {
    const db = getDb();
    const comments = await db.collection("comments").find().toArray();
    return comments;
}

export async function findCommentsByUserEmail(userEmail) {
    const db = getDb();
    const commentsByEmail = await db.collection("comments").find({"email" : userEmail}).toArray();
    return commentsByEmail;
}