  var object = [
    {
      'headline': 'Web Development',
      'value': 8,
      'length': 10,
      'description': 'Know the ins and outs of web development, including HTML, CSS and Javascript'
    },
    {
      'headline': 'PHP',
      'value': 6,
      'length': 10,
      'description': 'Moderate knowledge. Have worked in a legacy codebase.'
    },
    {
      'headline': 'Java',
      'value': 6,
      'length': 10,
      'description': 'Intermediate experience. Have done work in SeLion, an extension of Selenium automated testing.'
    },
    {
      'headline': 'Ruby on rails',
      'value': 5,
      'length': 10,
      'description': 'Intermediate experience. Have worked on several projects utilizing this.'
    },
    {
      'headline': 'C++',
      'value': 5,
      'length': 10,
      'description': 'Intermediate experience. Peer mentor for beginner class in college.'
    },
    {
      'headline': 'WordPress',
      'value': 4,
      'length': 10,
      'description': 'Intermediate experience. Several projects completed in WordPress.'
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
});
