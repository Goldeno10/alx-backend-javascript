import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userInfo = Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return userInfo;
}
