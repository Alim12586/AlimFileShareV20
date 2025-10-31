document.getElementById("uploadForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  document.getElementById("fileLink").value = data.link;
  document.getElementById("linkContainer").classList.remove("hidden");
});
