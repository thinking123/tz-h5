<template>
    <div class="wrap">
        <input ref="file" type="file" @change="handleChange" accept="image/*" capture="camera"/>
        <img :src="imgSrc" class="img" ref="img"/>
    </div>
</template>

<script>
    import {uploadFile} from "../utils/http";
    import {mapGetters} from 'vuex'
    import fixOrientation from 'fix-orientation'

    export default {
        name: "HCamera",
        computed: {
            ...mapGetters(['isIOS', 'isAndroid'])
        },
        data() {
            return {
                imgSrc: require('../assets/camera.png')
            }
        },
        mounted() {
            if (this.isIOS) {
                // this.$refs.img.removeAttribute('capture')
            }
        },
        methods: {
            async fixDirection(url) {

                return new Promise((resolve, reject) => {
                    fixOrientation(url, {image: true}, function (fixed, image) {
                        resolve(fixed)
                    });
                })

            },
            handleChange() {
                const reader = new FileReader()
                const file = this.$refs.file.files[0]
                const self = this
                reader.readAsDataURL(file)
                reader.onload = function (e) {

                    self._uploadFile(e.target.result)


                    // self.testImage(e.target.result)
                }
            },
            async testImage(img) {
                const fixedImg = await this.fixDirection(img)

                const formData = new FormData();
                formData.append("file", new Blob([fixedImg]))
                // const file = this.$refs.file.files[0]
                // formData.append("file", fixedImg);

                const url = await uploadFile(formData)
                if (url) {
                    this.imgSrc = fixedImg
                    this.$emit('change', url)
                }
            },
            async _uploadFile(img) {
                try {
                    const formData = new FormData();
                    const file = this.$refs.file.files[0]
                    formData.append("file", file);

                    const url = await uploadFile(formData)
                    if (url) {
                        this.imgSrc = img
                        this.$emit('change', url)
                    }
                    return

                    if (this.isAndroid) {
                        const fixedImg = await this.fixDirection(img)

                        const formData = new FormData();
                        formData.append("file", new Blob([fixedImg]))
                        // const file = this.$refs.file.files[0]
                        // formData.append("file", fixedImg);

                        const url = await uploadFile(formData)
                        if (url) {
                            this.imgSrc = fixedImg
                            this.$emit('change', url)
                        }
                    } else {
                        const formData = new FormData();
                        const file = this.$refs.file.files[0]
                        formData.append("file", file);

                        const url = await uploadFile(formData)
                        if (url) {
                            this.imgSrc = img
                            this.$emit('change', url)
                        }


                    }


                } catch (e) {
                    console.log(e)
                }


            }
        }
    }
</script>

<style scoped lang="less">
    @import "../css/common";

    .wrap {
        width: @camera;
        height: @camera;
        display: flex;
        position: relative;

        input {
            /*visibility: hidden;*/
            opacity: 0;
            /* position: static; */
            width: 100%;
            height: 100%;
            z-index: 2000;
        }

        .img {
            height: 100%;
            width: 100%;
            left: 0;
            position: absolute;
            border-radius: @camera-r;
            background-color: white;
        }
    }

</style>
