<template>
  <div>
      <Message :msg="state.msg" v-show="state.msg"/>
      
      <form id="burger-form">
          <div class="input-container">
                <label class="customized" for="nome">Nome do Cliente: </label>
                <input type="text" id="nome" name="nome" v-model="state.nome" placeholder="Digite o seu nome">
          </div>

          <div class="input-container">
                <label class="customized" for="pao">Escolha seu pão: </label>
                <select name="pao" id="pao" v-model="state.pao">
                    <option value="">Selecione o seu pão</option>
                    <option v-for=" pao in state.paes" :key="pao.id"
                    :value="pao.tipo">{{pao.tipo}}</option>
                </select>
          </div>

          <div class="input-container">
                <label class="customized" for="carne">Escolha a carne: </label>
                <select name="carne" id="carne" v-model="state.carne">
                    <option value="">Selecione a carne</option>
                    <option v-for="carne in state.carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
                </select>
          </div>

          <div class="input-container">
                <label class="customized" for="opcionais">Selecione os opcionais: </label>
                <div id="optional-container">
                    <div class="checkbox-container" v-for="opcoes in state.opcionaisData" :key="opcoes.id">
                        <input type="checkbox" name="opcionais" v-model="state.opcionais" :value="opcoes.tipo" :id="opcoes.tipo">
                        <label class="label-checkbox" :for="opcoes.tipo">{{opcoes.tipo}}</label>
                    </div>
                </div>
          </div>

          <div class="submit-container">
                <input @click="preventReload($event),sendBurger()" type="submit" class="submit-btn" value="Criar meu burger!">
          </div>
      </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import Message from './Message.vue'
    export default {
        name:'BurgerForm',
        components:{
            Message
        },
        setup(){
            const state = reactive({
                paes: null,
                carnes: null,
                opcionaisData: null,
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                msg: null
                
            })

            async function getIngredientes() {
                const req = await fetch('http://localhost:3000/ingredientes')
                const data = await req.json()
                state.paes = data.paes
                state.carnes = data.carnes
                state.opcionaisData = data.opcionais    
            }

            function preventReload(e){
                e.preventDefault()
            }

            function cleanInput(){
                state.nome = null
                state.pao = null
                state.carne = null
                state.opcionais = []
            }

            function appearMsg(id){
                state.msg = `Pedido Nº ${id} Realizado com Sucesso`
                setTimeout(()=>{
                    state.msg = ''
                },4000)
            }

            async function sendBurger(){
                const data = {
                    nome: state.nome,
                    pao: state.pao,
                    carne: state.carne,
                    opcionais: [...state.opcionais],
                    status: 'Solicitado'
                }
                const dataJson = JSON.stringify(data)

                
                const req = await fetch('http://localhost:3000/burgers', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: dataJson
                })

                const res = await req.json()
                cleanInput()
                appearMsg(res.id)
                
            }

            onMounted(()=>{
                getIngredientes()
            })
            
            return{
                state,
                getIngredientes,
                preventReload,
                sendBurger
            }
        }
        
    }
</script>

<style scoped>
    #burger-form{  
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label.customized{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }
    label.label-checkbox{
        padding-left: 5px;
        font-weight: bold;
    }
    .submit-btn{
        width: 150px;
        display: block;
        margin: auto;
        padding: 5px 3px;
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        border-radius: 8px;
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }
    input, select{
        padding: 5px 10px;
        widows: 300px;
    }
    #optional-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    .checkbox-container{
        margin: auto;
        width: 30%;
    }
</style>