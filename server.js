const express = require("express");
const app = express();
const server = require("http").Server(app);


// const port = 3000;
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


let csceObj = {"Riccardo Bettati": [["CSCE313", "CSCE410", "CSCE611"], 2.6, 4.8, 50],
                "Martin Carlisle": [["CSCE120", "CSCE121", "CSCE222", "CSCE465", "CSCE489", "CSCE704"], 4.5, 3.5, 85.3659],
                "James Caverlee": [["CSCE489", "CSCE670"], 4.4, 3, 100],
                "Christiana Chamon": [["CSCE120", "CSCE121", "CSCE206"], 4.5, 3.1, 100],
                "Theodora Chaspari": [["CSCE421"], 5, 2.5, 100],
                "Jianer Chen": [["CSCE411", "CSCE608", "CSCE629"], 2.5, 4.3, 44.4444],
                "Yoonsuck Choe": [["CPSC420", "CPSC625", "CS633", "CSCE420", "csce421"], 4, 3.9, 100],
                "Dilma Silva": [["CSCE121", "CSCE365", "CSCE410", "CSCE465"], 4.5, 3.3, 90],
                "Paula deWitte": [["CSCE402", "CSCE702"], 5, 2.5, 100],
                "Guofei Gu": [["CSCE465"], 1.9, 4.6, 12.5],
                "Ricardo Gutierrez-Osuna": [["CPSC689", "CPSCSECT", "CSCE000", "CSCE481", "CSCE482", "CSCE491", "CSCE630", "CSCE681"], 1.6, 2.5, 40],
                "Drew Hamilton": [["CSCE410", "CSCE611"], 2, 3.5, 100],
                "Tracy Hammond": [["CSCE222", "CSCE482", "CSCE689"], 2.1, 3.6, "n/a"],
                "Maristela Holanda": [["CSCE121"], 3.1, 3.9, 100],
                "Ruihong Huang": [["CSCE470", "CSCE638"], 2.3, 3, 40],
                "Thomas Ioerger": [["CSCE121", "CSCE420"], 4.5, 2.8, 100],
                "Shuiwang Ji": [["CSCE636"], 1.9, 5, 25],
                "Anxiao Jiang": [["CPSC222", "CSCE222", "CSCE411", "CSCE629", "CSCE689"], 4.5, 3.3, 90],
                "Daniel Jimenez": [["CSCE614"], 4.5, 3.5, 100],
                "Nima Kalantari": [["CSCE441", "CSCE489"], 3.4, 2.9, 80],
                "John Keyser": [["CSCE181", "CSCE430"], 4.9, 2.9, 100],
                "Eun Kim": [["CSCE312", "CSCE614"], 4.3, 4.3, 72.7273],
                "Jeeeun Kim": [["CSCE436", "CSCE667"], 2.3, 1.5, 83.3333],
                "Andreas Klappenecker": [["CSCE222", "CSCE311", "CSCE411", "CSCE629"], 2.5, 4.4, 41.6667],
                "Alan Kuhnle": [["CSCE222"], 2, 5, "n/a"],
                "Sandeep Kumar": [["CSCE111", "CSCE222"], 3.3, 4.4, 100],
                "Hyunyoung Lee": [["CSCE222", "CSCE314"], 2.5, 4.2, 44],
                "Teresa Leyk": [["CPCS221", "CPCS222", "CPSC211", "CPSC211311", "CPSC221", "CPSC311", "CSCE121", "CSCE206", "CSCE221", "CSCE221222", "CSCE222"], 4.4, 4, 69.8795],
                "Robert Lightfoot": [["CSCE111", "CSCE121", "CSCE315", "CSCE412"], 4.1, 2.7, 95.6522],
                "Jyh Liu": [["CSCE451", "CSCE462"], 1.5, 4, 37.5], "Dmitri Loguinov": [["CSCE313", "CSCE463"], 5, 4.5, 100],
                "Shawn Lupoli": [["CMSC104", "CMSC151", "CMSC201", "CMSC331", "CMSC341", "CMSC433", "CSC201", "CSCE221"], 3.4, 3.4, 61.9048],
                "Rabi Mahapatra": [["CPSC321", "CPSC489", "CSCE312", "CSCE350", "CSCE462", "CSCE482", "CSCE617"], 1.8, 3.9, "n/a"],
                "Michael Moore": [["CSCE121", "CSCE221", "CSCE436", "CSCE489", "CSCE689"], 2.6, 3.6, 57],
                "Bobak Mortazavi": [["CSCE421"], 3.4, 4.3, 57.1429],
                "Robin Murphy": [["CSCE483", "CSCE625"], 1.3, 3.7, "n/a"],
                "Abdullah Muzahid": [["CSCE312", "CSCE350"], 2.4, 4.1, 42.8571],
                "Jason O' Kane": [["CSCE215", "CSCE350", "CSCE374", "CSCE574", "CSCE750", "CSCE774"], 4.4, 3.1, 81.8182],
                "Michael Quinn": [["CSCE121", "CSCE689"], 3, 3.6, 60], 
                "Philip Ritchey": [["CSCE121", "CSCE221", "CSCE221H", "CSCE222", "CSCE489", "CSCE689", "CSCE701", "ENGR111", "ENGR112"], 2.7, 4.2, 38.9831],
                "Vivek Sarin": [["CPSC442", "CSCE222", "CSCE435", "CSCE735", "ENGR111"], 4.3, 2.9, 100],
                "Scott Schaefer": [["CSCE181", "CSCE221","CSCE221H", "CSCE441"], 4.8, 1.7, 100],
                "Dylan Shell": [["CSCE121", "CSCE314", "CSCE420", "CSCE482"], 3.1, 4.1, 51.4286],
                "Frank Shipman": [["CSCE445", "CSCE477", "CSCE679"], 5, 1.8, 100],
                "Radu Stoleru": [["CSCE410", "CSCE438", "CSCE464", "CSCE662"], 4.8, 4.1, 100],
                "Shinjiro Sueda": [["CSCE441", "CSCE489"], 4.9, 3.8, 90.9091],
                "Sing-Hoi Sze": [["BICH419", "CSCE222", "CSCE411", "CSCE629"], 5, 3, 100],
                "Paul Taele": [["CSCE120", "CSCE121", "CSCE315"], 5, 4.3, 92.6829],
                "Shawna Thomas": [["CSCE315", "CSCE411"], 5, 3.3, 100],
                "Aakash Tyagi": [["CSCE181", "CSCE221", "CSCE312", "CSCE313", "CSCE314"], 5, 4.6, 96.7213],
                "Pauline Wade": [["CSCE431", "CSCE482", "ENGR181", "ENGR181H", "ENGR381"], 1.4, 3.2, 10.3448],
                "Duncan Walker": [["ECEN680"], 4, 3, "n/a"],
                "Ronald Ward": [["CSCE222"], 2.3, 4, "n/a"],
                "Ki Hwan Yum": [["COS206", "CSCE110", "CSCE206", "CSCE312"], 2.8, 3.6, 60]};


