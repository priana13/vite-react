
import "./MenuResto.css"

function MenuResto(){

	const isMakanan = false;

	const isFree = true;
	

	return (
			<div className="menu-item"> 
				<div>
					Menu: Nasi Bakar
				</div>

				{(isMakanan == true) ? (<div>Makanan</div>) : (<div>Minuman </div>)}

				{(isFree == false) && (<div>Harga: 75.000</div>)}

			</div>
		)

}

export default MenuResto