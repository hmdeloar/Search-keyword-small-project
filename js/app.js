


function result_num(){

    var input = document.getElementById('search-number').value;

    switch (input){
        case "Billal":{
            document.write('<img width="300px;" src="img/Billal.png"> <h4>Name: Billal Hossain</h4> <p>This is my description</p> ');

        }
        break;
        
        case "Shahadat":{
            document.write('<img width="300px;" src="img/Shahadat.png"> <h4>Name: Shahadat Mahmud</h4> <p>This is my description</p> ');

        }
        break; 

        case "Rakib":{
            document.write('<img width="300px;" src="img/Rakib.png"> <h4>Name: Rakib</h4> <p>This is my description</p> ');

        }
        break;
        
        case "Habib":{
            document.write('<img width="300px;" src="img/Habib.png"> <h4>Name: Habib</h4> <p>This is my description</p> ');

        }
        break;

          case "Mostofa":{
            document.write('<img width="300px;" src="img/Mostofa.png"> <h4>Name: Mostofa</h4> <p>This is my description</p> ');

        }
        break;
           case "Deloar":{
            document.write('<img width="300px;" src="img/Deloar.JPG"> <h4>Name: Deloar</h4> <p>This is my description</p> ');

        }
        break;





        default:{
            document.write("Ops, Sorry! You're searched invalid keyword...");
        }
    }




}