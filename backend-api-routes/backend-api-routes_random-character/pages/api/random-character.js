import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    age: chance.age(),
    profession: chance.profession(),
    company: chance.company(),
    address: chance.address(),
    phone: chance.phone(),
  };

  response.status(200).json(character);
}
