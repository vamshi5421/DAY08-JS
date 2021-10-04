const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link"); 

btn.addEventListener("click", generateLink);

function generateLink(e){
    e.preventDefault();
    // console.log(gLink.value)

    const gLinkValue = gLink.value;

    const confirmLink = gLinkValue.includes("https://drive.google.com/file/d/");

    if(confirmLink) {
        const getDownloadLink = gLink.value
        .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "");

        downloadLink.value = getDownloadLink;

        function copyText(target) {
            if(target.value === ""){
                alert("invaild link")

            }else{
               target.select();
               target.setSelectionRange(0,99999);
               document.execCommand("copy");
               alert("link has been copied")

            }
        }

        const copy = document.querySelector(".copy");
        copy.addEventListener("click", ( )=> {
            return copyText(downloadLink)
        })
        
         
    }
}