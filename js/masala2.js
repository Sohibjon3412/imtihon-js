const user = {
  login: "fosdsdfs",
  parol: "forever123"
}
if(user.login.length < 3 && user.parol.length < 8) {
  console.log("Login kamida 3 ta belgidan iborat bo'lishi kerak");
  console.log("Parol kamida 8 ta elementdan iborat bo'lishi kerak");
} else if(user.login.length < 3){
  console.log("Login kamida 3 ta belgidan iborat bo'lishi kerak");
} else if(user.parol.length < 8 ) {
  console.log("Parol kamida 8 ta elementdan iborat bo'lishi kerak");
} else if (user.login.length > 3 && user.parol.length > 8) {
  console.log("Siz muvafiqiyatli ro'yxatdan o'tdingiz");
  console.log(user);
} if(user.login == " ") {
  console.log("Probel qabul qilinmaydi");
}