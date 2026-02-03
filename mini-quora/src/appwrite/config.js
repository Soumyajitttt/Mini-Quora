// import conf from "../conf/conf.js"
// import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

// export class Service{
//     client=new Client();
//     databases
//     bucket

//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.databases=new Databases(this.client);
//         this.bucket=new Storage(this.client);
//     }

//     async createPost({title,slug,content,featuredImage,status,userId}){
//         try {
//             return await this.databases.createDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title, 
//                     content,
//                     featuredImage,
//                     status,
//                     userId
//                 }
//             );
//         } catch (error) {
//             console.error("Error creating post:", error);
//             throw error;
//         }
//     }

//     async updatePost(slug, {title,content,featuredImage,status}){
//         try {
//             return await this.databases.updateDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title, 
//                     content,
//                     featuredImage,
//                     status
//                 }
//             );
//         } catch (error) {
//             console.error("Error updating post:", error);
//             throw error;
//         }
//     }

//     async deletePost(slug){
//         try {
//             await this.databases.deleteDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             );
//             return true
//         } catch (error) {
//             console.error("Error deleting post:", error);
//             throw error;
//             return false
//         }
//     }

//     async getPost(slug){
//         try {
//             return await this.databases.getDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             );
//         } catch (error) {
//             console.error("Error getting post:", error);
//             throw error;
//         }
//     }

//     async getPosts(queries=[Query.equal("status","active")]){
//         try {
//             return await this.databases.listDocuments(  
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 queries
//             );
//         } catch (error) {
//             console.error("Error listing posts:", error);
//             throw error;
//         }
//     }

//     async uploadFile(file){
//         try {
//             await this.bucket.createFile(
//                 conf.appwriteBucketId,
//                 ID.unique(),
//                 file
//             );
//             return true
//         } catch (error) {
//             console.error("Error uploading file:", error);
//             throw error;
//             return false
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             );
//             return true
//         } catch (error) {
//             console.error("Error deleting file:", error);
//             throw error;
//             return false
//         }
//     }

//     getFilePreviewURL(fileId){
//         return this.bucket.files.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         );
//     }

    
// }

// const service = new Service();

// export default service


import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // your Appwrite endpoint
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    this.account = new Account(this.client);
  }

  // -------------------------
  // POSTS (Database)
  // -------------------------

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    return this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug || ID.unique(),
      { title, content, featuredImage, status, userId }
    );
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      { title, content, featuredImage, status }
    );
  }

  async deletePost(slug) {
    return this.databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
  }

  async getPost(slug) {
    return this.databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    return this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries
    );
  }

  // -------------------------
  // STORAGE (Bucket)
  // -------------------------

  async uploadFile(file) {
    return await this.bucket.createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
    );
  }

  async deleteFile(fileId) {
    return await this.bucket.deleteFile(
      conf.appwriteBucketId,
      fileId
    );
  }

  getFilePreviewURL(fileId) {
    return this.bucket.getFileView(
      conf.appwriteBucketId,
      fileId
    );
  }

  // -------------------------
  // ACCOUNT (Optional)
  // -------------------------

  async createAccount(email, password, name) {
    const user = await this.account.create(ID.unique(), email, password, name);
    return user;
  }
}

const service = new Service();
export default service;
