export const state = () => ({
  isProd: false,
  lastRunResult: null,
  // FIXME read these from the UI
  years: 3,
  cropType: 'apple',
  farmFeatures: defaultFarmFeatures(),
  revegFeatures: defaultRevegFeatures(),
})

export const mutations = {
  SET_IS_PROD: function (state, isIt) {
    state.isProd = isIt
  },
  UPDATE_SIM_RESULT: function (state, data) {
    state.lastRunResult = data
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { }) {
    const isProd = this.$env.DEPLOYED_TO_ENV === 'production'
    commit('SET_IS_PROD', isProd)
  },

  async runSimulation ({ commit, state }) {
    const postBody = {
      crop_type: state.cropType,
      years: state.years,
      farm: state.farmFeatures,
      reveg: state.revegFeatures,
    }
    const { data } = await this.$axios.post(`pollination`, postBody)
    commit('UPDATE_SIM_RESULT', data)
    // FIXME loading bar doesn't stay visible for whole time
  },
}

function defaultFarmFeatures () {
  return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [ 138.83813403041495, -34.863043152636905 ],
              [ 138.83814257386675, -34.88457530936099 ],
              [ 138.8477111213756, -34.88415427211334 ],
              [ 138.8621226294269, -34.88419448258575 ],
              [ 138.8616007716641, -34.88971693588374 ],
              [ 138.84608894559472, -34.88936433192601 ],
              [ 138.8365203867328, -34.88962776001814 ],
              [ 138.8222197564833, -34.8895115777228 ],
              [ 138.8220819624363, -34.88470075597307 ],
              [ 138.82978156812447, -34.884520400945235 ],
              [ 138.82974994086666, -34.878920540616484 ],
              [ 138.81984787444316, -34.87887084372782 ],
              [ 138.81979739246918, -34.870195023603486 ],
              [ 138.82914985879927, -34.87008856813386 ],
              [ 138.82955833533552, -34.864487442898415 ],
              [ 138.8331809986591, -34.8628995309908 ],
              [ 138.8361470498159, -34.861944580260065 ],
              [ 138.8386742926229, -34.86122756232333 ],
              [ 138.84230212345727, -34.86050752091353 ],
              [ 138.8432930245889, -34.86058362969365 ],
              [ 138.84308489994277, -34.86279263355591 ],
              [ 138.83813403041495, -34.863043152636905 ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [ 138.7976351232967, -34.91457258034658 ],
              [ 138.78809242247843, -34.9099008125332 ],
              [ 138.80525654750377, -34.90863402266019 ],
              [ 138.78674319454652, -34.90015396745101 ],
              [ 138.80292820051716, -34.885391212669326 ],
              [ 138.81336158117088, -34.904660062887984 ],
              [ 138.81360488755553, -34.91344927305799 ],
              [ 138.7976351232967, -34.91457258034658 ]
            ]
          ]
        }
      }
    ]
  }
}

function defaultRevegFeatures () {
  return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [ 138.8381214829456, -34.884585119806616 ],
              [ 138.83812359941683, -34.86297820218762 ],
              [ 138.84311529146916, -34.862721911365924 ],
              [ 138.84396922110494, -34.88095005155782 ],
              [ 138.85344290205637, -34.880946703445765 ],
              [ 138.85358081628885, -34.88413143299829 ],
              [ 138.8381214829456, -34.884585119806616 ]
            ]
          ]
        }
      }
    ]
  }
}
