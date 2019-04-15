<template>
    <div class="login-container">
      <div class="login-modal-container">
        <div class="modal-left">
          <i class="fas fa-dice-d20" />
        </div>
        <div v-if="loginScreen" class="modal-right">
            <h2>Welcome to checklist, login or create and account to get started.</h2>
            <div class="login-form">
              <p class="error-message" v-if="loginDeclined">{{ loginMessage }}</p>
              <input type="text" placeholder="Email" v-model="email" />
              <input type="password" placeholder="Password" v-model="password" />
              <div class="login-button" @click="loginPost"><p>Login</p></div>
              <p class="signup">If you don't have an account you can <a @click="signup">create one here</a>.</p>
            </div>
            <div class="breaker"></div>
            <div class="facebook-button" @click="login">
              <i class="fab fa-facebook" />
              <h3>Continue with facebook</h3>
            </div>
        </div>
        <div v-if="!loginScreen" class="modal-right">
          <h2 class="getOnBoard">Get on board.</h2>
          <input type="text" v-model="email">
          <input type="text" v-model="password">
          <div class="submit" @click="signUpPost"><p>signup</p></div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Login',
    methods: {
      login: function() {
        this.$router.push('checklists');
      },
      signup: function() {
        this.loginScreen = false
      },
      loginPost: function() {
        this.loading = true;

        let loginData = {
            email: this.email,
            password: this.password
        }

        axios.post('http://localhost:3000/login', loginData)
          .then(response => {
            if(response.data.completed) {
              this.$store.commit('setCurrentUser', response.data.accountId);
              this.$router.push('checklists');
            } else {
              this.loginDeclined = true;
              this.loginMessage = response.data.message;
            }
          }).catch(e => {
            console.log(e);
          })
      },
      signUpPost: function() {

        let data = {
          email: this.email,
          password: this.password
        }

        console.log(data);

        axios.post('http://localhost:3000/signup', data)
          .then(response => {
            console.log(response);
          }).catch(e => {
            console.log(e);
          })
      }
    },
    data() {
      return {
        loading: false,
        loginScreen: true,
        email: "",
        password: "",
        loginMessage: "",
        loginDeclined: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .error-message {
    margin: 0;
    font-size: 14px;
    color: #e84118;
    font-family: 'Roboto';
    font-weight: 300;
  }

  .getOnBoard {
    text-align: left;
  }

  .login-container {
    width: 100%;
    height: 100%;
    background-color: #1a1a1d;
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  .login-modal-container {
    width: 600px;
    height: 450px;
    background-color: #fff;
    border-radius: 5px;
    display:flex;
  }

  .modal-left {
    background-color: rgba(195,7,63,1);
    width:30%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      zoom: 7;
      color: #fff;
    }
  }

  .login-form {
    height: 220px;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      width: 100%;
      height: 45px;
      margin-top: 15px;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      padding-left: 10px;
      border: none;
      transition: all 0.2s;
      background-color: #eee;

      &:focus {
        outline: none;
        border-bottom: 2px solid #1A1A1D;
      }
    }
  }

  .signup {
    margin: 0;
    margin-top: 10px;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 14px;

    a {
      text-decoration: underline;
      color: rgba(195,7,63,1);
    
      &:hover {
        cursor: pointer;
      }
    }
  }

  .breaker {
    width: 100%;
    height: 1px;
    background-color: #eee;
    margin: 20px 0;
  }

  .login-button {
    width: 150px;
    height: 40px;
    background-color: rgba(195,7,63,1);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: all 0.3s;

    p {
      font-family: 'Roboto';
      font-weight: 600;
      color: #fff;
    }

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #1A1A1D;
    }
  }

  .modal-right {
    width: 70%;
    height: 100%;
    padding: 25px;

    h2 {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 24px;
      text-align: center;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .facebook-button {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#4267b2;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    i {
      position: absolute;
      left: 5px;
      zoom: 2.3;
      color: #fff;
    }

    h3 {
      position: absolute;
      left: 70px; 
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 18 px;
      color: #fff;
      margin: 0;
    }
  }
</style>
