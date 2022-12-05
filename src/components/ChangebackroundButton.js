import 'bootstrap/dist/css/bootstrap.min.css';

function BackroundChanger() {

    function randomColor(){

        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;   
    }

    return (
        <button type="button" class="changeColor btn btn-warning" onClick={randomColor}>~</button>
    )
}

export default BackroundChanger;