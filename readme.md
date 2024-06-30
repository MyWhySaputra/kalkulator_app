# Kalkulator App

- install package
```
npm install
```

- jalankan
```
npm run web
```

# Tentang App

- **Kalkulator App** adalah aplikasi sederhana yang menyediakan fitur perhitungan matematika dan mencatat hasil perhitungan yang dilakukan oleh pengguna. Aplikasi ini dibangun menggunakan React dan React Native.

# Tujuan

- Menyediakan aplikasi kalkulator yang mudah digunakan dengan fitur riwayat perhitungan.
- Memanfaatkan teknologi modern seperti React, React Native, dan AsyncStorage untuk menyimpan data secara lokal.

# Fitur

- **Home**: Fitur kalkulator untuk melakukan perhitungan dasar.
- **History**: Fitur untuk menampilkan riwayat perhitungan yang telah dilakukan.

# Spesifikasi

## Module yang di gunakan

- **react**
  - Dasar untuk membuat komponen React.

- **react-native**
  - **Text**: Untuk menampilkan teks.
  - **StyleSheet**: Untuk membuat gaya CSS.
  - **View**: Container untuk menata tata letak komponen lain.
  - **FlatList**: Untuk menampilkan daftar data.
  - **TextInput**: Untuk input teks.
  - **Button**: Untuk membuat tombol interaktif.

- **@react-navigation/native**
  - **NavigationContainer**: Untuk membungkus seluruh navigasi aplikasi.
  - **useFocusEffect**: Hook untuk menambahkan efek fokus pada screen.

- **@react-navigation/bottom-tabs**
  - **createBottomTabNavigator**: Untuk membuat navigasi tab bawah.

- **@react-navigation/native-stack**
  - **createNativeStackNavigator**: Untuk membuat navigasi stack native.

- **@expo/vector-icons**
  - **Feather**: Ikon dari Feather yang digunakan dalam aplikasi Expo.

- **@react-native-async-storage/async-storage**
  - **AsyncStorage**: Untuk menyimpan dan mengambil data secara asinkron di penyimpanan lokal.

# Tahapan pengerjaan

- **Inisialisasi Proyek**: Menginstal semua dependensi yang diperlukan.
- **Membuat Komponen Kalkulator**: Membuat layar kalkulator di *Home* dan menambahkan fungsi perhitungan.
- **Menyimpan Riwayat Perhitungan**: Menggunakan AsyncStorage untuk menyimpan hasil perhitungan secara lokal.
- **Menampilkan Riwayat Perhitungan**: Membuat layar *History* untuk menampilkan riwayat perhitungan dalam bentuk daftar.
- **Navigasi**: Mengatur navigasi antara layar *Home* dan *History* menggunakan react-navigation.

# Kendala yang dihadapi

- **Pengelolaan State**: Mengelola state untuk form input dan hasil perhitungan di layar kalkulator.
- **Penyimpanan Data**: Menyimpan dan mengambil data secara asinkron menggunakan AsyncStorage.
- **Navigasi**: Mengatur navigasi yang lancar antara layar *Home* dan *History*.

# Kesimpulan

- Aplikasi Kalkulator ini berhasil menyediakan fitur perhitungan dasar dan penyimpanan riwayat perhitungan.
- Menggunakan teknologi modern seperti React, React Native, dan AsyncStorage memungkinkan pengembangan aplikasi yang responsif dan efisien.
- Kendala yang dihadapi dapat diatasi dengan pengelolaan state yang baik dan penggunaan modul-modul yang tepat.