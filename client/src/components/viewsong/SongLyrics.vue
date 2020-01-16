<template>
    <panel title="Song Lyrics">
        <v-layout>
            <v-flex>
                <v-textarea
                readonly
                v-model="lyrics"
                />
            </v-flex>
       </v-layout>
    </panel>    
</template>

<script>
export default {
    props:['lyrics']
}
</script>

<style>
.textarea{
        width:100%;
        height: 600;
        padding: 20;
        border: none;
        border-style: none;
        border-color: transparent;
        font-family: monospace;
        overflow: hidden
    }
   
</style>
