function search_for_video(text)
{
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7be22c99e5mshedd53ee06d429b6p12aae0jsn3c797140f1e3',
		'X-RapidAPI-Host': 'filepursuit.p.rapidapi.com'
	}
};
let BASEURL = "https://filepursuit.p.rapidapi.com/?q="
fetch(BASEURL+text+"&type=video", options)
	.then(response => response.json())
	.then(json => {
    console.log(json)
      //  console.log("file =" + json.files_found[0].file_link);
//   let src_element = document.createElement("source");
//   src_element.src=json.files_found[0].file_link;
//   src_element.type="video/mp4";
//   document.getElementById('video_control').innerHTML = 

//   `'<video width="320" height="240" controls >
//   <source src="${json.files_found[0].file_link}" title="YouTube video" type="video/mp4">
//   </video>
// '`;
// console.log("DONE SCOURCING");
let ul_element = document.getElementById('ul_holder');
json.files_found.forEach(element => {
  console.log("one link= "+element.file_link)
  let li_ele = document.createElement("li")
  li_ele.innerText = element.file_name;
  li_ele.className = "list-group-item";
  li_ele.value = element.file_link;
  li_ele.onclick = ()=>{
    document.getElementById('video_control').innerHTML = 

    `'<video width="320" height="240" controls >
    <source src="${element.file_link}" title="YouTube video" type="video/mp4">
    </video>
  '`;
  }
  ul_element.appendChild(li_ele)
});

})
       .catch(err => console.error(err));
        
        
}
let but = document.getElementById('send');
but.onclick = ()=>{

 console.log(document.getElementById('input-box').value);
 let ul_element = document.getElementById('ul_holder');
 ul_element.innerHTML="";
  search_for_video(document.getElementById('input-box').value);
}

console.log("hello");
