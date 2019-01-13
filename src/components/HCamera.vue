<template>
    <div class="wrap">
        <input ref="file" type="file" @change="handleChange" accept="image/*" />
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
                        resolve([fixed , image])
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
            base64ToFile(dataurl , filename){
                // var img_b64 = canvas.toDataURL('image/png');
                // var png = img_b64.split(',')[1];
                //
                // var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});
                //
                // var fr = new FileReader();
                // fr.onload = function ( oFREvent ) {
                //     var v = oFREvent.target.result.split(',')[1]; // encoding is messed up here, so we fix it
                //     v = atob(v);
                //     var good_b64 = btoa(decodeURIComponent(escape(v)));
                //     document.getElementById("uploadPreview").src = "data:image/png;base64," + good_b64;
                // };
                // fr.readAsDataURL(the_file);
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, {type:mime});
            },

            async testImage(img) {
                const [fixedImg , image] = await this.fixDirection(img)

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
                    // const formData = new FormData();
                    // const file = this.$refs.file.files[0]
                    // formData.append("file", file);
                    //
                    // const url = await uploadFile(formData)
                    // if (url) {
                    //     this.imgSrc = img
                    //     this.$emit('change', url)
                    // }
                    // return



                    // const fixedImg = await this.fixDirection(img)
                    const  [fixedImg , image]  = await this.fixDirection(img)

                    const convertImage = this.base64ToFile(fixedImg , this.$refs.file.files[0].name)

                    const formData = new FormData();
                    formData.append("file", convertImage)
                    // const file = this.$refs.file.files[0]
                    // formData.append("file", fixedImg);
                    this.imgSrc = fixedImg
                    const url = await uploadFile(formData)
                    if (url) {
                        console.log(fixedImg)
                        this.imgSrc = fixedImg
                        this.$emit('change', url)
                    }

                    // if (this.isAndroid) {
                    //     const fixedImg = await this.fixDirection(img)
                    //
                    //     const formData = new FormData();
                    //     formData.append("file", new Blob([fixedImg]))
                    //     // const file = this.$refs.file.files[0]
                    //     // formData.append("file", fixedImg);
                    //
                    //     const url = await uploadFile(formData)
                    //     if (url) {
                    //         this.imgSrc = fixedImg
                    //         this.$emit('change', url)
                    //     }
                    // } else {
                    //     const formData = new FormData();
                    //     const file = this.$refs.file.files[0]
                    //     formData.append("file", file);
                    //
                    //     const url = await uploadFile(formData)
                    //     if (url) {
                    //         this.imgSrc = img
                    //         this.$emit('change', url)
                    //     }
                    //
                    //
                    // }


                } catch (e) {
                    console.log(e)
                }


            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../css/common";
    @import "../css/media";

    $camera:7rem;

    .wrap {
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
            border-radius: $camera-r;
            background-color: white;
        }
    }

    $step:0.5;


    @include range-media(1, 4) {
        .wrap {
            width: 7rem;
            height: 6.5rem;
        }
    }

    @include range-media(5, 8) {
        .wrap {
            width: 7rem;
            height: 6.5rem;
        }
    }

    @include use-media($iphone4) {
        .wrap {
            width: 7rem;
            height: 6.5rem;
        }
    }

    @include use-media($iphone5, $iphone6) {
        .wrap {
            width: 6rem;
            height: 5.5rem;
        }
    }

    @include use-media($iphone-p, $iphonex) {
        .wrap {
            width: 7rem;
            height: 6.5rem;
        }
    }


</style>