var profObj = {};
var department;
var courseNum;
var generatedText;

app.get("/", (req, res) => {
  res.render('index', { department, courseNum });
});

app.use(express.urlencoded({ extended: true }))
app.post("/process_form", (req, res) => {
  department = req.body["department"];
  courseNum = req.body["courseNum"];
  const OpenAI = require("openai");

    async function main() {
      const openai = new OpenAI({
        apiKey: "Enter API key.",
      });
    
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `Give me a course desccription of ${department}${courseNum} at Texas A&M University. Make this a single concise paragraph.` }],
        model: "gpt-3.5-turbo",
      });

      generatedText = chatCompletion.choices[0].message.content;
  
      console.log(generatedText);

      io.emit('textGenerated', generatedText); // This will send data to all connected clients

    
      // Use chatCompletion as needed
    }
    
    main().catch((error) => {
      console.error(error);
    });


  for (const key in csceObj) {
    if (csceObj.hasOwnProperty(key)) {
      var profData = csceObj[key];
      var rating = profData[1];
      // console.log(rating);
      var courses = profData[0];
      var difficulty = profData[2];
      var wouldTake = profData[3];
      for (const j in courses) {
        var className = courses[j];
        // console.log(className);
        if (className == `${department}${courseNum}`) {
          var profName = key;
          
          const newProperties = {
            [key]: [rating, difficulty, wouldTake],
          };
  
          profObj = { ...profObj, ...newProperties };
  
        }
      }
    }
    
  }
  console.log(profObj);
  
  // Handle incoming socket connections
  const socketIo = require('socket.io');
  const io = socketIo(server);
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Define a custom event to send an object to the client
    socket.emit('objectData', profObj);

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  res.render("process-form", { department, courseNum });
});




server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})