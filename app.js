
// const nameInput = document.querySelector("#name");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const bmiAdvice = document.querySelector("#advice");

//BMI Calculate function
calBmi = () => {
    const w = parseInt(weightInput.value);
// h convert cm. to m.
    const h = parseInt(heightInput.value) / 100;

// bmi operator
    const bmi = w / (h**2);

    const bmiFixed = bmi.toFixed(2);

    const sumBMI = document.querySelector("#bmiCal");
    const yourBmi = document.querySelector("#bmiTitle");

//change text 
    yourBmi.innerText = `BMI`

//bmi to display
    bmiCal.innerHTML = `<div class="sumBMI" id="sumBMI">
    <p class="text-sum" id="textSum">${bmiFixed}</p>
    </div>
    <button type="reset" onclick="reloadWeb()">คำนวณอีกครั้ง</i></Span></button>`

//import bmi function to this here and input value in parameter
    bmiStatus(bmiFixed);
};


//reload webpage function
reloadWeb = () => {
    location.reload();
}


// bmi status and advice function
function bmiStatus(bmi) {
    if (bmi < 18.50) {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h4>BMI น้อยกว่า 18.50</h4>
        <h3>น้ำหนักน้อยกว่ามาตรฐาน</h3>
        <p>คุณมีน้ำหนักน้อยหรือผอม โดยทั่วไป ค่าดัชนีมวลกายปกติมีค่าน้อยกว่า 18.50</p>
        </div>`
    } else if (bmi >= 18.50 && bmi <= 22.90) {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h4>BMI ระหว่าง 18.50 - 22.90</h4>
        <h3>น้ำหนักปกติ</h3>
        <p>คุณมีน้ำหนักอยู่ในเกณฑ์มาตรฐาน ค่าดัชนีมวลกายมีค่าระหว่าง 18.50 - 22.90</p>
        </div>`
    } else if (bmi >= 22.91 && bmi <= 24.90) {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h4>BMI ระหว่าง 23 - 24.90</h4>
        <h3>ท้วม / อ้วนระดับ 1</h3>
        <p>ถ้าคุณไม่ใช่คนออกกำลังกาย คุณเริ่มมีน้ำหนักเกินมาตรฐาน หรือมีรูปร่างท้วม ค่าดัชนีมวลกายมีค่าระหว่าง 23 - 24.90</p>
        </div>`
    } else if (bmi >= 24.91 && bmi <= 29.90) {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h4>BMI ระหว่าง 25 - 29.90</h4>
        <h3>อ้วน / อ้วนระดับ 2</h3>
        <p>ถ้าคุณไม่ใช่คนออกกำลังกาย คุณเข้าเกณฑ์อ้วนแล้ว (อ้วนระดับ 2) ค่าดัชนีมวลกายมีค่าระหว่าง 25 - 29.90</p>
        </div>`
    } else if (bmi >= 29.91) {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h4>BMI มากกว่า 30</h4>
        <h3>อ้วนมาก / อ้วนระดับ 3</h3>
        <p>แย่แล้ว!! ถ้าคุณไม่ใช้คนออกกำลังกาย หรือนักเพาะกาย คุณอ้วนมากแล้ว (อ้วนระดับ 3) ค่าดัชนีมวลกายมีค่ามากกว่า 30</p>
        </div>`
    } else {
        bmiAdvice.innerHTML = `<div class="detail-card">
        <h3>ข้อมูลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง</h3>
        </div>`
    }
};
