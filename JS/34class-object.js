class railwayForm{
    submit(){
        alert(this.name+`: Form Submitted for tain no: `+ this.trainNo)
    }
    cancle(){
        alert(this.name+`: Form cancelled for tain no: `+ this.trainNo)
    }
    fill(param,trainNo){
        this.name = param;
        this.trainNo = trainNo;
    }
}

const mohibForm =new railwayForm();
mohibForm.fill(`mohib`,`A223244`) 
const adityaForm =new railwayForm();
adityaForm.fill(`aditya`,`B376500`) 

mohibForm.submit();
adityaForm.submit();
adityaForm.cancle();