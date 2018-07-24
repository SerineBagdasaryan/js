/*function f(y) {
    var h=1;
for (var i=1; i <= y; i++ ) {
    h*=i;
}
}
document.write(f(5));*/
function f(n) {
    if (n==0 || n==1) {
        return 1;
        } else {
        return n*f(n-1);
    }

}alert(f(5));
