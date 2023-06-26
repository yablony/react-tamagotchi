function TestSolution() {
    const userInput = document.querySelector('textarea');

    const solution = () => {
        if (userInput !== null) {
            let userInputText = userInput.value;
            return eval(userInputText);
        }
    }
    if (userInput !== null) {
        let userInputText = userInput.value;
    }

    return (
        <p>{solution}</p>
    )
}

export default TestSolution;