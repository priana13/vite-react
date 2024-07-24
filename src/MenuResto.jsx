
import "./MenuResto.css"

function MenuResto(){

	const isMakanan = false;

	const isFree = true;

	const menu = [
		 { nama: 'Nasi Bakar', harga: 'Rp. 10.000'},
		 { nama: 'Mie Ayam', harga: 'Rp. 15.000'},
		 { nama: 'Ayam Bakar', harga: 'Rp. 17.000'},
			
		];
	

	return (
			<div> 
				

				{(isMakanan == true) ? (<div>Makanan</div>) : (<div>Minuman </div>)}

				{(isFree == false) && (<div>Harga: 75.000</div>)}


				{
					menu.map((item , index)=> {
						return (
								<div className="menu-item" key="{index}">
									Menu: {item.nama} - 
									Harga: {item.harga}
								</div>
							)
					})
				}

			</div>
		)

}

export default MenuResto