# Milestone02_K18

### Kelompok 18 - PrestasIN

Azmi Alfatih Salahuddin (16520001), Landing page<br/>
Rozan Fadhil Al Hafidz (16520141), Landing page<br/>
Maria Khelli (16520184), Sistem dan tampilan register dan login page<br/>
Hafidz Nur Rahman Ghozali (16520186), Membuat Navbar, Membuat ChatBox<br/>
Ubaidillah Ariq Prathama (16520308), Timeline<br/>
Alifia Rahmah (16520309), Social page, README.md<br/>
Mahesa Lizardy (16520362), Membuat template tampilan halaman Chat<br/>
Fransiskus Davin Anwari (16520405), Dashboard<br/>
Kent Liusudarso (16520477), Timeline<br/>
Thomas Stefen Mardianto (16520498), Dashboard<br/>

Catatan: Untuk timeline belum diroute ke react, jadi berantakan. Tampilan timeline ada di folder non_react

# Manual (Development)
Prereq: Install npm atau yarn setelah clone pertama kali

## npm
Setelah clone,
```
npm i
```
Tengok aplikasi
```
npm start
```

## yarn
setelah clone,
```
yarn add .
```

Tengok aplikasi (buka dua terminal)
```
yarn start
yarn start-api
```

# Run Backend Server (Flask)

## Activate Virtual Environment
Dari folder `MileStone_K18`,
```
cd backend/myenv/Scripts
activate
```
Jika berhasil, di terminal bisa terlihat (myenv) di awalan
```
(myenv) C:\...\Milestone02_K18
```

## Configure pyenv.cfg
in `backend/myenv/Scripts/pyvenv.cfg`
```
home = C:\Python39
include-system-site-packages = false
version = 3.9.5
```
Kalo lokasi Python di variabel `home` tidak sesuai dengan konfigurasi di PC, ganti dengan path sendiri (cari dari File Explorer)

## Start Server
1. Copy `python.exe` path from `backend/myenv/Scripts/python.exe`
2. Copy in terminal
3. Copy `run.py` path from `backend/myenv/run.py`
4. Copy in terminal

Setelah dicopy, seharusnya pathnya seperti ini
```
(myenv) C:\...\Milestone02_K18> C:\...\Milestone02_K18\backend\myenv\Scripts\python.exe C:\...\Milestone02_K18\backend\myenv\run.py
```
Setelah di-enter, harusnya bisa, di terminal tampilan seperti ini
```
...
* Debugger is active!
* Debugger PIN: 266-661-179
* Running on all addresses.
  WARNING: This is a development server. Do not use it in a production deployment.
* Running on http://192.168.100.5:5000/ (Press CTRL+C to quit)
```
