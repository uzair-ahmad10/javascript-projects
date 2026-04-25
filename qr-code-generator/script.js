
const genBtn = document.querySelector(".genBtn");
const dlBtn = document.querySelector(".dlBtn");
const qrImg =  document.querySelector(".qrImg");
const input = document.querySelector("input");

genBtn.addEventListener('click', ()=>{
    const inputText  = input.value;
    let URL_API = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
    
    if(inputText === ''){
        alert("Please Write Something");
        return;
    }

    qrImg.src = URL_API;
    qrImg.style.display = 'block';

    dlBtn.style.display = 'inline-block';

});

dlBtn.addEventListener('click', async () => {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "qr-image.png";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
});

 
