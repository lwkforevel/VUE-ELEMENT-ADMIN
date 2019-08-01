<template>
  <video muted :id="id" :style="{width:width,height:height}"></video>
</template>

<script>
//import videojs from 'videojs';
import resize from './mixins/resize'

export default {
 //mixins: [resize],
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          //fluid: true,
          sources: [
            {
              src: "https://s3.amazonaws.com/sprice-testing/ocean-two-audio-tracks.mp4",
              type: "video/mp4"
            }
          ]
        };
      }
    },
    id: {
      type: String,
      default: "video-player"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.initPlayer();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    initPlayer() {
      var data = this;
      console.log(data)
      videojs(
        document.getElementById(this.id),
        this.options,
        function onPlayerReady() {
          data.player = this;
        }
      );
    }
  }
};
</script>
