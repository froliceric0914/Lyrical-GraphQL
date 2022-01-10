import gql from 'graphql-tag'; //data query helper

//use template string and gql helper to form the query data to be executed
export default gql`
  {
    songs {
      id
      title
    }
  }
`;
