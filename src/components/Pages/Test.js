function TestSolution({ testResult }) {
    console.log('Test component has run')
    return (
        <section className="test-result">
            <label>You can test your code here, but it's best to be done in the console</label>
            <p><b>Output</b>: {testResult}</p>
        </section>
    )
}

export default TestSolution;