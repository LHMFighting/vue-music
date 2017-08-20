import * as types from './mutation-types'

const matutaions = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE] (state, playing) {
    state.playing = playing
  },
  [types.SET_FULL_SCREEN] (state, fullScreen) {
    state.fullScreen = fullScreen
  },
  [types.SET_PLAYLIST] (state, playlist) {
    state.playlist = playlist
  },
  [types.SET_SEQUENCE_LIST] (state, sequencelist) {
    state.sequencelist = sequencelist
  },
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, currentIndex) {
    state.currentIndex = currentIndex
  }
}

export default matutaions
