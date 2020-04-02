
<!-- core Firebase JS SDK is always required & must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-firestore.js"></script>

<script>
  // the project's firebase web-app configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBCtH_bErXEeh25xARdK1CcIlEz2xuedos",
    authDomain: "rpr-magic-innovations.firebaseapp.com",
    databaseURL: "https://rpr-magic-innovations.firebaseio.com",
    projectId: "rpr-magic-innovations",
    storageBucket: "rpr-magic-innovations.appspot.com",
    messagingSenderId: "483721450045",
    appId: "1:483721450045:web:12964141efa13ac52d9054",
    measurementId: "G-BMB95K4X2R"
  };
</script>




<!-- [todo] stripe core sdk -->
<!-- <script src="[todo]">
-->





<!--
* 
* 
* < FLOWFI.LY SCRIPT TAG >
* 
* 
-->
<script src="https://cdn.jsdelivr.net/gh/flowfi/flowfijs@master/webflow/js-sdk/0.0.1/flowfi-app.js"></script>
<script>
  var privatePages = [
  '/auth/register-success',
  '/cart',
  '/checkout'
  // '/angies-story'
];
</script>
<script>
  var FlowFi = {
  register_redirect_url: '/auth/register-success',
  login_redirect_url: '/angies-story'
};
</script>


<style>
  .auth-inline-block {
    display: none;
  }
  .error-message {
    display: none;
  }
</style>

