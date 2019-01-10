<template>
    <div class="home-page">
        <!--<splash-page/>-->
        <splash-page :visible="isShowSplash"/>
        <div class="home-content">
            <div class="content-wrap">
                <title-item v-for="(item ,index) in items"
                            :content="item.linkName" :src="item.linkName"
                            :key="item.id" @click.native="handleItemClick(item)"/>
            </div>
        </div>
        <tip-dialog :visible.sync="showTip"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import SplashPage from '../components/SplashPage'
    import TitleItem from "../components/TitleItem";
    import {mapGetters , mapMutations,mapActions} from 'vuex'
    import TipDialog from "../components/TipDialog";
    import {getLink} from "../utils/http";

    const SPLASHTIME = 3000
    export default {
        name: "Home",
        components: {TipDialog, TitleItem, SplashPage},
        data(){
            return {
                isShowSplash:false,
                // items:[
                //     {content:"大会简介" , src:"" },
                //     {content:"会议议程" , src:""},
                //     {content:"注册报名" , src:"" , path:"invitation-code"},
                //     {content:"照片直播" , src:""},
                //     {content:"视频直播" , src:""},
                //     {content:"论坛地址" , src:""},
                //     {content:"官网链接" , src:""},
                //     {content:"官微链接" , src:""},
                //     {content:"个人中心" , src:"" ,path:"person-center"},
                // ],
                showTip:false
            }
        },
        computed: {
            ...mapGetters(['isLoaded' , 'user' , 'links']),
            items(){
                let res = this.links.map(m=>{
                    let r = {...m}
                    if(m.linkName == '注册报名'){
                        r = {...r , path:'invitation-code'}
                    }else if(m.linkName == '个人中心'){
                        r = {...r , path:'person-center'}
                    }

                    return r
                }).sort((a , b)=>{
                    return a.sort > b.sort
                })

                res = [...res , {
                    linkName : '个人中心',
                    state:1,
                    path:"person-center",
                    sort:9
                } , {
                    linkName : '注册报名',
                    path:"invitation-code",
                    state:1,
                    sort:3
                }]

                return res
            }
        },
        methods:{
            ...mapMutations( [
                'setLoaded'
            ]),
            ...mapActions([
                'getUser','getLink'
            ]),
            handleItemClick(item ){
                if(item.state == 1 && item.path){
                    if(item.path == 'person-center' && this.user){
                        this.$router.push({path:item.path})
                        return
                    }else{
                        this.$router.push({path:'invitation-code'})
                        return
                    }
                    this.$router.push({path:item.path})
                }else{
                    this.showTip = true
                }

            },
            async init(){
                try{
                    await this.getLink()
                    await this.getUser()
                }catch (e) {
                    console.log(e)
                }
            }
        },
        mounted() {
            if(!this.isLoaded){
                this.isShowSplash = true
                this.time = setTimeout(()=>{
                    this.isShowSplash = false
                    this.setLoaded()
                    clearTimeout(this.time)
                } , SPLASHTIME)
            }

            this.init()
        },
        beforeDestroy() {
            if(this.time){
                clearTimeout(this.time)
            }
        }
    }
</script>

<style scoped lang="less">
    .home-page {
        background-image: url("../assets/home-bg.png");
        background-size: contain;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .home-content {
            display: flex;
            justify-content: center;
            margin-bottom: 100px;
            .content-wrap{
                display: grid;
                grid-gap:10px;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
            }
        }
    }

</style>
