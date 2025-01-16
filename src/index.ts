import { usersArray, User } from './users';
import { usersInfoArray, UserInfo } from './userInfo';

interface UserWithPosition {
  name: string;
  position: string;
  age: number;
  gender: string;
}

function getUsersJobPositions(usersArray: User[]): UserWithPosition[] {
  return usersArray.map((user) => {
    const userInfo = usersInfoArray.find(info => info.userid === user.userid);
    if (userInfo) {
      return {
        name: userInfo.name,
        position: userInfo.organization.position,
        age: userInfo.age,
        gender: user.gender
      };
    }
    return null!;
  }).filter((user): user is UserWithPosition => user !== null);
}

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions);