let score = 0;
let a = score;
const begin = document.getElementById('Begin');
const OUN = document.querySelector('.OUN');
const Q1 = document.querySelector('.Q1');
const A1 = document.getElementById('A1');
const A2 = document.getElementById('A2');
const A3 = document.getElementById('A3');
const A4 = document.getElementById('A4');
const Q2 = document.querySelector('.Q2');
const Q3 = document.querySelector('.Q3');
const Q4 = document.querySelector('.Q4');
const Q5 = document.querySelector('.Q5');
const Q6 = document.querySelector('.Q6');
const Q7 = document.querySelector('.Q7');
const Q8 = document.querySelector('.Q8');
const Q9 = document.querySelector('.Q9');
const Q10 = document.querySelector('.Q10');
const Q11 = document.querySelector('.Q11');
const Q12 = document.querySelector('.Q12');
const Q13 = document.querySelector('.Q13');
const Q14 = document.querySelector('.Q14');
const Q15 = document.querySelector('.Q15');
const Q16 = document.querySelector('.Q16');
const Q17 = document.querySelector('.Q17');
const Q18 = document.querySelector('.Q18');
const Q19 = document.querySelector('.Q19');
const Q20 = document.querySelector('.Q20');
const Q21 = document.querySelector('.Q21');
const Q22 = document.querySelector('.Q22');
const Q23 = document.querySelector('.Q23');
const Q24 = document.querySelector('.Q24');
const Q25 = document.querySelector('.Q25');
const percentage = document.querySelector('.percentage');
const quizscore = document.getElementById('quizscore');

begin.addEventListener('click', (e) => { 
	OUN.remove();
	Q1.style.visibility = 'visible';
	Q1.style.display = 'block';
});

A1.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q1.remove();
	console.log(score);
	Q2.style.visibility = 'visible';
	Q2.style.display = 'block';
});

A2.addEventListener('click', (e) => {
	Q1.remove();
	Q2.style.visibility = 'visible';
    Q2.style.display = 'block';
});

A3.addEventListener('click', (e) => {
	Q1.remove();
	Q2.style.visibility = 'visible';
	Q2.style.display = 'block';
});

A4.addEventListener('click', (e) => {
	Q1.remove();
	Q2.style.visibility = 'visible';
	Q2.style.display = 'block';
});

A7.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q2.remove();
	console.log(score);
	Q3.style.visibility = 'visible';
	Q3.style.display = 'block';
});

A5.addEventListener('click', (e) => {
	Q2.remove();
	Q3.style.visibility = 'visible';
	Q3.style.display = 'block';
});

A6.addEventListener('click', (e) => {
	Q2.remove();
	Q3.style.visibility = 'visible';
	Q3.style.display = 'block';
});

A8.addEventListener('click', (e) => {
	Q2.remove();
	Q3.style.visibility = 'visible';
	Q3.style.display = 'block';
});

A9.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q3.remove();
	console.log(score);
	Q4.style.visibility = 'visible';
	Q4.style.display = 'block';
});

A10.addEventListener('click', (e) => {
	Q3.remove();
	Q4.style.visibility = 'visible';
	Q4.style.display = 'block';
});

A11.addEventListener('click', (e) => {
	Q3.remove();
	Q4.style.visibility = 'visible';
	Q4.style.display = 'block';
});

A12.addEventListener('click', (e) => {
	Q3.remove();
	Q4.style.visibility = 'visible';
	Q4.style.display = 'block';
});

A16.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q4.remove();
	console.log(score);
	Q5.style.visibility = 'visible';
	Q5.style.display = 'block';
});

A13.addEventListener('click', (e) => {
	Q4.remove();
	Q5.style.visibility = 'visible';
	Q5.style.display = 'block';
});

A14.addEventListener('click', (e) => {
	Q4.remove();
	Q5.style.visibility = 'visible';
	Q5.style.display = 'block';
});

A15.addEventListener('click', (e) => {
	Q4.remove();
	Q5.style.visibility = 'visible';
	Q5.style.display = 'block';
});

A18.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q5.remove();
	console.log(score);
	Q6.style.visibility = 'visible';
	Q6.style.display = 'block';
});

A17.addEventListener('click', (e) => {
	score = a + 2;
	a = a + 2;
	Q5.remove();
	console.log(score);
	Q6.style.visibility = 'visible';
	Q6.style.display = 'block';
});

