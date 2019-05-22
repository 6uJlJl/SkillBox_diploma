import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
  secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
  callbackUrl: "http://bgatesmf.bget.ru/auth"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

location.assign(authenticationUrl);
