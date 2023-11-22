import { User } from "./User";
import { Training_Answer } from "./Training_Answer";
import { Category } from "./Category";
import { Quiz } from "./Quiz";
// import { Quiz_Participation } from "./Quiz_Participation";
import { Quiz_Answer } from "./Quiz_Answer";
import { Quiz_Participation } from "./Quiz_Participation";
import { Score } from "./Score";

// relation with Users table
// Training_Answer
User.hasOne(Training_Answer, { foreignKey: "userId" });
Training_Answer.belongsTo(User, { foreignKey: "userId" });

// Score
User.hasOne(Score, { foreignKey: "userId" });
Score.belongsTo(User, { foreignKey: "userId" });

// relation with Categories table
// Training_Answer
Category.hasOne(Training_Answer, { foreignKey: "categoryId" });
Training_Answer.belongsTo(Category, { foreignKey: "categoryId" });

//relation with Quiz table
// Quiz_Participation
Quiz.hasOne(Quiz_Participation, { foreignKey: "quizId" });
Quiz_Participation.belongsTo(Quiz, { foreignKey: "quizId" });
//Quiz_Answer
Quiz.hasOne(Quiz_Answer, { foreignKey: "quizId" });
Quiz_Answer.belongsTo(Quiz, { foreignKey: "quizId" });

export {
  User,
  Category,
  Training_Answer,
  Score,
  Quiz,
  Quiz_Answer,
  Quiz_Participation,
};
