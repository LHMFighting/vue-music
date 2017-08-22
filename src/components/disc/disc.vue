<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from '../music-list/music-list'
import {getSongList} from '../../api/recommend'
import {mapGetters} from 'vuex'
import {ERR_OK} from '../../api/config'

export default {
  components: {
    MusicList
  },
  data () {
    return {
      songs: []
    }
  },
  created () {
    this._getSongList()
  },
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  methods: {
    _getSongList () {
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.cdlist)
        }
      })
    },
    _normalizeSongs (list) {
      // let ret = []
      // list.forEach(musicData => {
      //   if (musicData.songid && musicData.albumid) {
      //     // ret.push(mus)
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter, .slide-leave-to {
    transform: translate(100%, 0, 0)
  }
</style>

