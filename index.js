// 1. Butun son berilgan. Agar berilgan son musbat bo'lsa, 1 ga oshirilsin, aks holda o'zgartirilmasin.
let a = 5;
if(a >=0) {
    a = a + 1;
    console.log("1.Berilgan son musbat" , + a);
}else {
    console.log("1.Berilgan son manfiy" , + a);
}

// 2. Butun son berilgan, agar berilgan son musbat bo'lsa 1 ga oshiring, agar manfiy bo'lsa 2 ga kamaytiring.
let b = -3;
if(b >= 0) {
    b = b + 1;
    console.log("2.Berilgan son musbat bo'lgani uchun 1 ga oshirildi" , + b);
}else {
    b = b - 2;
    console.log("2.Berilgan son manfiy bo'lgani uchun 2 ga kamaytirildi" , + b);
}

// 3. Butun son berilgan. Agar berilgan son musbat bo'lsa, 1 ga oshiring, agar manfiy bo'lsa 2 ga kamaytiring. Agar 0 ga teng bo'lsa, 10 ni o'zlashtirsin.
let c = 0;
if(c > 0) {
    c = c + 1;
    console.log("3.Berilgan son musbat bo'lganligi uchun 1 ga oshirildi" , + c);
}else if(c == 0){
        c = 10;
        console.log("3.Berilgan son 0 ga teng bo'lgani uchun 10 nu o'zlashtirdi" , + c)
    }
else {
    c = c - 2;
    console.log("3.Berilgan son manfiy bo'lgani uchun 2 ga kamaytirildi" , + c);
}

// 4. Uchta son berilgan, shu sonlar orasida nechta musbat son borligini aniqlovchi programma tuzilsin.
let d = 1;
let e = -1;
let f = 2;
let soni = 0;
if(d >= 0) {
    soni += 1;
}
if(e >= 0) {
    soni += 1;
}
if(f >= 0) {
    soni += 1;
}
if(soni !== 0) {
    console.log("4.Berilgan 3 ta sondan " + soni + " tasi musbat");
}else{
    console.log("4.Berilgan sonlarning barchasi manfiy");
}

// 5. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va nechta manfiy son borligini aniqlovchi programma tuzilsin.
let q = 2; 
let w = -3; 
let musbat = 0;
if(q > 0){
   musbat += 1;
}
if(w > 0){
   musbat += 1;
}
if(e > 0){
   musbat += 1;
}
if(musbat !== 0){
   console.log("5. Berilgan 3 ta sondan " + musbat + " tasi musbat " + (3 - musbat) + " tasi manfiy");
}else{
   console.log("5. Berilgan 3 ta sonning hammasi manfiy");
}

// 6. Ikkita butun son berilgan.Shu sonlarning kattasini aniqlovchi programma tuzilsin.
let r = 8;
let t = 7;
if(r > t){
   console.log("6. Birinchi son katta");
}else if(r === t){
   console.log("6. Ikkala son o'zaro teng");
}else{
   console.log("6. Ikkinchi son katta");
}

// 7. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
let y = 11; 
let u = 12;
if(y > u){
   console.log("7. Birinchi raqam katta");
}else{
   console.log("7. Ikkinchi raqam katta");
}

// 8. Ikkita butun son berilgan. shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.
let i = 4;
let o = 5;
if(i > o){
   console.log("8. Kattasi " + i + " kichigi " + o);
}else{
   console.log("8. Kattasi " + o + " kichigi " + i);
}

// 9. A va B haqiqiy sonlari berilgan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo'lsin. A va B ning qiymati ekranga chiqarilsin.
let AA = Math.floor(Math.random() * 10);
let BB = Math.floor(Math.random() * 10);
if(AA === BB){
   BB += 1;
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}
if(AA > BB){
   f = AA;
   AA = BB;
   BB = f;
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}else{
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}

// 10. A va B butun sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B o'zgaruvchilari ularning yig'indisini o'zlashtirsin. Agar teng bo'lsa, 0 ni o'zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
let g = Math.floor(Math.random() * 10);
let h = Math.floor(Math.random() * 10);
if(g !== h){
   let yigindi = g + h;
   g = yigindi;
   h = yigindi;
   console.log("10. Sonlarning qiymati teng emas va yig'indisiga almashtirildi: " + g + "  " + h);
}else{
   g = 0;
   h = 0;
   console.log("10. Sonlarning qiymati o'zaro teng va qiymati 0 ga almashtirildi: " + g + "  " + h);
}3