import { User } from "./User";
import { Answer } from "./Answer";
import { Category } from "./Category";
import { Quiz } from "./Quiz";
// import { Quiz_Participation } from "./Quiz_Participation";
import { Quiz_Participation } from "./Quiz_Participation";
import { Score } from "./Score";

// relation with Users table
// Answer
User.hasOne(Answer, {foreignKey : 'userId'});
Answer.belongsTo(User, {foreignKey : 'userId'});

// Score
User.hasOne(Score, {foreignKey : 'userId'})
Score.belongsTo(User, {foreignKey : 'userId'})

// relation with Categories table
// Answer
Category.hasOne(Answer, {foreignKey : 'categoryId'});
Answer.belongsTo(Category, {foreignKey : 'categoryId'});

//relation with Quiz table
// Quiz_Participation
Quiz.hasOne(Quiz_Participation, {foreignKey : 'quizId'});
Quiz_Participation.belongsTo(Quiz, {foreignKey : 'quizId'});
//Answer
Quiz.hasOne(Answer, {foreignKey : 'quizId'});
Answer.belongsTo(Quiz, {foreignKey : 'quizId'});



export {User, Category, Answer, Score, Quiz, Quiz_Participation};
