const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getTestMessage = async () => {
    const response = await fetch(`${API_URL}/test`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.message;
};

export const echoMessage = async (message) => {
    const response = await fetch(`${API_URL}/test/echo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.echoedMessage;
};