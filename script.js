let code = "";

for (let i = 0; i < 18; i++) {
  code += Math.floor(Math.random() * 10);
}

document.getElementById("code").innerText = code;
