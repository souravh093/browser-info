// alert('How are you?');
const showAlert = () => {
    alert('Dosto taka asa dar dita parbi, just 500')
}

const lendMoney = () => {
    const result = confirm('Will you lend me 500 takas?');
    console.log(result);
    if (result === true) {
        alert("Tui amer dosto na toi amer vai kasa ai")
    }else {
        alert("DGM... toka ajka bolck mara dimu")
    }
}

const getInfo = () => {
    const num = prompt('What is your name?')
    if (num === null) {
        alert('Nam da tor');
    }else {
        alert(`Welcome ${num}`)
    }
}