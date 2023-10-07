
var userDatabase = {};

const userDashboard = {
    'nitinsokhal@gmail.com': [
        {
            id: 'uuid-1234',
            title: "BurgerKing",
            description: 'Burger King is located near Noida Electronic City Metro Station. It is good place to eat fast food.',
            imageUrl: 'http://localhost:8080/static/images/foodCourt1.jpg'
        },
        {
            id: 'uuid-12',
            title: "McDonald",
            description: "Mcdonald's Shop is located near Noida Sector 16. It is also good place to visit and eat fast food.",
            imageUrl: 'http://localhost:8080/static/images/hotel1.jpg'
        },
        {
            id: 'uuid-12345',
            title: "DucatFoodCourt",
            description: 'This hotel is located near Ducat which is in Noida Sector 16. This hotel is best for tourism to stay in this hotel.',
            imageUrl: 'http://localhost:8080/static/images/foodCourt2.jpg'
        },
        {
            id: 'uuid-12343',
            title: "Suites and Saree",
            description: 'Sandal Suites, operated by Lemon Tree Hotels, is situated just off the Noida-Greater Noida Expressway.',
            imageUrl: 'http://localhost:8080/static/images/hotel2.jpg'
        }, 
        {
            id: 'uuid-12341',
            title: "Radisson",
            description: 'Featuring a 24-hour front desk and free WiFi throughout the property, Radisson Noida also boasts an outdoor rooftop.',
            imageUrl: 'http://localhost:8080/static/images/hotel3.jpg'
        }, 
        {
            id: 'uuid-123234',
            title: "Radisson Premium",
            description: 'Featuring a 24-hour front desk and free WiFi throughout the property, Radisson Noida also boasts an outdoor rooftop.',
            imageUrl: 'http://localhost:8080/static/images/hotel5.jpg'
        }
    ]
}

const saveUser = (user) => {
    userDatabase[user.username] = user;
}

const getUserById = (id) => {
    return userDatabase[id];
}

const getDashboardData = (username) => {
    return userDashboard['nitinsokhal@gmail.com'];
}

const getDashboardDataById = (username, hotelId) => {
    return userDashboard['nitinsokhal@gmail.com'].filter((hotel)=>hotel.id === hotelId)[0];
}

module.exports = { saveUser, getUserById, getDashboardData, getDashboardDataById };