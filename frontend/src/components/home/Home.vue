<template>
    <div class="home">
        <!-- <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento" />
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon="fa fa-folder" color="#d54d50" />
            <Stat title="Artigos" :value="stat.articles"
                icon="fa fa-file" color="#3bc480" />
            <Stat title="Usuários" :value="stat.users"
                icon="fa fa-user" color="#3282cd" />
        </div> -->
        
        <PageTitle  icon="fa fa-envelope" color="#3bc480" main="Contatos"
        sub="Nossos contatos e horários de atendimento" />

        <div class="contatos">
            <div class="card">
                <div class="card-body">
                     <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd">
                        <b-carousel-slide img-src="https://i.imgur.com/qT6MCxY.jpg">
                            <!-- <h1>Hello world!</h1> -->
                        </b-carousel-slide>
                        <b-carousel-slide img-src="https://i.imgur.com/B98HiKy.jpg">
                            <!-- <h1>Hello world!</h1> -->
                        </b-carousel-slide>
                     </b-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'Home',
    components: { PageTitle, Stat, Carousel, Slide },
    data: function() {
        return {
            stat: {},
            slide: 0,
            sliding: null
        }
    },
    methods: {

        onSlideStart(){
            this.sliding = true
        },

        onSlideEnd(){
            this.sliding = false
        },

        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        },

        mounted() {
        this.getStats()
        },
    }
    
}

</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .contatos{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
