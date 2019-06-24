import Unsplash from 'unsplash-js';
import { loadState } from './localestorage';

function firstLoadFromUnsplash (addPhotos) {

  const unsplash = new Unsplash({
    applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
    secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
    callbackUrl: "http://bgatesmf.bget.ru/auth"
  });

  const loadedState = loadState();
  const code = (loadedState) ? loadedState.code : location.search.split('code=')[1];

  if ( code ) {

    try {
      if ( loadedState ) {
        unsplash.auth.setBearerToken(loadedState.bearerToken);
        addPhotos (loadedState.listOfPhotos, loadedState.counter-1, code, unsplash); }
      else {
        unsplash.auth.userAuthentication(code)
          .then(res => res.json() )
          .then(json => {
            unsplash.auth.setBearerToken(json.access_token);
            unsplash.photos.listPhotos(1, 10, "latest")
              .then(res => res.json())
              .then(json => { addPhotos ( json, 1, code, unsplash )} );
          });
      };
    } catch (e) { console.log("При загрузке фотографий произошла ошибка: "+e);  };

  } else console.log("Не удалось получить данные от Unsplash, попробуйте перезагрузить страницу или зайдите попозже...");
}

export default firstLoadFromUnsplash;
