<template>
    <table id="burger-table">
        <th>#</th>
        <th>Cliente</th> 
        <th>Pão</th> 
        <th>Carne</th>
        <th>Opcionais</th> 
        <th>Ações</th>


        <tr v-for="burger in state.burgers" :key="burger.id"> 
            <td>{{ burger.id }}</td>
            <td>{{ burger.nome }}</td>
            <td>{{ burger.pao }}</td>
            <td>{{ burger.carne }}</td>
            <td>
                <ul class="lista-opcionais" v-for="(itens,index) in burger.opcionais" :key="index">
                    <li>{{ itens }}</li>
                </ul>
            </td>
            <td class="actions-cell">
                <ul class="actions">
                    <li>
                        <select name="status" @change="updateStatus($event, burger.id)">
                            <option value="">Selecione</option>
                            <option  v-for="cond in state.status" :key="cond.id" :value="cond.tipo" :selected="burger.status == cond.tipo">{{ cond.tipo }}</option>
                        </select>
                    </li>
                    <li>
                        <input @click="removePedido(burger.id)" type="button" value="Remover" id="remove-btn">
                    </li>
                </ul>

            </td>
        </tr>
    </table>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
    export default {
        name: 'Dashboard',
        setup(){
            const state = reactive({
                burgers: null,
                burger_id: null,
                status: []
            })

            async function getStatus(){
                const req = await fetch('http://localhost:3000/status')
                const data = await req.json()
                state.status = data
            }

            async function getPedidos(){
                const req = await fetch('http://localhost:3000/burgers')

                const data = await req.json()

                state.burgers = data
                getStatus()
            }

            async function removePedido(id){
                const req = await fetch(`http://localhost:3000/burgers/${id}`,{
                    method: 'DELETE'
                })

                const res = await req.json()

                getPedidos()
            }

            async function updateStatus(event, id){
                const option = event.target.value

                const dataJson = JSON.stringify({status: option})

                const req = await fetch(`http://localhost:3000/burgers/${id}`,{
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: dataJson
                })

                const res = await req.json()

            }

            onMounted(()=>{
                getPedidos()
            })

            return{
                state,
                removePedido,
                updateStatus
            }
        }
    }
</script>

<style scoped>
    select{
        width: 100px;
        margin: 0 auto;
        padding: 5px 0;
    }
    #remove-btn{
        padding: 5px;
        border: none;
        background-color: #222;
        border-radius: 5px;
        color: #FCBA03;
        cursor: pointer;
        font-weight: bold;
        transition: .5s;
    }
    #remove-btn:hover{
        background-color: rgb(55, 54, 54);
        color: white;
    }
    th{
        font-style: italic;
        border-bottom: 2px solid black;
    }
    table{
        flex-wrap: wrap;
        width: 90vw;
        margin: auto;
        border-collapse: collapse;
    }
    tr{
        min-height: 150px;
        text-align: center;
    }
    td{
        padding: 5px;
        border-bottom: 1.5px solid black;

    }
    .lista-opcionais{
        list-style: none;
    }
    ul{
        list-style: none;
        margin: auto;
    }
    ul.actions{
        width: 200px;
    }
    .actions-cell{
        width: 230px;
    }
    li{
        margin: 5px 0;
    }
</style>