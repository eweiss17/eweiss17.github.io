  var object = [
      {
          'headline': 'HTML',
          'value': 9,
          'length': 10,
          'description': 'Proficcient and creating and debugging'
        },
      {
          'headline': 'CSS',
          'value': 8,
          'length': 10,
          'description': 'Knowledge of css'
        },
      {
          'headline': 'Javascript',
          'value': 8,
          'length': 10,
          'description': 'Knowledge of css'
        },
      {
          'headline': 'C++',
          'value': 7,
          'length': 10,
          'description': 'Knowledge of css'
        },
      {
          'headline': 'Java',
          'value': 7,
          'length': 10,
          'description': 'Knowledge of css'
        },
      {
          'headline': 'PHP',
          'value': 4,
          'length': 10,
          'description': 'Knowledge of css'
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
      $('.collapsible').collapsible();

  });
