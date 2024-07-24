function Button(){

    function clickHandler(nama){

        alert('oke')

        console.log('ok ' + nama);
    }

    return (
        <button onClick={()=> clickHandler('Priana')}>Beli</button>
    )
}

export default Button