const getters = {
  name: state => state.user.name,
  age: state => state.user.age,
  sex: state => state.user.sex,
  money: state => state.user.info.money
};
export default getters;
