// Função para animar a barra de progresso
function animateSkills() {
    var skills = document.querySelectorAll('.skill-progress');
    skills.forEach(function(skill) {
      var width = 0;
      var targetWidth = parseInt(skill.style.width);
      var intervalId = setInterval(frame, 10);
      function frame() {
        if (width >= targetWidth) {
          clearInterval(intervalId);
        } else {
          width++;
          skill.style.width = width + '%';
        }
      }
    });
  }
  
  animateSkills();
  