import {gql} from '@apollo/client';
import UserFragment from '../fragment/user';

const CreateUser = gql`{
  mutation createUser($input: UserInput){
    createUser(input: $input){
      isSuccess
      message
      user {
      ...${UserFragment}
    }
    }
  }
}`;
export default CreateUser;
