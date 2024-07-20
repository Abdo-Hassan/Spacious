import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.abdo.aora",
  projectID: "6698f89f0029aff71194",
  databaseId: "6698fb24003a030ee1f2",
  userCollectionId: "6698fb7100323447bc14",
  videoCollectionId: "6698fce30028053140e6",
  storageId: "669b964b0014f01a12d7",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectID) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

// Register User
export const createUser = (username, email, password) => {
  account.create(ID.unique(), email, password, username).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
