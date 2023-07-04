import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classOne = new ClassRoom(19);
  const classTwo = new ClassRoom(20);
  const classThree = new ClassRoom(34);
  return [classOne, classTwo, classThree];
}
