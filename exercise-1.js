function deleteByIndex(array, index = Infinity){
    if(index == Infinity){  // اگر كاربر اشتباها ايندكس را به تابع نداد
        array.pop()         // بطور پیش فرض، آخرین آیتم از آرایه حذف شود
    }
    else{
        array = array.splice(index, 1)
    }
}

let cars = ["Mercedes", "BMW", "Porsche", "Volkswagen", "Audi"]

deleteByIndex(cars, 1)
console.log(cars)