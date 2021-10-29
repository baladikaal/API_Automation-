// Memanggil library supertest
import supertest from 'supertest';

// Set URL yang digunakan
const url = supertest('https://api.weatherbit.io/v2.0/');

// API saya
const My_TOKEN = 'cf4cc717d13f400890e003a659279063';

// Untuk Case A
const lat = '40.730610';
const lon = '-73.935242';

// Untuk Case B
const post_code = '28546';

describe('Testing', () => {

    // GET untuk Case A
    it('GET /current?lat={lat}&lon={lon}', () => {
        return url.get(`current?lat=${lat}&lon=${lon}&key=${My_TOKEN}`).end((err,res) => {
            console.log(err);
            console.log(res.body);
        });
    });

    // GET untuk Case A dan B di jalankan bersamaan 
    // it('GET /current?lat={lat}&lon={lon}', () => {
    //     return url.get(`current?lat=${lat}&lon=${lon}&key=${My_TOKEN}`).then((err,res) => {
    //         console.log(err);
    //         console.log(res.body);
    //     });
    // });

    // GET untuk Case B
    // Terjadi error, karena tidak diizinkan. jika dijalankan link :
    // :https://api.weatherbit.io/v2.0//forecast/3hourly?postal_code=28546&key=cf4cc717d13f400890e003a659279063 (menampilkan pesan : Your API key does not allow access to this endpoint) 
    // it('GET /forecast/3hourly?postal_code={postal_code}', () => {
    //     return url.get(`forecast/3hourly?postal_code=${postal_code}&key=${TOKEN}`).end((err,res) => {
    //         console.log(err);
    //         console.log(res.body);
    //     });
    // });

    // Namun dapat diakses jika menggunakan link berikut:
    // https://api.weatherbit.io/v2.0/current?postal_code=28546&key=cf4cc717d13f400890e003a659279063
    // GET untuk Case B
    // it('GET /current?postal_code={post_code}', () => {
    //     return url.get(`current?postal_code=${post_code}&key=${My_TOKEN}`).end((err,res) => {
    //         console.log(err);
    //         console.log(res.body);
    //     });
    // });

    // NOTE : Pilih salah satu untuk Case B

});