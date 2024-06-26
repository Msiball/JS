
import bcrypt from "bcrypt";


///async function can be done in diff times and can use the keyword await so that the function wants till whatever happens in as per await function
/// try and catch the error is used to run a function and catch the error

//used to authenticate a user
function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserbyEmail(email, password)
    if (!user) {
        return done(null, false{message: "Invalid email"});
      }
      try {
        if (await bcrypt.compare(password, user.password)){
            return done(null, false, { message: "Invalid password" });
        } 
      }
      catch (err) {
        console.error(err);
        return done(err);
      }
}};