A19.addEventListener('click', (e) => {
	Q5.remove();
	Q6.style.visibility = 'visible';
	Q6.style.display = 'block';
});

A20.addEventListener('click', (e) => {
	Q5.remove();
	Q6.style.visibility = 'visible';
	Q6.style.display = 'block';
});

A22.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q6.remove();
	console.log(score);
	Q7.style.visibility = 'visible';
	Q7.style.display = 'block';
});

A21.addEventListener('click', (e) => {
	Q6.remove();
	Q7.style.visibility = 'visible';
	Q7.style.display = 'block';
});

A23.addEventListener('click', (e) => {
	Q6.remove();
	Q7.style.visibility = 'visible';
	Q7.style.display = 'block';
});

A24.addEventListener('click', (e) => {
	score = a + 1;
	a = a + 1;
	Q6.remove();
	console.log(score)
	Q7.style.visibility = 'visible';
	Q7.style.display = 'block';
});

A27.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q7.remove();
	console.log(score);
	Q8.style.visibility = 'visible';
	Q8.style.display = 'block';
});

A25.addEventListener('click', (e) => {
	Q7.remove();
	Q8.style.visibility = 'visible';
	Q8.style.display = 'block';
});

A28.addEventListener('click', (e) => {
	score = a + 1;
	a = a + 1;
	Q7.remove();
	console.log(score);
	Q8.style.visibility = 'visible';
	Q8.style.display = 'block';
});

A26.addEventListener('click', (e) => {
	score = a + 2;
	a = a + 2;
	Q7.remove();
	console.log(score)
	Q8.style.visibility = 'visible';
	Q8.style.display = 'block';
});

A31.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q8.remove();
	console.log(score);
	Q9.style.visibility = 'visible';
	Q9.style.display = 'block';
});

A29.addEventListener('click', (e) => {
	score = a + 1;
	a = a + 1;
	Q8.remove();
	console.log(score);
	Q9.style.visibility = 'visible';
	Q9.style.display = 'block';
});

A30.addEventListener('click', (e) => {
	Q8.remove();
	Q9.style.visibility = 'visible';
	Q9.style.display = 'block';
});

A32.addEventListener('click', (e) => {
	Q8.remove();
	Q9.style.visibility = 'visible';
	Q9.style.display = 'block';
});

A34.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q9.remove();
	console.log(score);
	Q10.style.visibility = 'visible';
	Q10.style.display = 'block';
});

A33.addEventListener('click', (e) => {
	Q9.remove();
	Q10.style.visibility = 'visible';
	Q10.style.display = 'block';
});

A35.addEventListener('click', (e) => {
	Q9.remove();
	Q10.style.visibility = 'visible';
	Q10.style.display = 'block';
});

A36.addEventListener('click', (e) => {
	Q9.remove();
	Q10.style.visibility = 'visible';
	Q10.style.display = 'block';
});

A37.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q10.remove();
	console.log(score);
	Q11.style.visibility = 'visible';
	Q11.style.display = 'block';
});

A38.addEventListener('click', (e) => {
	score = a + 3;
	a = a + 3;
	Q10.remove();
	console.log(score);
	Q11.style.visibility = 'visible';
	Q11.style.display = 'block';
});

A39.addEventListener('click', (e) => {
	score = a + 2;
	a = a + 2;
	Q10.remove();
	console.log(score);
	Q11.style.visibility = 'visible';
	Q11.style.display = 'block';
});

A40.addEventListener('click', (e) => {
	Q10.remove();
	Q11.style.visibility = 'visible';
	Q11.style.display = 'block';
});

A44.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q11.remove();
	console.log(score);
	Q12.style.visibility = 'visible';
	Q12.style.display = 'block';
});

A41.addEventListener('click', (e) => {
	Q11.remove();
	Q12.style.visibility = 'visible';
    Q12.style.display = 'block';
});

A42.addEventListener('click', (e) => {
	Q11.remove();
	Q12.style.visibility = 'visible';
	Q12.style.display = 'block';
});

A43.addEventListener('click', (e) => {
	Q11.remove();
	Q12.style.visibility = 'visible';
	Q12.style.display = 'block';
});

