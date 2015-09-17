var Services = angular.module('Services',[])

Services.factory('ProjectsService', function () {
     
	var projects = [
						{ 
							id: 0,
							name: 'Heal Initative (Website)',
							link: 'healtest.space',
							image: 'heal.png',
							status: false,
							description: "Healinitiative.org is a website for the Heal Initiative, a global nonprofit health organization It's goal is to serve in resource-poor countries  and treat diseases that are considered preventable  and/or treatable. The site was created using Wordpress in conjunction with the page builder plugin tool. The header and the footer are included from the Tesseract theme by Tyler Moore. The majority of the site's thematic content is generated from scratch, and videos and image are drawn from the Heal Initiative media database."
						},
						{
							id: 1,
							name: 'Three Core Media (Website)',
							link: 'threecoremedia.org',
							image: 'threecore.png',
							status: false
							
						},
						{
							id: 2,
							name: 'Smile',
							link: 'threecoremedia.org',
							image: 'smile.png',
							status: false,
							description: "Smile is a micro donation application that will allow a requestor to request money when she is in a need to raise money quickly (in 2 weeks) to save someone's life. The donors who will have the watch app will be notified about this request and they can choose to donate any amount in the range of 1 to 20 dollars for the cause just by pressing a button.The application uses new watchOS digital crown api to amounts quickly, the ClockKit APIs to display complication on a watch face and let the donor know how much money has been raised, it uses the new animation APIs to notify users how many causes he has contributed to and brought smile to people's life, and it uses BrainTree payment SDK to make the actual donation."
						},
						{
							id: 3,
							name: 'WordBuddy',
							link: 'threecoremedia.org',
							image: 'wordBuddy.png',
							status: false,
							description: "WordBuddy is extension for text-editors that uses the LeapMotion API to allow users to perform basic text operations through and gestures. The app was developed at HACKTX 2014 using the Java Language. In addition to text-editing operations, WordBuddy can perform thesaurus queries through hand gestures to allow users to easy replace words in their content."

						},
						{ 
							id: 4,
							name: 'BroOut (In Development)',
							link: 'healtest.space',
							status: false
						},
				    ]

	var designs = [
				 	{
				 		id: 0,
				 		name: '2014 Horns Link Winner',
				 		url: 'flag.jpg',
				 		status: false
				 	}
				  ]

    return {
    	getProjects : function () {
    		return projects;
   	    },

   	    getDesigns : function () {
    		return designs;
   	    }
   	};

});


Services.factory('Test', function ($http) {

	var projects = { 
	};

	return projects;

});

