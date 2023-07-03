import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    const userInfo = Promise.all([uploadPhoto(), createUser()]);
    userInfo.then((data) => {
      const [photo, user] = data;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    });
  } catch (e) {
    console.log('Signup system offline');
  }
}
