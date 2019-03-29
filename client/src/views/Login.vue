<template>
    <div class="login-container">
      <div class="login-modal-container">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Login',
  }
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  .login-modal-container {
    width: 750px;
    height: 750px;
    background-color: #fafafa;
    border-radius: 5px;
    border: 1px solid #95a5a6;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    input {
      width: 80%;
      height: 70px;
      margin: 20px 0;
      border-radius: 5px;
      border: none;
      background-color: #95a5a6;
      padding-left: 30px;
      font-family: "Roboto";
      font-weight: 500;
      color: #fff;
      font-size: 25px;

      &:focus {
        outline: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }
      
      &::placeholder {
        color: #fff;
      }
    }
  }
</style>
