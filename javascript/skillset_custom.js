  var object = [
    {
      'headline': 'Web Development',
      'value': 8,
      'length': 10,
      'description': 'Know the ins and outs of web development, including HTML, CSS and Javascript'
    },
    {
      'headline': 'PHP',
      'value': 7,
      'length': 10,
      'description': 'Moderate knowledge to experienced. Have worked in a several PHP codebases.'
    },
    {
      'headline': 'mySQL',
      'value': 7,
      'length': 10,
      'description': 'Am able to solve complex problems with.'
    },
    {
      'headline': 'React',
      'value': 6,
      'length': 10,
      'description': 'Have done multiple projects with React and have have a intemediate base understanding.'
    },
    {
      'headline': 'React Native',
      'value': 6,
      'length': 10,
      'description': 'Have constructed multiple projects from the ground up. Moderately experienced.'
    },
    {
      'headline': 'Ruby on rails',
      'value': 6,
      'length': 10,
      'description': 'Intermediate experience. Have worked on several projects utilizing this.'
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
      'headline': 'WordPress',
      'value': 5,
      'length': 10,
      'description': 'Intermediate experience. Several projects completed in WordPress.'
    },
    {
      'headline': 'Firestore',
      'value': 5,
      'length': 10,
      'description': 'Understand this noSQL database and am able to work with without issue.'
    }
];

$(document).ready(function () {
    $('#skillset').skillset({
      object: object,
      duration: 80
    });
});
