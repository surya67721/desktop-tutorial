<script>
    // ---------- Auto logout ----------
    let secondsLeft = 30;
    const timeSpan = document.getElementById("timeLeft");
    const warning = document.getElementById("warning");

    const timerId = setInterval(() => {
      secondsLeft--{
        
      }
      timeSpan.textContent = secondsLeft;

      if (secondsLeft === 5) {
        warning.textContent = "Warning: You will be logged out in 5 seconds!";
      }

      if (secondsLeft <= 0) {
        clearInterval(timerId);
        alert("Auto logout now!");
        // here you can redirect: window.location.href = "logout.html";
      }
    }, 1000); // runs every 1 second

    // ---------- Traffic signal ----------
    const lights = ["red", "yellow", "green"];
    let index = 0;

    function showLight(i) {
      lights.forEach(id => {
        document.getElementById(id).classList.remove("on");
      });
      document.getElementById(lights[i]).classList.add("on");
    }

    showLight(index); // start at red

    setInterval(() => {
      index = (index + 1) % lights.length; // 0->1->2->0...
      showLight(index);
    }, 1000); // change light every 1 second
  </script>