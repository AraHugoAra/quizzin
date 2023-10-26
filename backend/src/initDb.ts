import { User , Category ,Answer, Score ,Quiz, Quiz_Participation} from "./models";
import { synchronizeDb } from "./dbConfig";

synchronizeDb();

const createUser = async () => {
    await User.create({ userName: "test" });
  };
  const createCategory = async ()=> {
    await Category.create({ categoryName: "Geo" });
  }
  const createScore = async ()=> {
    await Score.create({userId : 1, weeklyScore: 100 }); 
  }
  const createQuiz = async ()=> {
    await Quiz.create({ questions: {"question" : "reponse"}, date : '2023-06-01T00:00:00Z', quizType : 'daily'});
  }
  const createQuizPArticipation = async ()=> {
    await Quiz_Participation.create({userId : 1, quizId : 1});
  }
  const createAnswer = async ()=> {
    await Answer.create( {userId : 1, categoryId : 1 , quizId :1, difficulty : 'easy', question : 'Mais QUI ?', isCorrect : true, duration : 1, date : '2023-06-01T00:00:00Z'});
  }
  
  setTimeout(()=> {
    createUser();
  }, 1000)
  
  setTimeout(()=> {
    createCategory();
  }, 1500)
  
  setTimeout(()=> {
    createScore();
  }, 2000)
  
  setTimeout(()=> {
    createQuiz();
  }, 2500)
  setTimeout(()=> {
    createQuizPArticipation();
  }, 3000)
  setTimeout(()=>{
    createAnswer();
  }, 3500)

  synchronizeDb();