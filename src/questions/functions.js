const userObject = {
    name: 'Jason',
    age: 28,
}

// The user must be over 18 and their name must be more than 4 characters long
const checkUserMeetsRequirement = (user) => {
    if (user.age > 18) {
        if (user.name.length > 4) {
            return true;
        }
        return false;
    }
    return false;
};

// === TEST ===
// How would you re-write this function to make it more concise?
