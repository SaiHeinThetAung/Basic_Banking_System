
        let info=[
            {
                name:'Hein',
                price:300
            }, 
            {
                name:'Jacob',
                price:4500
            },
            {
                name:'Larry',
                price:3500
            },
            {
                name:'Jame',
                price:7900
            },
            {
                name:'Rune',
                price:10000
            },
            {
                name:'Ubene',
                price:76400
            },
            {
                name:'Hell',
                price:70
            },
            {
                name:'Steph',
                price:200000
            },
            {
                name:'Momo',
                price:300000
            },
            {
                name:'Nayeon',
                price:0
            }
        ];
        let big=1000000;
        let  change=(user,amount)=>{

            sum=parseInt(amount);
            if(sum<1){
                alert('Invalid Input!!')
            }
            else{
              if(user=='Hein'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;
               }
               else{
                document.getElementById('t1').innerText=sum;
                document.getElementById('bal1').innerText=info[0].price+sum;
                document.getElementById('unique').innerText=big-sum;
                info[0].price+=sum;
               }
            }

            else if(user=='Jacob'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t2').innerText=sum;
            document.getElementById('bal2').innerText=info[1].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[1].price+=sum; 
               }
               
            }
             
            else if(user=='Larry'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t3').innerText=sum;
            document.getElementById('bal3').innerText=info[2].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[2].price+=sum; 
               }
               
            }
            else if(user=='Jame'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t4').innerText=sum;
            document.getElementById('bal4').innerText=info[3].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[3].price+=sum;  
               }
              
            }
            else if(user=='Rune'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t5').innerText=sum;
            document.getElementById('bal5').innerText=info[4].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[4].price+=sum;  
               }
              
            }
            else if(user=='Ubene'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t6').innerText=sum;
            document.getElementById('bal6').innerText=info[5].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[5].price+=sum;
               }
                
            }
            else if(user=='Hell'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t7').innerText=sum;
            document.getElementById('bal7').innerText=info[6].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[6].price+=sum; 
               }
               
            }
            else if(user=='Steph'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t8').innerText=sum;
            document.getElementById('bal8').innerText=info[7].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[7].price+=sum; 
               }
               
            }
            else if(user=='Momo'){
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t9').innerText=sum;
            document.getElementById('bal9').innerText=info[8].price+sum;
            document.getElementById('unique').innerText=big-sum;
            info[8].price+=sum; 
               }
               
            }
            else{
              big-=sum;
              if(big<1){
              alert('Insufficient balance.');
              big=1000000;

               }
               else{
                document.getElementById('t10').innerText=sum;
            document.getElementById('bal10').innerText=info[9].price+sum;
            document.getElementById('unique').innerText=big-sum;
            big-=sum;
            info[9].price+=sum;   
               }
            
            }
            }
            
        };
        
    