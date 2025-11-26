const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    nome: form.nome.value.trim(),
    email: form.email.value.trim(),
    telefone: form.telefone.value.trim(),
    feedback: form.feedback.value.trim()
  };

  const resposta = await fetch("http://localhost:3003/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });

  if (resposta.ok) {
    window.location.href = "http://localhost:3003/api";
  } else {
    alert("Erro ao enviar os dados.");
  }
});