<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="form-group">
      <label for="user-name">User Name</label>
      <input
        type="text"
        class="form-control"
        id="user-name"
        placeholder="Name"
        v-model="displayName"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="createUser()">Submit</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignIn",
  data: {
    // return {
    user: {},
    email: "",
    password: "",
    // displayName: ""

    // };
  },
  methods: {
    createUser() {
      console.log(this.displayName);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.email = res.user.email;
          this.uid = res.user.uid;
          this.displayName = res.user.displayName;
          console.log(this.email);
          console.log(this.uid);
          //   db.collection(res.user.uid).add({
          //     email = res.user.email;
          //     console.log(collection);
          //   });
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  computed: {}
};
</script>
