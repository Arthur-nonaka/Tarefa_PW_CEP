const submit = document.getElementById("button");
const verificar = document.getElementById("verificar");
const map = document.getElementById("map");

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
    let cepSearch = cep.value;
    if (cep.value.indexOf("-") === -1) {
      cepSearch = cep.value.slice(0, 5) + "-" + cep.value.slice(5);
    }
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
        if (res.data.logradouro) {
          rua.innerHTML = res.data.logradouro + ", " + res.data.complemento;
        }
      })
      .catch((err) => alert("Escreva o CEP correto"));
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?postcode=${cepSearch}&format=json&apiKey=8cfc9ea2ee744a29a7dc7d0475a05d09
      `
      )
      .then((res) => {
        console.log(res);
        map.setAttribute("src", `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=1400&height=600&center=lonlat:${res.data.results[0].lon},${res.data.results[0].lat}&zoom=14.4367&scaleFactor=2&apiKey=8cfc9ea2ee744a29a7dc7d0475a05d09`)
      })
      .catch((err) => console.log(err));
  }
});
