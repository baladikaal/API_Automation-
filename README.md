# API Automation

Testing API Automation


## Persiapan

- Node.js dan NPM
- Babel (ES6+)
- SuperTest
- Mocha
- Chai



## Testing

- URL API Testing : http://api.weatherbit.io/v2.0
- GET /current?lat={lat}&lon={lon} : lat = `40.730610` dan lon = `-73.935242`
- GET /forecast/3hourly?postal_code={postal_code}  : code = `28546`



## How To Install

- Install Node.Js dan Npm

- Buka Commad Promt dan ketikkan perintah dibawah,jika berhasil akan menampilkan pesan versi yang di gunakan:

  `C:\Users\balal>node -v`
  `v16.13.0`
  
- Selanjutnya ketikkan perintah di bawah untuk periapan library yang akan di gunakan
  
  `npm init` atau secara default `npm init -y`
  `npm i --save-dev supertest mocha @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`

- Jika semua persiapan sudah selesai, maka jalankan program dengan perintah dibawah

  `npm test`
