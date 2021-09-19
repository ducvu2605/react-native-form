import {gql} from '@apollo/client';
import UserFragment from '../fragment/user';
const GetUser = gql`
query me{
  me{
    ...${UserFragment}
  }
}
`;
export default GetUser;
