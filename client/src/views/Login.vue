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
        <div v-if="!loginScreen" class="modal-right signup">
          <h2 class="getOnBoard">Get on board.</h2>
          <div id="breaker-signup"></div>
          <input type="text" placeholder="First name" v-model="firstName">
          <input type="text" placeholder="Second name" v-model="lastName">
          <input type="text" placeholder="Email" :class="{ greenBorder: emailValid }" v-model="emailSignup">
          <input type="password" placeholder="Password" v-model="passwordSignup">
          <p id="terms" class="signup">By creating account you agree to checklist's terms and conditions and privacy policy.</p>
          <div class="login-button" @click="signUpPost"><p>signup</p></div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';

  export default {
    name: 'Login',
    beforeCreate: function() {
      if(this.$session.exists()) {
        let time = moment.duration(moment().diff(this.$session.get('startTime')))
        if(time.asDays() >= 20) {
          this.$session.destroy();
        } else {
          let userId = this.$session.get("ID");

          this.$store.commit('setCurrentUser', userId);
          this.$router.push('checklists');
        }
      }
    },
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

        axios.post('/login', loginData)
          .then(response => {
            console.log(response);
            if(response.data.completed) {
              this.$store.commit('setCurrentUser', response.data.accountId);
              this.$session.start();
              this.$session.set("ID", response.data.accountId);
              this.$session.set("startTime", moment());
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
          email: this.emailSignup,
          password: this.passwordSignup,
          firstName: this.firstName,
          lastName: this.lastName
        }

        axios.post('/signup', data)
          .then(response => {
            if(response.data.completed) {
              this.$store.commit('setCurrentUser', response.data.accountId);
              this.$session.start();
              this.$session.set("ID", response.data.accountId);
              this.$session.set("startTime", moment());
              this.$router.push('checklists');
            }
          }).catch(e => {
            console.log(e);
          })
      }
    },
    watch: {
      emailSignup: function(value) {
        let testRegEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}/i;

        if(testRegEx.test(value)) {
          this.emailValid = true;
        } else {
          this.emailValid = false;
        }

      }
    },
    data() {
      return {
        loading: false,
        loginScreen: true,
        email: "",
        password: "",
        emailSignup: "",
        passwordSignup: "",
        firstName: "",
        lastName: "",
        emailValid: false,
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
      -moz-transform: scale(7);
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
      -moz-transform: scale(2.3);
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

  .greenBorder {
    border-bottom: 2px solid #4cd137 !important;
  }

  .redBorder {
    border-bottom: 2px solid #bb0000 !important;
  }

  .signup {
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

      h2 {
        text-align: left;
      }
  }

  .getOnBoard {
    margin-top: 0;
    margin-bottom: 10px;
  }

  #breaker-signup {
    width: 100%;
    height: 1px;
    background-color: #eee;
    margin: 5px 0;
  }

  #terms {
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    .modal-left {
      display: none;
    }

    .modal-right {
      width: 100%;
      padding-top: 5px;

      h2 {
        margin-top: 0;
      }
    }

    .login-form {
      width: 100%;
    }

    .login-modal-container {
      width: 90%;
      height: 480px;
      margin: 0 auto;
    }
  }
</style>
