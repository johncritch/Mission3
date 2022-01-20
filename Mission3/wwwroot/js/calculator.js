$("#btnSend").click(function () {

    //assigns variables from html form

    assignments = $("#assignments").val() * .55
    quiz = $("#quiz").val() * .1
    exam = $("#exam").val() * .2
    intex = $("#intex").val() * .1
    group = $("#group").val() * .05
    letter = ""

    //calculates final grade by adding sections

    final = assignments + quiz + exam + intex + group

    //assigns variable final to a letter grade
    if (final >= 94) {
        letter = "(A)"
    } else if (final >= 90){
        letter = "(A-)"
    } else if (final >= 87) {
        letter = "(B+)"
    } else if (final >= 84) {
        letter = "(B)"
    } else if (final >= 80) {
        letter = "(B-)"
    } else if (final >= 77) {
        letter = "(C+)"
    } else if (final >= 74) {
        letter = "(C)"
    } else if (final >= 70) {
        letter = "(C-)"
    } else if (final >= 67) {
        letter = "(D+)"
    } else if (final >= 64) {
        letter = "(D)"
    } else if (final >= 60) {
        letter = "(D-)"
    } else {
        letter = "(F)"
    }

    //places new variables into html

    //$("#final").append($("#final").html());
    //$("#letter").append($("#letter").html());

    //document.getElementById("final").innerHTML = final
    //document.getElementById("letter").innerHTML = letter

    alert("Final Grade: " + final + letter)

})