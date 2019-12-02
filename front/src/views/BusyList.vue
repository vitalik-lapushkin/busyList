<template>
    <div>
        <div class="username">
            <input :v-model="username"/>
        </div>
        <ul class="list">
            <li class="list__item" :v-for="item in list" :v-key="_id">
                <div>{{item.name}}</div>
                <div>{{item.status}}</div>
                <div v-if="item.occupier">{{item.occupier}}</div>
                <div v-else>{{свободно}}</div>
                <div>
                    <button :></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import BusyListService from '../services/BusyListService';
import messageMixin from '../mixins/messageMixin';

export default {
    name: 'BusyList',

    mixins: [ messageMixin ],

    data() {
        return {
            username,
            list,
        };
    },

    async created() {
        this.list = await BusyListService.getList();
    },
}
</script>