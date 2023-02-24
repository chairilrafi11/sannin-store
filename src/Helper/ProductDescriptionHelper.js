let instance;

class ProductDescriptionHelper {
    constructor(){
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }
        instance = this;
    }

    findProductDescription = (kode) => {
        switch (kode) {
            case "mobile-legends":
                return <p>
                    TopUp Mobile Legends<br/>
                    Cara Order :<br/><br/>
                    
                    &emsp;1 .Masukkan ID  & SERVER Anda<br/>
                    &emsp;2. Pilih Nominal TopUp<br/>
                    &emsp;3. Pilih Metode Pembayaran<br/>
                    &emsp;4. Masukan Nomor WhatsApp Untuk Notifikasi<br/>
                    &emsp;5. Klik Beli & Bayar Transaksi<br/>
                    &emsp;6. Pastikan Semua Data <b>BENAR!!</b><br/>
                    &emsp;7. Tunggu Hingga Diamond masuk ke akun Anda.<br/>
                    </p>;
            default:
                break;
        }
    }
}

let productDescriptionHelper = Object.freeze(new ProductDescriptionHelper());

export default productDescriptionHelper;