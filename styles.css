@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
    --dark-orange: #a65238;
    --rose: #ff8982;
    --white: #fff;
    --font: 'Poppins', sans-serif;
    --green: #66bb6a; 
    --light-red: #ff7e7e;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font);
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #e97b5e, #ffb696);
    animation: backgroundAnimation 20s linear infinite;
}

@keyframes backgroundAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.container {
    position: relative;
    top: 65px;
    width: 600px;
    height: 800px;
    box-shadow: 3px 7px 15px -2px rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.9);
}

.container h1 {
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: var(--dark-orange);
}

.container .inputTarea {
    width: 100%;
    outline: none;
    padding: 10px;
    border: 2px solid var(--dark-orange);
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.container ul {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
}

.container ul li {
    background: var(--light-red);
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    color: var(--dark-orange);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container ul li.completed {
    background: var(--green);
    text-decoration: line-through;
}

input[type="checkbox"] {
    width: 25px;
    height: 25px;
    appearance: none;
    border: 2px solid var(--rose);
    background: var(--white);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    margin-right: 10px;
}

input[type="checkbox"]:checked {
    background: var(--rose);
}

input[type="checkbox"]:checked::before {
    content: "✓";
    display: inline-block;
    width: 25px;
    height: 25px;
    font-size: 1.2em;
    text-align: center;
    color: var(--white);
}

.delete {
    display: flex;
    padding: 3px;
    background: #d10000;
    border-left: 5px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 5px;
}

.delete ion-icon {
    color: var(--white);
}

p {
    max-width: 250px;
}

.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.loader::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid var(--dark-orange);
    border-top: 5px solid var(--rose);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.tasks-container {
    display: flex;
    justify-content: space-between;
}

.task-section {
    flex: 1;
    padding: 10px;
}

.task-section h2 {
    font-size: 1.2em;
    color: var(--dark-orange);
    text-transform: uppercase;
}
