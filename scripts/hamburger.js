const toggleVisible = () => {
  let sidebar = document.getElementById('sidebar')
  sidebar.classList.toggle('visible')
}

document.getElementById('burger').addEventListener("click", toggleVisible)