A45.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q12.remove();
	console.log(score);
	Q13.style.visibility = 'visible';
	Q13.style.display = 'block';
});

A46.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q12.remove();
	console.log(score);
	Q13.style.visibility = 'visible';
    Q13.style.display = 'block';
});

A47.addEventListener('click', (e) => {
	Q12.remove();
	Q13.style.visibility = 'visible';
	Q13.style.display = 'block';
});

A48.addEventListener('click', (e) => {
	Q12.remove();
	Q13.style.visibility = 'visible';
	Q13.style.display = 'block';
});

A51.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q13.remove();
	console.log(score);
	Q14.style.visibility = 'visible';
	Q14.style.display = 'block';
});

A49.addEventListener('click', (e) => {
	Q13.remove();
	Q14.style.visibility = 'visible';
    Q14.style.display = 'block';
});

A50.addEventListener('click', (e) => {
	Q13.remove();
	Q14.style.visibility = 'visible';
	Q14.style.display = 'block';
});

A52.addEventListener('click', (e) => {
	Q13.remove();
	Q14.style.visibility = 'visible';
	Q14.style.display = 'block';
});

A53.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q14.remove();
	console.log(score);
	Q15.style.visibility = 'visible';
	Q15.style.display = 'block';
});

A54.addEventListener('click', (e) => {
	Q14.remove();
	Q15.style.visibility = 'visible';
    Q15.style.display = 'block';
});

A55.addEventListener('click', (e) => {
	Q14.remove();
	Q15.style.visibility = 'visible';
	Q15.style.display = 'block';
});

A56.addEventListener('click', (e) => {
	Q14.remove();
	Q15.style.visibility = 'visible';
	Q15.style.display = 'block';
});

A57.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q15.remove();
	console.log(score);
	Q16.style.visibility = 'visible';
	Q16.style.display = 'block';
});

A58.addEventListener('click', (e) => {
	Q15.remove();
	Q16.style.visibility = 'visible';
    Q16.style.display = 'block';
});

A59.addEventListener('click', (e) => {
	Q15.remove();
	Q16.style.visibility = 'visible';
	Q16.style.display = 'block';
});

A60.addEventListener('click', (e) => {
	Q15.remove();
	Q16.style.visibility = 'visible';
	Q16.style.display = 'block';
});

A64.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q16.remove();
	console.log(score);
	Q17.style.visibility = 'visible';
	Q17.style.display = 'block';
});

A61.addEventListener('click', (e) => {
	Q16.remove();
	Q17.style.visibility = 'visible';
    Q17.style.display = 'block';
});

A62.addEventListener('click', (e) => {
	Q16.remove();
	Q17.style.visibility = 'visible';
	Q17.style.display = 'block';
});

A63.addEventListener('click', (e) => {
	Q16.remove();
	Q17.style.visibility = 'visible';
	Q17.style.display = 'block';
});

A66.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q17.remove();
	console.log(score);
	Q18.style.visibility = 'visible';
	Q18.style.display = 'block';
});

A65.addEventListener('click', (e) => {
	Q17.remove();
	Q18.style.visibility = 'visible';
    Q18.style.display = 'block';
});

A67.addEventListener('click', (e) => {
	Q17.remove();
	Q18.style.visibility = 'visible';
	Q18.style.display = 'block';
});

A68.addEventListener('click', (e) => {
	Q17.remove();
	Q18.style.visibility = 'visible';
	Q18.style.display = 'block';
});

A71.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q18.remove();
	console.log(score);
	Q19.style.visibility = 'visible';
	Q19.style.display = 'block';
});

A69.addEventListener('click', (e) => {
	Q18.remove();
	Q19.style.visibility = 'visible';
    Q19.style.display = 'block';
});

A70.addEventListener('click', (e) => {
	Q18.remove();
	Q19.style.visibility = 'visible';
	Q19.style.display = 'block';
});

A72.addEventListener('click', (e) => {
	Q18.remove();
	Q19.style.visibility = 'visible';
	Q19.style.display = 'block';
});

A74.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q19.remove();
	console.log(score);
	Q20.style.visibility = 'visible';
	Q20.style.display = 'block';
});

A73.addEventListener('click', (e) => {
	Q19.remove();
	Q20.style.visibility = 'visible';
    Q20.style.display = 'block';
});

