# API Automation

Testing API Automation


## Persiapan

- Node.js dan NPM
- Babel (ES6+)
- SuperTest
- Mocha
- Chai
- Postman ( option )



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
  
  `npm init -y` atau secara default `npm init -y`
  
  `npm i --save-dev supertest mocha @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`

- Jika semua persiapan sudah selesai, maka jalankan program dengan perintah dibawah

  `npm test`

## Testing dengan Postman

- Case A

<img src="https://user-images.githubusercontent.com/74690318/139427770-ebf7f999-154d-4948-9f7d-3921d44f1721.png" width="500">

-Case B

<img src="https://user-images.githubusercontent.com/74690318/139428079-206b2fe5-3987-4f98-8022-d3214d5d505e.png" width="500">
