const submit = document.getElementById("button");
const verificar = document.getElementById("verificar");

submit.addEventListener("click", async () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const cep = document.getElementById("cep");

  if (name.value !== "" && email.value !== "" && cep.value !== "") {
    await axios
      .post("http://localhost:3000/insert", {
        name: name.value,
        email: email.value,
        cep: cep.value,
      })
      .then((res) => {
        alert(res.data);
        name.value = "";
        email.value = "";
        cep.value = "";
      })
      .catch((err) => console.log(err));
  }
});

verificar.addEventListener("click", async () => {
  if (cep.value !== "") {
    await axios
      .get(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then((res) => {
        const estado = document.getElementById("uf");
        const cidade = document.getElementById("cidade");
        const bairro = document.getElementById("bairro");
        const rua = document.getElementById("rua");

        estado.innerHTML = res.data.uf;
        cidade.innerHTML = res.data.localidade;
        bairro.innerHTML = res.data.bairro;
        if(res.data.logradouro){
            rua.innerHTML = res.data.logradouro + ", " + res.data.complemento;
        }
      })
      .catch((err) => alert("Escreva o CEP correto"));
  }
});
