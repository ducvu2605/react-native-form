import {gql} from '@apollo/client';
import UserFragment from '../fragment/user';

const GetUsers = gql`{
  query users($filter: UserFilter, $limit: Int){
    users(filter:$filter , limit:$limit){
      ...${UserFragment}
    }
  }
}`;
export default GetUsers;
