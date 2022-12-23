// Function untuk menghitung selisih hari, jam, menit, dan detik antara dua tanggal
function timeDifference(current, target) {
  // Selisih milidetik
  var difference = target - current;

  // Selisih hari
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Selisih jam (sisa dari pembagian selisih milidetik dengan jumlah milidetik per hari)
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Selisih menit (sisa dari pembagian selisih milidetik dengan jumlah milidetik per jam)
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Selisih detik (sisa dari pembagian selisih milidetik dengan jumlah milidetik per menit)
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// Function untuk menampilkan hitung mundur
function countdown() {
  // Tanggal tujuan
  var target_date = new Date("Feb 11, 2023 09:00:00");
  // Tanggal sekarang
  var current_date = new Date();

  // Selisih hari, jam, menit, dan detik antara tanggal tujuan dan tanggal sekarang
  var time_difference = timeDifference(current_date, target_date);

  // Update element HTML dengan selisih hari, jam, menit, dan detik
  document.getElementById("days").innerHTML = time_difference.days;
  document.getElementById("hours").innerHTML = time_difference.hours;
  document.getElementById("minutes").innerHTML = time_difference.minutes;
  document.getElementById("seconds").innerHTML = time_difference.seconds;
}

// Jalankan function countdown setiap 1 detik
setInterval(countdown, 1000);
