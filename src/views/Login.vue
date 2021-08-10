<template>
  <div class="form-container">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: '请输入邮箱!' },
                {
                  type: 'email',
                  message: '邮箱格式错误!',
                },
              ],
            },
          ]"
          placeholder="请输入邮箱"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码!' }] },
          ]"
          type="password"
          placeholder="请输入密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登 录
        </a-button>
        <a-button type="primary" html-type="reset" class="login-form-button">
          重 置
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '../api/user';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          api.login(values).then((res) => {
            this.$store.dispatch('setUserInfo', res);
            this.$router.push({
              name: 'Statistic',
            });
          });
        }
        api.login(values).catch((error) => {
          this.$message.error(error);
        });
      });
    },
  },
};
</script>
<style scoped lang="less">
/* #components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
} */
.form-container {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  top: 150px;
  border: 1px solid rgb(202, 202, 202);
  text-align: center;
  .login-form {
    position: absolute;
    width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .ant-btn {
      margin: 0 20px;
    }
  }
}
</style>
