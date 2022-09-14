var obj = {
    name: "Duc",
    age: 18,
    tel: "098687997",
    girlFriends:['Nguyen Van Anh', 'Le Ngoc Anh'],// muốn in ra thì phải duyệt mảng dùng vòng lặp
    eat: function (){
        console.log(obj.name+"Duc an sáng nào"); //
        console.log(this.name+"Duc an sáng nào");// this thay cho obj
    }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";
obj.eat();
var a = document.getElementById("abc");// thành đối tượng a
console.log(a.innerText);
var x = 15;
function changtext() {
 //   a.innerText = "xin chao";
 //   a.innerHTML = "<i>xin chao cac ban</i>"
    a.style.fontSize = x+"px";
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo");// class giống css
   // a.style.transform = "rotate("+x+"deg)";
}

setInterval(changtext,30);
//setTimeout(changtext,30);


