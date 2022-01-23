import gql from 'graphql-tag';

const adddLyricToSongMution = gql`
  mutation AddLyricToSong($songId: ID!, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default adddLyricToSongMution;
