//ใช้นับตัวอักษรที่เราพิมพ์ไป
const count = document.querySelector('.count')
const input = document.querySelector('input')
//ดักจับอีเว้นที่อยู่ในช่องป้อนข้อความชื่ออีเว้นว่า keyup เพราะเรามีการคีย์ข้อมูลลงไปเพื่อนับ
input.addEventListener("keyup",()=>{
    count.innerHTML = input.value.length //แสดงตัวเลขมาจากค่าของอินพุตทั้งหมดที่ผู้ใช้กรอก
})