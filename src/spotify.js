export const authorize = "https://accounts.spotify.com/authorize";
const redirect = "http://clones-by-nati-spotify.herokuapp.com/";

const clientId = "319eb0a5a66b42bfb9a6b2b19b221691";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const url = `${authorize}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
  return window.location.hash.substring(1).split("&")[0].split("=")[1];
};
