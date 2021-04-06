const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
  profileDataArr.forEach(index => console.log(index));
};

printProfileData(profileDataArgs);
