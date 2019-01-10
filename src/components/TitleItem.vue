<template>
    <div class="title-item"  @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="item-wrap">
           <div class="title" :class="{'tranform':isTouching}">
              <span v-for="s in title" class="word">
                  {{s}}
              </span>
           </div>
            <div class="line"/>
            <span class="tip">
                {{tip}}
            </span>

        </div>
        <div class="outer-border"/>
        <!--{{content}}-->
    </div>
</template>

<script>
    export default {
        name: "TitleItem",
        props:{
            content:{
                type:String,
                default:"敬请期待"
            },
            src:{
                type:String,
                default: ''
            },
            title:{
                type:String,
                default:"敬请期待"
            },
            tip:{
                type:String,
                default:"thisdfsdf sdflkdsjflkdsjflkdsjflk"
            },
        },
        data(){
          return {
              isTouching:false
          }
        },
        // computed: {
        //     bg() {
        //         const url = require(`../assets/home/${this.content}.png`)
        //         return {backgroundImage: `url(${url})`}
        //     }
        // },
        methods:{
            handleTouchStart(){
                this.isTouching = true
            },
            handleTouchEnd(){
                if(this.isTouching){
                    this.time = setTimeout(()=>{
                        this.isTouching = false
                    } , 1000)
                }


            }
        },
        beforeDestroy() {
            clearTimeout(this.time)
        }
    }
</script>

<style scoped lang="less">
    @item-bg:#dbe2f6;
    @item-border:#10379A;

    @outer-p:90%;
    @inner-p:70%;
    @gap-h:-3px;
    @gap-w:-7px;

    .tranform{
        transform: rotate(360deg);
    }
    .title-item{

        height: 8.5rem;
        width: 7.5rem;
        background-color: @item-bg;
        opacity: 0.8;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .outer-border{
            border:1px solid @item-border;
            width: @outer-p;
            height: @outer-p;
            position: absolute;
            left:50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .item-wrap{
            display: flex;
            color:@item-border;
            flex-direction: column;
            width: @inner-p;
            height: @inner-p;

            position: absolute;
            left:50%;
            top: 50%;
            transform: translate(-50%, -60%);
            display: flex;
            .title{
                transition: transform 0.5s;
                font-size:2rem;
                display: grid;
                grid-template-columns: 1fr 1fr ;
                grid-template-rows: 1fr 1fr ;
                grid-column-gap: 0;
                justify-items: center;
                align-items: center;

                & > *{

                    font-family: "Hz-Tz";
                }
                & >:nth-child(1){
                    position: relative;
                    right: @gap-h;
                    bottom: @gap-w;
                }
                & >:nth-child(2){
                    position: relative;
                    left: @gap-h;
                    bottom: @gap-w;
                }
                & >:nth-child(3){
                    position: relative;
                    right: @gap-h;
                    top: @gap-w;
                }
                & >:nth-child(4){
                    position: relative;
                    top: @gap-w;
                    left: @gap-h;
                }
            }
            .line{
                height: 0;
                border:1px solid @item-border;
            }
            .tip{

                white-space: nowrap;
                font-size: xx-small;
                text-align: center;
                position: absolute;
                left:50%;
                transform: translate(-50%, 0)  scale(0.7);
            }


        }

    }
</style>
