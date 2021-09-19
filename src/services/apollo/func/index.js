import createClient from '../apolloClient';
import GetUser from '../query/me';
import GetUsers from '../query/users';
import CreateUser from '../mutation/createUser';
export async function QueryUser() {
  try {
    const client = await createClient();
    const result = await client.query({
      query: GetUser,
    });
    return result.data;
  } catch (error) {
    return {error: error.message};
  }
}

export async function QueryUsers(facility) {
  try {
    const client = await createClient();
    const result = await client.query({
      query: GetUsers,
      variables: {
        limit: 100,
        filter: {
          facility,
          type: 'facility',
        },
      },
    });
    return result.data;
  } catch (error) {
    return {error: error.message};
  }
}

export async function MutationCreateUser(variables) {
  try {
    const client = await createClient();
    const result = await client.mutate({
      mutation: CreateUser,
      variables,
    });
    const {data} = result;
    const {userResponse} = data;
    if (!userResponse.isSuccess) {
      throw userResponse.message;
    }
  } catch (error) {
    return {error: error.message};
  }
}
