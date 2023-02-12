
let lastPage;


  function getPage(page){
    fetch('https://rickandmortyapi.com/api/character?page=' + page)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
   lastPage = data.info.page;
   $('#caracter__cont').empty()

// 
for(let el of data.results){
    $('#caracter__cont').append(`
    
<div class="card">
    <div class="avatar" style="background-image: url(${el.image});"></div>

    <div class='name'>      ${el.name}</div>
    <div class='gender'><span>Gender:</span> ${el.gender}</div>
    <div class='status'><span>Status:</span> ${el.status}</div>
 

    <button class="btn" id='${el.id}'>info </button>

    </div>   `
 )
 

}



  });

  }
  getPage(2)

  let Page = 1;




$('.btn').click(function(){
  for(let el of data.results){
    $('.popup').append(`
<div class="card">
    <div class="avatar" style="background-image: url(${el.image});"></div>

    <div class='name'>      ${el.name}</div>
    <div class='gender'><span>Gender:</span> ${el.gender}</div>
    <div class='status'><span>Status:</span> ${el.status}</div>
 

    <button class="btn" id='${el.id}'>info </button>

    </div>   `
 )
  }
  
})



  $('#nextBtn').click(function(e){

    if(Page <= 42){
        Page++

    }
    else{
        Page = 1
    }

    getPage(Page)

    



  })




  $('#prevBtn').click(function(e){

   Page--

    getPage(Page)

  



  })




  
  
 
  


    
        fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json();

        

      })
      .then((data) => {
        console.log(data);
 

  })


    function getCharacterById(id) {
      
        fetch('https://rickandmortyapi.com/api/character/' +id )
        .then((response) => {
          return response.json();
    
    
    
        })
        .then((data) => {
          console.log(data);
        
    
    
    })
    
        
      }

      let Page1 = 1;



      function getFemale(){

        fetch('https://rickandmortyapi.com/api/character/?gender=female')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let fem of data.results){
              $('.femaleContainer').append(`
             
              <div class='card'>
              <div style="background-image: url(${fem.image})" class='avatar'></div>
       
                <div class='name'>     ${fem.name}</div>
                <div class='gender'> <span>Gender:</span>  ${fem.gender}</div>
                <div class='status'> <span>Status:</span> ${fem.status}</div>
           
              
              
               <button id='${fem.id}' class='btn'>info</button>

      
              </div>`)
          }
      
      
      
      
        });
      }
      getFemale()
      function getMale(){

        fetch('https://rickandmortyapi.com/api/character/?gender=male')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let male of data.results){
              $('.maleContainer').append(`
              <div class='card'>
              <div style="background-image: url(${male.image})" class='avatar'></div>
              <div class='name'>     ${male.name}</div>
              <div class='gender'> <span>Gender:</span>  ${male.gender}</div>
              <div class='status'> <span>Status:</span> ${male.status}</div>
              
              
               <button id='${male.id}' class='btn'>info</button>
      
              </div>`)
          }
      
      
      
      
        });
      }
      getMale()
      function getUnknown(){

        fetch('https://rickandmortyapi.com/api/character/?gender=unknown')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let un of data.results){
              $('.unknownContainer').append(`
              <div class='card'>
              <div style="background-image: url(${un.image})" class='avatar'></div>
              <div class='name'>     ${un.name}</div>
              <div class='gender'> <span>Gender:</span>  ${un.gender}</div>
              <div class='status'> <span>Status:</span> ${un.status}</div>
              
              
               <button id='${un.id}' class='btn'>info</button>
      
              </div>`)
          }
      
      
      
      
        });
      }
      getUnknown()


      
      let amountOfPages__episodes;
      let currentPage__episodes=1

      function getEpisode(page){

        fetch('https://rickandmortyapi.com/api/episode?page= ' + page)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          
          amountOfPages__episodes=data.info.page;

          $('.episodContainer').empty()
          for(let un of data.results){

              $('.episodContainer').append(`
              <div class='card three'>

              <div class = 'descp'>
        
        
                <div class='episod__name'><span>Name:</span>  ${un.name}</div>
                <div class='episod__text'><span>Air_date:</span>  ${un.air_date}</div>
                <div class='episod__text'><span>Episode:</span>  ${un.episode}</div>
                </div>
              
              
              
      
              </div>`)
          }
      
      
      
      
        });
      }

      getEpisode(1)



     
    
    
    
    
      $('#prevEpBtn').click(function(){
        if(currentPage__episodes>1){
            currentPage__episodes--
            getEpisode(currentPage__episodes)
        }
    
    })
    $('#nextEpBtn').click(function(){
   
      if(currentPage__episodes <= 51){
   
          currentPage__episodes++
          getEpisode(currentPage__episodes)
      }
  
  })




  let currentPage__loc = 1;
  let currentPage__locer;

    

      
      function getLocation(page){

        fetch('https://rickandmortyapi.com/api/location?page=' + page)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          currentPage__locer = data.info.page;
          

          $('.locationContainer').empty();
          for(let loc of data.results){
              $('.locationContainer').append(`
              <div class='card three'>
              <div class = 'descp'>
         
    
                <div class='episod__name'><span>Name:</span>  ${loc.name}</div>
                <div class='episod__text'><span>Type</span>  ${loc.type}</div>
                <div class='episod__text'><span>Location:</span>  ${loc.dimension}</div>
                </div>
            
              
              
             
              </div>`)
          }
      
      
      
      
        });
      }


      getLocation(1)
      $('#prevLcBtn').click(function(){
        if(currentPage__loc>1){
            currentPage__loc--
            getLocation(currentPage__loc)
        }
    
    })
    $('#nextLcBtn').click(function(){
   
      if(currentPage__loc <=126){
   
          currentPage__loc++
          getLocation(currentPage__loc)
      }
  
  })

      function getPlanet(){

        fetch('https://rickandmortyapi.com/api/location/?type=planet')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let loc of data.results){
              $('.planetContainer').append(`
              <div class='card three'>
              <div class = 'descp'>
         
    
                <div class='episod__name'><span>Name:</span>  ${loc.name}</div>
                <div class='episod__text'><span>Type</span>  ${loc.type}</div>
                <div class='episod__text'><span>Location:</span>  ${loc.dimension}</div>
                </div>
            
              
              
             
              </div>`)
          }
      
      
      
      
        });
      }
      getPlanet()
      function getTv(){

        fetch('https://rickandmortyapi.com/api/location/?type=tv')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let loc of data.results){
              $('.tvContainer').append(`
              <div class='card three tv'>
              <div class = 'descp'>
         
    
                <div class='episod__name'><span>Name:</span>  ${loc.name}</div>
                <div class='episod__text'><span>Type</span>  ${loc.type}</div>
                <div class='episod__text'><span>Location:</span>  ${loc.dimension}</div>
                </div>
            
              
              
             
              </div>`)
          }
      
      
      
      
        });
      }
      getTv()
      function getMicro(){

        fetch('https://rickandmortyapi.com/api/location/?type=microverse')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let loc of data.results){
              $('.microContainer').append(`
              <div class='card three tv'>
              <div class = 'descp'>
         
    
                <div class='episod__name'><span>Name:</span>  ${loc.name}</div>
                <div class='episod__text'><span>Type</span>  ${loc.type}</div>
                <div class='episod__text'><span>Location:</span>  ${loc.dimension}</div>
                </div>
            
              
              
             
              </div>`)
          }
      
      
      
      
        });
      }
      getMicro()

      function getSpace(){

        fetch('https://rickandmortyapi.com/api/location/?type=Space')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for(let loc of data.results){
              $('.spaceContainer').append(`
              <div class='card three tv'>
              <div class = 'descp'>
         
    
                <div class='episod__name'><span>Name:</span>  ${loc.name}</div>
                <div class='episod__text'><span>Type</span>  ${loc.type}</div>
                <div class='episod__text'><span>Location:</span>  ${loc.dimension}</div>
                </div>
            
              
              
             
              </div>`)
          }
      
      
      
      
        });
      }
      getSpace()

      $('.femaleContainer').hide(0);
      $('.maleContainer').hide(0);
      $('.unknownContainer').hide(0);
      $('.planetContainer').hide(0);
      $('.tvContainer').hide(0);
      $('.microContainer').hide(0);
      $('.spaceContainer').hide(0);

      

          


      $('#female').click(function(){
        $('#caracter__cont').hide(100);
        $('.femaleContainer').show(100);
        $('.unknownContainer').hide(100);
        $('.maleContainer').hide(0);
   

      })
      $('#all').click(function(){
        $('#caracter__cont').show(100);
        $('.femaleContainer').hide(100);
        $('.unknownContainer').hide(0);


      
   

      })
      $('#male').click(function(){
        $('.maleContainer').show(100);

        $('#caracter__cont').hide(100);
        $('.femaleContainer').hide(100);
        $('.unknownContainer').hide(100);


      
   

      })
      $('#unknown').click(function(){
        $('.unknownContainer').show(100);

        $('#caracter__cont').hide(100);
        $('.femaleContainer').hide(100);
        $('.maleContainer').hide(0);

      
   

      })

      $('#locAll').click(function(){
        $('.locationContainer').show(100)
        $('.planetContainer').hide(100);
        $('.spaceContainer').hide(0);


      })

      $('#planet').click(function(){
        $('.planetContainer').show(100);
        $('.locationContainer').hide(0);
        $('.spaceContainer').hide(0);



      })

      
      $('#tv').click(function(){
        $('.tvContainer').show(100)
        $('.planetContainer').hide(0);
        $('.locationContainer').hide(0);
        $('.spaceContainer').hide(0);


      })
      $('#micro').click(function(){
        $('.microContainer').show(100);
        $('.tvContainer').hide(0);
        $('.planetContainer').hide(0);
        $('.locationContainer').hide(0);
        $('.spaceContainer').hide(0);


      })
      $('#space').click(function(){
        $('.spaceContainer').show(100);
        $('.microContainer').hide(0);
        $('.tvContainer').hide(0);
        $('.planetContainer').hide(0);
        $('.locationContainer').hide(0);


      })




      
     





 

  
  




//   function getData(url){
//     fetch('https://rickandmortyapi.com/api/character?page=' + page)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     nextPrev =
//   });

//   }


