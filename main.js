  var object = [
      {
          'headline': 'HTML',
          'value': 9,
          'length': 10,
          'description': 'Proficcient at base HTML. Experience with the PUG precompiler.'
        },
      {
          'headline': 'CSS',
          'value': 8,
          'length': 10,
          'description': 'Knowledge of CSS.  Experience in frameworks bootstrap and materialize. Fair experience using SCSS.'
        },
      {
          'headline': 'Javascript',
          'value': 8,
          'length': 10,
          'description': 'Intermediate to advanced knowledge of Javascript and JQuery. Novice experience in ReactJS and Node.js,'
        },
      {
          'headline': 'C++',
          'value': 7,
          'length': 10,
          'description': 'Intermediate experience. Peer mentor for beginner class in college.'
        },
      {
          'headline': 'Java',
          'value': 7,
          'length': 10,
          'description': 'Intermediate experience. Have done work in SeLion, an extension of Selenium automated testing.'
        },
      {
          'headline': 'PHP',
          'value': 4,
          'length': 10,
          'description': 'Base knowledge. Have used to access mySql database for design project.'
        }
    ];

  $(document).ready(function () {

      $('#skillset').skillset({
          object: object,
          duration: 80
      });

      /* ----Materialize Functions ---- */
      $('.button-collapse').sideNav();
      $('.carousel.carousel-slider').carousel({
          fullWidth: true
      });

  });
