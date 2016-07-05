  var $forceBox1 = $(".forceBox1");
  // var w = $forceBox1.width();
	// var h = window.innerHeight;
  var w = 900;
	var h = 765;
  var g = 0.05;
  var c = -800;
  var d = 275;



  var svg1 = d3.select(".forceBox1")
          .insert("svg",":nth-child(2)")
          // .append("svg")
          // .attr("width", w)
          // .attr("height", h);
          .attr("viewBox", "0 0 " + w + " " + h )
          .attr("preserveAspectRatio", "xMidYMid meet");

  // var fill = d3.scale.category10();

// "#FAF9F4", "#52B4AF", "rgb(183, 178, 224)", "#B6DEDC","rgb(203, 170, 193)"
//////////////////////////////////
		var dataset1 = {
			nodes:[
					{name1:"Who",name2:"am I?", class: "colorType0", radius: 90,
              description: 'I am a French-Australian web developer who became passionate by web development lately.<br><br>I have been a civil engineer/project manager for the past 8 years (the last 5 years in Australia). I managed various types of projects such as wind farm, power plant, dam and building.<br><br>Looking for new challenges I decided to get involved in the start-up community. I even decided to start my own business: Value Your Time.<br>But after few months I realised that I enjoy developing web solutions much more than every other aspect of the business.<br><br>The 12 weeks full-time course that I just did with General Assembly confirmed everything I thought: I am willing to become a web developer.<br><br>You can see below the links to my interactive resume code, to the pdf version of my resume, to my linkedin and to Value Your Time website:<br><a class="whoAmI" href="https://github.com/cedricamoyal/Interactive-Resume" target="_blank"><span class="devicons devicons-github_badge"></span></a><a class="whoAmI" href="CedricAmoyal2016WD.pdf" target="_blank"><span><i class="fa fa-file-text-o" aria-hidden="true"></i></span></a> <a class="whoAmI" href="https://au.linkedin.com/in/cedric-amoyal-83b5a747" target="_blank"><span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span></a><a class="whoAmI" href="http://www.valueyourtime.com.au/" target="_blank"><span><i class="fa fa-hourglass" aria-hidden="true"></i></span></a><br>Contact me:<br>Cedric Amoyal, 0423 749 645<br>cedric.amoyal@gmail.com'},

	        {name1:"Previous Life:",name2: "Civil Engineer", class: "colorType1", radius: 70,
              description: 'I think that there are many common points between the way you build civil structures and the way you build websites.<br><br># You need to have a good understanding of your clients\’ needs. You need to be able to offer them different options and to explain them the good/bad points of each option and the cost implications.<br># From very few/incomplete documents, you have to be able to quickly understand your environment and the main difficulties.<br># Then you have to plan ahead all your works and organise your teams. It is very important to give a clear scope of work to everyone. For this you need to break down your projects into smaller units.<br># At each step you have to foresee and to anticipate on future problems. No matters how good you are, problems/bugs will come up and you have to take action asap in order to fix it for your project to keep going.<br><br> Doing all of the above, you always need to keep in mind your deadlines, your budget and your client satisfaction. Passion, efforts and very good people skills are essential.'},
					{name1:"New Life:",name2:"Web Developer", class: "colorType2", radius: 70,
              description: 'I just did the 12 weeks full-time Web Development Immersive Program with  <a href="https://generalassemb.ly/education/web-development-immersive" target="_blank"><span class="GA">General Assembly</span></a> in Sydney.<div class="GA_logo"><a href="https://generalassemb.ly/education/web-development-immersive" target="_blank"><img src="GA_logo.png" alt="GA logo"></a></div># What did I learn during the WDi program?<br><br>The WDi Program taught me the skills I need to kickstart my career as a web developer.<br>From programming fundamentals (HTML, CSS, JavaScript, jQuery, AJAX, Ruby, D3.js) to launching full-stack web apps (Rails, Backbone.js, Bootstrap), I learned to solve problems with code while applying industry best practices in a collaborative environment  (Github, Heroku).<br><br># What projects did I do?<br><br>While I was studying at <a href="https://generalassemb.ly/education/web-development-immersive" target="_blank"><span class="GA">General Assembly</span></a> I developed 4 projects, you can have a look at them by selecting the <span class="purplePlanets">planets</span>. '},

					{name1:"Positions",name2:"& Projects", class: "colorType1", radius: 55,
              description: '<span class="greenCivil">Project Manager - MOITS Pty Ltd</span><br>July 2015 – November 2015 – Sydney, Australia<br><br>As a Project Manager at MOITS, I managed multiple projects in a short amount of time.<br><br><span class="greenCivil">Project Engineer - Mainland Civil Pty Ltd</span><br>February 2012 – July 2015 – Sydney, Australia<br><br># Warriewood Square Stage 1 at Warriewood Shopping Centre, (BUILT), ($1M)<br># Taxiway widening associated with T2 Pier B Apron works at Sydney Airport, (SACL), ($3.5M)<br># The Australian Institute for Nanoscience, (The University of Sydney, CIS), ($7M)<br># Charles Perkins Centre, (The University of Sydney, CIS / BMPX), ($40M)<br><br><span class="greenCivil">Site Engineer - Macmahon Contractors Pty Ltd</span><br>April 2011 - February 2012 – Jindabyne, Australia<br><br># Jindabyne Dam Spillway, (Snowy Hydro), ($10M), NSW, Australia<br><br>You can see more positions/projects on the pdf version of my resume:<a class="civilAtag" href="CedricAmoyal2016WD.pdf" target="_blank"><span><i class="fa fa-file-text-o" aria-hidden="true"></i></span></a>'},
					{name1:"Main",name2:"Activities", class: "colorType1", radius: 55,
              description: "<br>• Bulk and detail excavation, <br><br>• Shoring system installation (including piling, capping beam, anchors installation/removal and shotcrete), <br><br>• Concrete works, <br><br>• STW installation, <br><br>• Road works,<br><br>• Demolition works."},
          {name1:"Regular",name2:"Duties", class: "colorType1", radius: 55,
              description: '•	Understand fully the scope of work, handover report, contract conditions, drawings and specs<br>•	Deal with clients, consultants and authorities to change various designs to achieve construction viability and practicability<br>•	Negotiation with clients and subcontractors on variations relating to design and specification changes.<br><br>•	Prepare master and weekly programs<br>•	Liaise with our clients, subcontractors, suppliers and other trades to program and to coordinate the different activities<br>•	Supervision of civil works<br>•	Manage teams made of site engineers, supervisors, leading hands, operators, qualified workers and general labours<br>•	Overseeing the quality of workmanship of trades<br>•	Preparation of handover documentation package for the client<br><br>•	Budget preparation<br>•	Assessment of subcontractors and suppliers submissions and quotes<br>•	Processing and approval of payments to subcontractors and suppliers<br>•	Cost monitoring<br>•	Monthly progress claims including variations'},

          {name1:"A Mobile App",name2:"with React", class: "colorType2", radius: 55,
              description: 'Coming Soon !<br><br>Link to the application:<br><a class="webDevAtag" href="#" target="_blank">#</a> <br>Link to the code:<br><a class="webDevAtag" href="#" target="_blank">#</a>'},
          {name1:"Visualisation",name2:"with D3.js", class: "colorType2", radius: 55,
              description: 'Welcome to <span class="purplePlanets">Twitter Top Topics</span> my first group project.<br><br>Using Twitter API data to produce nice data visualisation has been a great experience of team work. Our team was made of 4 new web developers coming from 4 very different professional backgrounds. We had to split the project in a smart way in order to avoid too many merge conflicts. We then solved the merge conflicts that we couldn\'t foresee.<br><br> I did the D3.js for the "Bar Chart 1", "Bar Chart 2" and "Pie Chart 3". "Bar Chart 1" and "Pie Chart 3" show you Twitter most popular topics for a specific city at a specific time. "Bar Chart 2" shows the number of tweets in each city for a specific topic at a specific time. "Bar Chart 2" only works if the topic you chose is one of the top topics at the specific time that you chose, you can use "Bar Chart 1" and "Pie Chart 3" to check that. If you wish to get the latest data from Twitter API you can click on this <a href="https://project3group.herokuapp.com/trends.json?" target="_blank"><span class="purplePlanets">link</span></a> and reload the app.<br><br>Link to the application:<a class="webDevAtag" href="https://project3group.herokuapp.com/" target="_blank"><span class="devicons devicons-heroku"></span></a> <br>Link to the code:<a class="webDevAtag" href="https://github.com/cedricamoyal/project3group " target="_blank"><span class="devicons devicons-github_badge"></span></a>'},
          {name1:"A CRUD App",name2:"with Rails", class: "colorType2", radius: 55,
              description: 'Welcome to <span class="purplePlanets">Create Amazing Trips</span> my first CRUD application made with Ruby on Rails.<br><br>This application helps you to prepare your road trips. After you sign in, have a look at the different visits. So many nice places on earth, difficult to choose where to go, isn\'t it? Once you know what you want to do, create a new trip. Create your first step straight away. Look at your trip details and add more steps. The app allows you to sort your steps, to check your itinerary and to adjust your calendar.<br><br> I wish to add a drag and drop feature in order to help the user to re-organised the different steps of his trips. I also have in mind to filter a little bit better the visits dropdown menu in the create a new step form. One more hint, if your trip itinirary is not working it is probably due to the fact that google map cannot find a road to reach one of your steps. A good example of that bug is the "Isla del Sol/Lake Titicaca", the lat/long in the database will take you in the middle of the lake :)<br><br>Link to the application:<a class="webDevAtag" href="https://cedricproject2.herokuapp.com/login " target="_blank"><span class="devicons devicons-heroku"></span></a> <br>Link to the code:<a class="webDevAtag" href="https://github.com/cedricamoyal/project2cedricheroku " target="_blank"><span class="devicons devicons-github_badge"></a>'},
          {name1:"A Little Game",name2:"with jQuery", class: "colorType2", radius: 55,
              description: 'Welcome to <span class="purplePlanets">Tic Tac Toe</span> my very first project.<br><br>It is a multiplayer game that can be played from 2 different computers thanks to Firebase.<br><br>Give us your names, pick your icons, choose your favorite colors and start playing. You will see live your opponent icon choices and game moves. How cool is that? The app also records your wins and give you the opportunity to start a new game anytime.<br><br> As you might have noticed I haven\'t had the time to finalise the sound feature. I also need to work on the user authentication in order to make sure that player 1 cannot play instead of player 2 and vice versa. Another thing that I can try to improve is the fact that I currently need to manually delete the data from Firebase between each game session.<br><br> For this app I used mainly JavaScript, jQuery and Firebase.<br><br>Link to the application:<a class="webDevAtag" href="http://cedricamoyal.github.io/Cedricwebsite " target="_blank"><span class="devicons devicons-github_alt"></span></a> <br>Link to the code:<a class="webDevAtag" href="https://github.com/cedricamoyal/Cedricwebsite " target="_blank"><span class="devicons devicons-github_badge"></span></a>'},

			],
			edges:[
					{source: 0, target: 1},
					{source: 0, target: 2},
					{source: 1, target: 3},
					{source: 1, target: 4},
          {source: 1, target: 5},
          {source: 2, target: 6},
          {source: 2, target: 7},
          {source: 2, target: 8},
          {source: 2, target: 9} ]
		};

		var force1 = d3.layout.force()
								.nodes(dataset1.nodes)
								.links(dataset1.edges)
								.size([w, h])
                .gravity(g)
                .charge(c)
                .linkDistance(d)
								.start();

		var edges1 = svg1.selectAll("line1")
						.data(dataset1.edges)
						.enter()
						.append("line")
            .attr('class', 'line1')
						// .style("stroke", "#ccc")
            .style("stroke", "#555")
						.style("stroke-width", 3);


    var $forceBoxText1 = $(".forceBoxText1");

		var nodes1 = svg1.selectAll("circle1")
						.data(dataset1.nodes)
						.enter()
						.append("circle")
            .attr('class', function(d) { return d.class; })
						.attr("r", function(d) { return d.radius; })
            // .style("fill", function(d) { return d.color; })
            .style("stroke", "#555")
            .style("stroke-width", 3)
						.call(force1.drag)
            .on("click", function (d) {
              $forceBoxText1.empty();

                    var $nameText1 = $("<h3>");
                    $nameText1.html(d.name1 + " " + d.name2);
                    $forceBoxText1.append( $nameText1 );

                    var $descriptionText1 = $("<p>");
                    $descriptionText1.html(d.description);
                    $forceBoxText1.append( $descriptionText1 );

              console.log("you clicked on the circle1: " + d.name1 + " " + d.name2);
            });

		var label1 = svg1.selectAll(".mytext1")
						.data(dataset1.nodes)
						.enter()
						.append("text")
            .attr('class', 'mytext1')
				    .style("text-anchor", "middle")
				    .style("fill", "#555")
				    .style("font-family", "Arial")
				    .style("font-size", 14)
            .call(force1.drag)
            .on("click", function (d) {
              $forceBoxText1.empty();

                    var $nameText1 = $("<h3>");
                    $nameText1.html(d.name1 + " " + d.name2);
                    $forceBoxText1.append( $nameText1 );

                    var $descriptionText1 = $("<p>");
                    $descriptionText1.html(d.description);
                    $forceBoxText1.append( $descriptionText1 );

              console.log("you clicked on the mytext1: " + d.name1 + " " + d.name2);
            });

    var p1 = label1.append('tspan');
    var p2 = label1.append('tspan');

    p1.text(function (d) { return d.name1; });
    p2.text(function (d) { return d.name2; });



		force1.on("tick", function(){
			edges1.attr("x1", function(d){ return d.source.x; })
				 .attr("y1", function(d){ return d.source.y; })
				 .attr("x2", function(d){ return d.target.x; })
				 .attr("y2", function(d){ return d.target.y; });
			nodes1.attr("cx", function(d){ return d.x; })
				 .attr("cy", function(d){ return d.y; });
			 p1.attr("x", function(d){ return d.x; })
    			 .attr("y", function (d) {return d.y - 4; });
       p2.attr("x", function(d){ return d.x; })
      			.attr("y", function (d) {return d.y + 14; });

		});
