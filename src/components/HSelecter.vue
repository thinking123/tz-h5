<template>
    <div class="wrap">
        <div class="bd left">

        </div>
        <div class="bd right">

        </div>
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
</style>
