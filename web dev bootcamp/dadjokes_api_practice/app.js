const jokes = document.getElementById('jokes');
const btn = document.querySelector('button');
btn.addEventListener('click', async() => {
        try{
            const config = { headers: {Accept: 'application/json'} }; 
            const res = await axios.get('https://icanhazdadjoke.com/', config);
            console.log(res.data.joke);
            const newLI = document.createElement('LI');
            newLI.append(res.data.joke);
            jokes.append(newLI);
        }catch(e){
            console.log('error',e);
        }
})
