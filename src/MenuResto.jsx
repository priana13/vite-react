
import { useMemo, useState } from "react";
import Button from "./Button";
import "./MenuResto.css"

function MenuResto(){

	const isMakanan = false;

	const isFree = true;

	const [counter , setCounter] = useState(0);
	const menu = [
		 { nama: 'Nasi Bakar', harga: 'Rp. 10.000'}				
		];
	
	const pesanLike = () => {
		setCounter(counter + 1);
	}	

	const displayPesanLike = useMemo(() => pesanLike() , []);

	return (
			<div> 
				

				{(isMakanan == true) ? (<div>Makanan</div>) : (<div>Minuman </div>)}

				{(isFree == false) && (<div>Harga: 75.000</div>)}


				{
					menu.map((item , index)=> {
						return (
								<div className="menu-item" key="{index}">
									Menu: {item.nama} - 
									Harga: {item.harga} <br/>

									<Button label="Like" />

									<button onClick={()=> pesanLike()}>Subscribe ({counter})</button>
								</div>
							)
					})
				}

			</div>
		)

}

export default MenuResto