import auth from "solid-auth-client";

async function getWebId() {
  /* 1. Check if we've already got the user's WebID and access to their Pod: */
  let session = await auth.currentSession();
  if (session) {
    return session.webId;
  }

  async function getIdentityProvider() {
    //hardcoded for now
    return "https://solidweb.me";
  }

  /* 2. User has not logged in; ask for their Identity Provider: */
  // Implement `getIdentityProvider` to get a string with the user's Identity Provider (e.g.
  // `https://inrupt.net` or `https://solid.community`) using a method of your choice.
  const identityProvider = await getIdentityProvider();

  /* 3. Initiate the login process - this will redirect the user to their Identity Provider: */
  auth.login(identityProvider);
}
