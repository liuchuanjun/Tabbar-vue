
const state = () => {
  return {
    name: "alen",
    age: 18,
    sex: 1,
    address: "洛杉机",
    info: {
      money: '$1000'
    }
  };
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },

  SET_AGE: (state, age) => {
    state.age = age;
  },

  SET_SEX: (state, sex) => {
    state.sex = sex;
  },

  SET_MONEY: (state, money) => {
    state.info.money = money;
  }
};


const actions = {
  upDataName({ commit }, name) {
    commit("SET_NAME", name);
  },

  upDataAge({ commit }) {
    commit("SET_AGE", 30);
  },

  upDataSex({ commit }) {
    commit("SET_SEX", 2);
  }
};


export default {
  state,
  mutations,
  actions
};
