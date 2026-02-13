const utils = {
  getName() {
    console.log(this.name);
  },
  getPlace(country) {
    console.log(this.place + ' ' + country);
  },
};

const user1 = {
  name: 'muhsin',
  place: 'kerala',
};

const user2 = {
  name: 'dave',
  place: 'delhi',
};

utils.getName.call(user1);
utils.getPlace.call(user2, 'india');

utils.getPlace.apply(user2, ['uae']);

const myfun = utils.getName.bind(user1);
myfun();