A75.addEventListener('click', (e) => {
	Q19.remove();
	Q20.style.visibility = 'visible';
	Q20.style.display = 'block';
});

A76.addEventListener('click', (e) => {
	Q19.remove();
	Q20.style.visibility = 'visible';
	Q20.style.display = 'block';
});

A79.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q20.remove();
	console.log(score);
	Q21.style.visibility = 'visible';
	Q21.style.display = 'block';
});

A77.addEventListener('click', (e) => {
	Q20.remove();
	Q21.style.visibility = 'visible';
    Q21.style.display = 'block';
});

A78.addEventListener('click', (e) => {
	Q20.remove();
	Q21.style.visibility = 'visible';
	Q21.style.display = 'block';
});

A80.addEventListener('click', (e) => {
	Q20.remove();
	Q21.style.visibility = 'visible';
	Q21.style.display = 'block';
});

A84.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q21.remove();
	console.log(score);
	Q22.style.visibility = 'visible';
	Q22.style.display = 'block';
});

A81.addEventListener('click', (e) => {
	Q21.remove();
	Q22.style.visibility = 'visible';
    Q22.style.display = 'block';
});

A82.addEventListener('click', (e) => {
	Q21.remove();
	Q22.style.visibility = 'visible';
	Q22.style.display = 'block';
});

A83.addEventListener('click', (e) => {
	Q21.remove();
	Q22.style.visibility = 'visible';
	Q22.style.display = 'block';
});

A85.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q22.remove();
	console.log(score);
	Q23.style.visibility = 'visible';
	Q23.style.display = 'block';
});

A86.addEventListener('click', (e) => {
	score = a + 2;
	a = a + 2;
	Q22.remove();
	console.log(score);
	Q23.style.visibility = 'visible';
    Q23.style.display = 'block';
});

A87.addEventListener('click', (e) => {
	Q22.remove();
	Q23.style.visibility = 'visible';
	Q23.style.display = 'block';
});

A88.addEventListener('click', (e) => {
	Q22.remove();
	Q23.style.visibility = 'visible';
	Q23.style.display = 'block';
});

A92.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q23.remove();
	console.log(score);
	Q24.style.visibility = 'visible';
	Q24.style.display = 'block';
});

A89.addEventListener('click', (e) => {
	Q23.remove();
	Q24.style.visibility = 'visible';
    Q24.style.display = 'block';
});

A90.addEventListener('click', (e) => {
	Q23.remove();
	Q24.style.visibility = 'visible';
	Q24.style.display = 'block';
});

A91.addEventListener('click', (e) => {
	Q23.remove();
	Q24.style.visibility = 'visible';
	Q24.style.display = 'block';
});

A93.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q24.remove();
	console.log(score);
	Q25.style.visibility = 'visible';
	Q25.style.display = 'block';
});

A94.addEventListener('click', (e) => {
	Q24.remove();
	Q25.style.visibility = 'visible';
    Q25.style.display = 'block';
});

A95.addEventListener('click', (e) => {
	Q24.remove();
	Q25.style.visibility = 'visible';
	Q25.style.display = 'block';
});

A96.addEventListener('click', (e) => {
	Q24.remove();
	Q25.style.visibility = 'visible';
	Q25.style.display = 'block';
});

A100.addEventListener('click', (e) => {
	score = a + 4;
	a = a + 4;
	Q25.remove();
	console.log(score);
	percentage.style.visibility = 'visible';
	percentage.style.display = 'block';
	quizscore.textContent = `You have a score of ${score}%!`;
});

A97.addEventListener('click', (e) => {
	score = a + 3;
	a = a + 3;
	Q25.remove();
	console.log(score);
	percentage.style.visibility = 'visible';
    percentage.style.display = 'block';
    quizscore.textContent = `You have a score of ${score}%!`;
});

A98.addEventListener('click', (e) => {
	score = a + 3;
	a = a + 3;
	Q25.remove();
	console.log(score);
	percentage.style.visibility = 'visible';
	percentage.style.display = 'block';
	quizscore.textContent = `You have a score of ${score}%!`;
});

A99.addEventListener('click', (e) => {
	score = a + 3;
	a = a + 3;
	Q25.remove();
	console.log(score);
	percentage.style.visibility = 'visible';
	percentage.style.display = 'block';
	quizscore.textContent = `You have a score of ${score}%!`;
});