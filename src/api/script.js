const btn = document.getElementById('refresh');

async function getData() {

    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json();
        })
        .then((data => {
             getAdviceID(data.slip.id);
             updateSpanField(data.slip.advice);
        }))
}

function updateSpanField(data){
    document.getElementById('advice').innerHTML = `${data}`;
}

function getAdviceID(id){
    document.getElementById('advice-id').innerHTML = `ADVICE #${id}`
}


btn.addEventListener('click', async () => {
    await getData();
})

getData();

