import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

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
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (username, email, password) => {
  try {
    // create new user
    const newAccount = await account.create(
      ID.unique,
      email,
      password,
      username
    );
    if (!newAccount) throw new Error();

    const avatarUrl = avatars.getInitials(username);

    // sign in the user
    await signIn(email, password);

    // save the new user in the database
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountID: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  // FIXME:FOR LOG OUT
  // account.deleteSession("current");
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};
