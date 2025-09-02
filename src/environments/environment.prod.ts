export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: '4603d931ef8244d5bc9fd88f69217415',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  apiTokenEndpoint: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'http://127.0.0.1:4200/login',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative'
  ]
};
