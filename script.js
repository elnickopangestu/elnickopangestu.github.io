* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  *:focus{
    outline: none;
  }
  body,
  html {
    height: 100%;
    font-family: Verdana;
    font-size: 16px;
  }
  body {
    margin: 0px;
    padding: 10px;
    overflow-x: hidden;
  }
  .profile-card {
    -webkit-box-shadow: 0px 0px 20px #000;
       -moz-box-shadow: 0px 0px 20px #000;
            box-shadow: 0px 0px 20px #000;
    margin: 60px auto 10px auto;
    max-width: 320px;
    position: relative;
    width: 100%;
  }
  .profile-card .image {
    background-color: #fff;
    border-radius: 50%;
    height: 110px;
    left: 50%;
    margin-left: -55px;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: -55px;
    width: 110px;
  }
  .profile-card .image img {
    border: none;
    border-radius: 50%;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  .profile-card .image-shadow {
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 20px #000;
       -moz-box-shadow: 0px 0px 20px #000;
            box-shadow: 0px 0px 20px #000;
    height: 110px;
    position: absolute;
    margin-left: -55px;
    left: 50%;
    margin-top: -55px;
    top: -0%;
    width: 110px;
    z-index: -1;
  }
  .profile-card .header {
    background-color: #160A43;
    color: #fff;
    padding: 10px;
  }
  .profile-card .header .title {
    margin-bottom: 10px;
    margin-top: 45px;
    padding: 10px;
  }
  .profile-card .header .title span {
    display: block;
    padding: 10px;
    padding-bottom: 0px;
    text-align: center;
  }
  .profile-card .header .title span:nth-child(1) {
    font-size: 28px;
  }
  .profile-card .header .title span:nth-child(2) {
    font-size: 14px;
    padding-top: 0px;
  }
  .profile-card .header .social-buttons {
    display: table;
    margin-bottom: 10px;
    padding: 0px 10px;
    width: 100%;
  }
  .profile-card .header .social-buttons .social-button {
    display: table-cell;
    text-align: center;
  }
  .profile-card .header .social-buttons .social-button i {
    background-color: white;
    border-radius: 50px;
    color: #160A43;
    cursor: pointer;
    font-size: 20px;
    opacity: .70;
    padding: 5px 0px;
    text-align: center;
    width: 28px;
  }
  .profile-card .header .social-buttons .social-button i:hover {
    opacity: 1;
  }
  .profile-card .content .tabs {
    color: #fff;
    display: table;
    height: 47px;
    width: 100%;
  }
  .profile-card .content .tabs .tab {
    cursor: pointer;
    display: table-cell;
    font-size: 24px;
    height: 47px;
    padding: 10px;
    text-align: center;
  }
  .profile-card .content .tabs .tab[status="active"] {
    background-color: #fff;
    color: #160A43;
  }
  .profile-card .content .tabs .tab:not([status="active"]) {
    background-color: #FF6362;
    color: #fff;
  }
  .profile-card .content .body {
    height: 350px;
    padding: 10px;
  }
  .profile-card .content .body [tab]:not([status="active"]) {
    display: none;
  }
  h2 {
    border-bottom: 1px solid #777;
    font-weight: normal;
    margin: 0px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    color: #FF6362;
    cursor: pointer;
    text-decoration: none;
  }
  form {
    width: 100%;
  }
  input[type="text"],
  input[type="email"],
  input[type="submit"],
  textarea {
    background: none;
    background-color: #eee;
    border: none;
    color: #777;
    display: block;
    font-family: inherit!important;
    font-size: 18px;
    margin: 0px 0px 10px 0px;
    padding: 10px;
    width: 100%;
  }
  input[type="text"]:hover,
  input[type="email"]:hover,
  textarea:hover {
    color: #000;
  }
  input[type="submit"] {
    background-color: #FF6362;
    color: #fff;
    cursor: pointer;
  }
  textarea {
    height: 132px;
    resize: none;
  }
  
    top: 0px;
  }
  