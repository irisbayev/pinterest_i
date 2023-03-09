document.querySelector('picture').addEventListener('change', event=> {
    if(event.targed.files && event.targed.file[0]){
        if(/image\/*/.test(event.targed.files[0].type)){
            const reader=new FileReader();
                reader.onload = function(){
                    document.querySelector('.pin_image img').src=reader.result;
                }
            reader.readAsDataURL(event.targed.files[0])
        }
    }
    document.querySelector('#picture').value=''
});