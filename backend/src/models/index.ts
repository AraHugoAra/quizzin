import { User } from "./User";
import { Answer } from "./Answer";
import { Category } from "./Category";
import { Quiz } from "./Quiz";
// import { Quiz_Participation } from "./Quiz_Participation";
import { Quiz_Participation } from "./Quiz_Participation";
import { Score } from "./Score";

// relation with Users table
// User.hasOne(Answer, {foreignKey : 'userId'})
// Answer.belongsTo(User);

// User.hasOne(Score, {foreignKey : 'userId'})
// Score.belongsTo(User);

// User.hasMany(Quiz_Participation);
// User.hasMany(Score);

//relation with Categories table
// Category.hasOne(Answer);

//relation with Quiz table
// Quiz.hasOne(Quiz_Participation);






// Answer.hasOne(User, { foreignKey: "id" });
// User.belongsTo(Answer, { foreignKey: "id" });

// Answer.hasOne(Category, { foreignKey: "id" });
// Category.belongsTo(Answer, { foreignKey: "id" });

// Quiz_Participation.hasOne(User, { foreignKey: "id" });
// Quiz_Participation.hasOne(Quiz, { foreignKey: "id" });

// User.belongsTo(Quiz_Participation, { foreignKey: "id" });
// Quiz.belongsTo(Quiz_Participation, { foreignKey: "id" });

// Score.hasOne(User, { foreignKey: "id" });
// User.belongsTo(Score, { foreignKey: "id" });

// export { User, Answer, Category, Quiz, Quiz_Participation, Score };
export {User,  Answer, Category, Quiz_Participation, Quiz , Score };
