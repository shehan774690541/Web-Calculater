function insert(num)
{
    document.form.textView.value = document.form.textView.value + num
}
function clean()
{
    document.form.textView.value = "Values are cleard"
    document.form.textView.value = ""
}
function equal()
{
    var exp = document.form.textView.value;

    if(exp)
    {
        document.form.textView.value = eval(exp)
    }
}