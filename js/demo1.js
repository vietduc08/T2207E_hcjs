var x;  // bien la du lieu dong boi vi bo nho khong lay tài nguyên của máy tính mà lấy của trình duyệt
        // trình duyệt sẽ lấy của máy tính sau.
        // Biến x lúc khai báo thì chưa được cấp phát ô nhớ, chỉ khi nào có dữ liệu mới sử dụng ô nhớ.
x=10;
var y=20;
x="hello";
var k=x+y;



// hello + 5 = hello5
//4+ helle = 4hello
// hello + hi = hellohi
console.log(k);
var t=true;// false
for(var i=0;i<10;i++){
    console.log("i="+i);

}
// mảng bên js la một tập hợp nhưng các phần tử ko cần giống nhau về kiểu dữ liệu
// mảng là giá trị gói trong một ô nhớ của biến
// kích thước mảng không cần dưới hạn vì cấp phát động
var ar=[];
ar[0]=1;// số
ar.push(10);//số
ar.push("hello");// chuỗi
ar.push([]);// mảng khác
// duyệt mảng theo chỉ mục (index)
for(var i=0;i<ar.length;i++){
    console.log(ar[i]);
}
// duyệt mảng theo kiểu xét từng phần phần tử
ar.map(xyz=>{
    console.log(xyz);//xyz là một biến đai diện cho phần tử đang được xét từ đầu đến cuối
});
// hàm
var tk=tinhtong(5,3);
var tk2=tinhtong("hello", 10);
function tinhtong(a,b){
    return a+b;
}
console.log(tk);// hàm in ra màn hình console
console.log(tk2);

function demo (){
    console.log("hello");
}
//setTimeout(demo,3000);//chức năng sau khoảng thời giam 3000ms sẽ chạy hàm demo, callback function
//setInterval(demo,3000);// sau khoảng thời gian 3000 thực hiện một lần và làm đi làm lại.
console.log("ABC...");
var n=10;
function countdown(){
    var xxze = document.getElementById("head");// quy doi head bên html thành xxze bên js
    xxze.innerText=n;// tác động vào n tương đương tác động và xxze.
  //  console.log(n);
    n--;
    if(n<0){
        clearInterval(si);
    }
}
var si=setInterval(countdown,1000);

// viet chuong trinh cứ 2s in ra một số chẵn tăng dần theo thời gian
// in tối đa 10 số
var biendem =0;
var sochan =2;
function ktra(){
    var bien = document.getElementById("demsochan");
    bien.innerText +=""sochan;
    sochan+=2;
    biendem++;
    if(biendem>=10){
        clearInterval(sii)
    }
}
var ssi=setInterval(countdown,2000);