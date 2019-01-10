<template>
    <div class="wrap">
        <input ref="file" type="file" @change="handleChange" accept="image/*" capture="camera"/>
        <img :src="imgSrc" class="img" ref="img" />
    </div>
</template>

<script>
    import {uploadFile} from "../utils/http";
    import {mapGetters} from 'vuex'
    export default {
        name: "HCamera",
        computed: {
            ...mapGetters(['isIOS'])
        },
        data(){
            return {
                imgSrc:require('../assets/camera.png')
            }
        },
        mounted(){
            if(this.isIOS){
                // this.$refs.img.removeAttribute('capture')
            }
        },
        methods: {
            handleChange() {
                const reader = new FileReader()
                const file = this.$refs.file.files[0]
                const self = this
                reader.readAsDataURL(file)
                reader.onload = function (e) {

                    self._uploadFile(e.target.result)
                }
            },
            async _uploadFile(img){
                try{
                    const formData = new FormData();
                    const file = this.$refs.file.files[0]
                    formData.append("file", file);

                    const url = await uploadFile(formData)
                    if(url){
                        this.imgSrc = img
                        this.$emit('change' , url)
                    }

                }catch (e) {
                    console.log(e)
                }


            }
        }
    }
</script>

<style scoped lang="less">
    .wrap{
        width: 7rem;
        height: 7rem;
        display: flex;
        position: relative;
        input{
            /*visibility: hidden;*/
            opacity: 0;
            /* position: static; */
            width: 100%;
            height: 100%;
            z-index: 2000;
        }
        .img{
            height: 100%;
            width: 100%;
            left:0;
            position: absolute;
            border-radius: 1rem;
            background-color: white;
        }
    }

</style>
