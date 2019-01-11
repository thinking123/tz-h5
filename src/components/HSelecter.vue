<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
        <!--<div class="tran"></div>-->

        <img class="tran" src="../assets/trangle.png"/>
        <select class="input"  @change="handleChange" :value="v.value" :placeholder="placeholder" >
            <!--<h-select-item :content="item.content" v-for="item in items" @click.native="handleItemClick(item)" :is-active="current && item.key == current.key"/>-->
            <option v-for="item in items" class="option" :key="item.value">
                {{item.value}}
            </option>
        </select>
    </div>
</template>

<script>
    // import HSelectItem from "./HSelectItem";
    export default {
        name: "HSelecter",
        // components: {HSelectItem},
        props:{
            value:{
                type:Object,
                default:()=>({value:'',key:''})
            },
            items:{
                type: Array,
                default: ()=>[{value:''}]
            },
            placeholder:String
        },
        // data:{
        //     current:''
        // },
        computed:{
            v: {
                set(v) {
                    this.$emit('update:value', v)
                },
                get() {
                    return this.value
                }
            },
        },
        methods:{
            handleChange(e){
                this.v = this.items.find(f=>{
                    return f.value == e.target.value
                })
                // this.v = e.target.value
            },
            handleItemClick(item){
                this.current = item
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../css/common";

    @bd-gap:-3px;
    .left {
        left:@bd-gap;
        top:@bd-gap
    }

    .right {
        right:@bd-gap;
        bottom:@bd-gap
    }

    .wrap {

        position: relative !important;
        display: flex;
        & > *{
            position: absolute;
        }
        .bd {
            border: 1px solid @white;

            height: 100%;
            width: 100%;
        }
    }


    ::placeholder {
        opacity: 1;
        color: @white;
        font-weight: @font-weight;
        font-size: @font-size;
    }
    .input{
        position: static;
        flex: 1;
        z-index: 2;
        border: none;
        margin: 0;
        outline: none;
        background: transparent;
        height: 2.5rem;
        color: @white;
        font-weight: @font-weight;
        font-size: @font-size;
    }

    .option{
        background-color: @dialog-bg;
    }

    .tran{
        position: absolute;
        width: 20px;
        height: 10px;
        top: 50%;
        transform: translate(0, -50%);
        right: 3px;
    }
    .tran-b{
        position: absolute;
        width: 10px;
        height: 10px;
        border: 2px solid white;
        transform: rotate(90deg);
        /* border-left: 20px solid transparent; */
        /* border-right: 20px solid transparent; */
        /* border-top: 20px solid white; */
        top: 50%;
        right: 3px;
        border-top: none;
        border-left: none;
        transform: translate(0 , -50%) rotate(45deg);
        background-color: @green;
        z-index: 100;
    }
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
</style>
