<template>
    <panel title="Song tab">
        <v-layout>
            <v-flex>
                <v-textarea
                readonly 
                v-model="tab"
                />
            </v-flex>
       </v-layout>
    </panel>    
</template>

<script>
export default {
    props:['tab']
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
