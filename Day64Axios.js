window.onload=async function(){
  var response=  await axios.get('https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js');
  console.log(response);
}