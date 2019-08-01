<template>
  <div class="video-palyer-container">
    <videoPlayer width="100%" height="100%"/>
  </div>
</template>

<script>
import videoPlayer from "@/components/Video/VideoPlayer";

export default {
  name: "video-player",
  components: { videoPlayer },
};
</script>


<style scoped>
.video-palyer-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
