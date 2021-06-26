var student= [];
function submit() {
    var name1=document.getElementById ("s1").value;
    var name2=document.getElementById ("s2").value;
    var name3=document.getElementById ("s3").value;
    var name4=document.getElementById ("s4").value;
    student.push (name1);
    student.push (name2);
    student.push (name3);
    student.push (name4);
    console.log (student);
    document.getElementById ("display_names").innerHTML=student;
    document.getElementById ("submit").style.display="none";
    document.getElementById ("sort").style.display="inline-block";

}
function sort() {
    student.sort();
    document.getElementById ("display_names").innerHTML=student;
    console.log (student);

    setTimeout(function() {
         window.alert 
            ("Reload the page to enter a new list or click 'OK' to keep the same list.");
         
    }, 10000);


} 



