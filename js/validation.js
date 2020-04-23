(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
            "submit",
            function (event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
            );
        });
        },
        false
    );
    })();



    function yes() {
        document.getElementById("china").disabled = false;
        document.getElementById("macao").disabled = false;
        document.getElementById("hong").disabled = false;
        document.getElementById("korea").disabled = false;
        document.getElementById("iran").disabled = false;
  
      }
  
      function no() {
        document.getElementById("china").disabled = true;
        document.getElementById("macao").disabled = true;
        document.getElementById("hong").disabled = true;
        document.getElementById("korea").disabled = true;
        document.getElementById("iran").disabled = true;
  
      }
  