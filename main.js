  var object = [
      {
          'headline': 'HTML',
          'value': 9,
          'length': 10,
          'description': 'Extremely proficient at base HTML. Some experience with the PUG precompiler.'
        },
      {
          'headline': 'CSS',
          'value': 8,
          'length': 10,
          'description': 'Advanced Knowledge of CSS.  Experience in the frameworks bootstrap and materialize. Fair experience using SCSS.'
        },
      {
          'headline': 'Javascript',
          'value': 7,
          'length': 10,
          'description': 'Intermediate to advanced knowledge of Javascript and JQuery.'
        },
      {
            'headline': 'Java',
          'value': 6,
          'length': 10,
          'description': 'Intermediate experience. Have done work in SeLion, an extension of Selenium automated testing.'
        },
      {
         'headline': 'C++',
          'value': 5,
          'length': 10,
          'description': 'Intermediate experience. Peer mentor for beginner class in college.'
        },
      {
          'headline': 'PHP',
          'value': 4,
          'length': 10,
          'description': 'Basic knowledge. Have used to access mySQL database in senior design project.'
      },
      {
          'headline': 'ReactJS',
          'value': 2,
          'length': 10,
          'description': 'Getting my feet wet with this one. Doing tutorials and self projects to advance my learning.'
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
