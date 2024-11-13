document.getElementById('pythonbox').addEventListener('change', filterProjects);
document.getElementById('htmlbox').addEventListener('change', filterProjects);
function filterProjects() {
  const showPython = document.getElementById('pythonbox').checked;
  const showHtml = document.getElementById('htmlbox').checked;
  const pythonRows = document.querySelectorAll('.python-sort');
  const htmlRows = document.querySelectorAll('.html-sort');
  if (!showPython && !showHtml) {
    pythonRows.forEach(row => row.style.display = 'table-row');
    htmlRows.forEach(row => row.style.display = 'table-row');
  } else {
    pythonRows.forEach(row => row.style.display = showPython ? 'table-row' : 'none');
    htmlRows.forEach(row => row.style.display = showHtml ? 'table-row' : 'none');
  }
}