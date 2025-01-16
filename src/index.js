"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray) {
    return usersArray.map((user) => {
        const userInfo = userInfo_1.usersInfoArray.find(info => info.userid === user.userid);
        if (userInfo) {
            return {
                name: userInfo.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: user.gender
            };
        }
        return null;
    }).filter((user) => user !== null);
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
