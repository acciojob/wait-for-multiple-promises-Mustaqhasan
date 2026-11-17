//your JS code here. If required.
function createPromise(message,delay){
	return new Promise((resolve,reject)=>{
		const start=performance.now()
	setTimeout(()=>{
		const end=performance.now()
		resolve({
			result:message,
			time:(end-start).toFixed(3)
		})
	},delay)
})
}
const p1=createPromise("promise1", 2000);
const p2=createPromise("promise2", 1000);
const p3=createPromise("promise3", 3000);


Promise.all([p1,p2,p3]).then((res)=>{
	document.getElementById("loading").style.display="none"
	let body=document.getElementById("output")
	let dTime=0;
	res.forEach((item)=>{
		dTime+=Number(item.time)
		const row=document.createElement("tr")
		const td1=document.createElement("td")
		td1.innerText=item.result

		const td2=document.createElement("td")
		td2.innerText=item.time

		row.appendChild(td1)
		row.appendChild(td2)
		body.appendChild(row)
	})
	let total=document.createElement("tr")
	let td1=document.createElement("td")
	let td2=document.createElement("td")
	td1.innerText="Total"
	td2.innerText=dTime
	total.appendChild(td1)
	total.appendChild(td2)
	body.appendChild(total)
})
// let body=document.getElementById("output")
// promise1.then((res)=>{
// 	let row=`
// 		<tr>
// 		<td>${res}</td>
// 		</tr>
// 	`
// 	// body.appendChild(row)
// 	console.log(res)
// })



