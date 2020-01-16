<template>
    <panel title="Youtube">
       <youtube
       :video-id="youtubeId"
       :player-width="500"
       :player-height="280"
       ></youtube>
   
    </panel>
</template>

<script>
export default {
    props:['youtubeId']
}
</script>

<style>

</style>
