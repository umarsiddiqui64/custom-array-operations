// Function to flatten user profile
function flattenProfile(userProfile) {
    const {
        name,
        address: { city, country, coordinates },
        contact: { phone, email },
        preferences: { notifications }
    } = userProfile;

    return {
        name,
        city,
        country,
        phone,
        email,
        coordinates,
        notifications
    };
}

// Example object
const userProfile = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
        postalCode: '10001',
        coordinates: {
            lat: 40.7128,
            long: -74.0060
        }
    },
    contact: {
        phone: '123-456-7890',
        email: 'john@example.com'
    },
    preferences: {
        newsletter: true,
        notifications: {
            email: true,
            sms: false
        }
    }
};

// Testing the function
const flattened = flattenProfile(userProfile);
console.log(flattened);
