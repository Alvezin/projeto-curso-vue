<template>
  <div>
      <p>componente de msg</p>
      
      <form id="burger-form">
          <div class="input-container">
                <label class="customized" for="nome">Nome do Cliente: </label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
          </div>

          <div class="input-container">
                <label class="customized" for="pao">Escolha seu pão: </label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option value="Integral">Integral</option>
                </select>
          </div>

          <div class="input-container">
                <label class="customized" for="carne">Escolha a carne: </label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione a carne</option>
                    <option value="maminha">Maminha</option>
                </select>
          </div>

          <div class="input-container">
                <label class="customized" for="opcionais">Selecione os opcionais: </label>
                <div id="optional-container">
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" v-model="opcionais" value="salame" :id="value">
                        <label class="label-checkbox" for="salame">Salame</label>
                    </div>
                </div>
          </div>

          <div class="submit-container">
                <input type="submit" class="submit-btn" value="Criar meu burger!">
          </div>
      </form>
  </div>
</template>

<script>
    export default {
        name:'BurgerForm'
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