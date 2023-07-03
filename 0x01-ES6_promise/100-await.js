import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resp = {
    photo: null,
    user: null,
  };
  try {
    const userInfo = Promise.all([uploadPhoto(), createUser()]);
    return userInfo.then((data) => {
      const [photo, user] = data;
      resp.photo = photo;
      resp.user = user;
      return resp;
    });
  } catch (e) {
    return resp;
  }
}
