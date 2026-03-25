document.getElementById("btnInfo").addEventListener("click", () => {
  const extraInfo = document.getElementById("extraInfo");
  if (extraInfo.classList.contains("hidden")) {
    extraInfo.classList.remove("hidden");
  } else {
    extraInfo.classList.add("hidden");
  }
});
