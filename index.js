function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}
function c() {
  document.form.textview.value = "";
}
function del() {
  var x = document.form.textview.value;
  document.form.textview.value = x.substring(0, x.length - 1);
}
function equal() {
  var x = document.form.textview.value;
  if (x == "") {
    alert("Masukkan angka terlebih dahulu");
  }
  if (x) {
    document.form.textview.value = eval(x);
  }
}
