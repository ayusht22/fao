
d3.json('SDG_mapping.json',function(data){

var myDiv = document.getElementById('myDiv');

states=[]
x=[]
y=[]
sgdValues=[]
sgdColors=[]
console.log(data)
for(let i=0;i<data.length;i=i+1){
   states.push(data[i].resource_name)
   x.push(data[i].ld[0])
   y.push(data[i].ld[1])

   stateSgd=[]
   stateColor=[]
   for(let j=0;j<data[i].hd.length;j++){
       const val=data[i].hd[j][1]
       stateSgd.push(val)
       if(val<50){
           stateColor.push('#ea9393')
       }
       else if(val<65){
           stateColor.push('#ffbf86')
       }
       else{
           stateColor.push('#95cf95')
       }
       }
   sgdValues.push(stateSgd)
}

var layout = {
    width:1500,
    xaxis: {range: [0, 1], showgrid: false},
    yaxis: {range: [0, 1], showgrid: false}, 
    shapes: [],
    hovermode:'closest',
    images:[{
        "source": "https://cdn-icons-png.flaticon.com/512/317/317544.png",
        "xref": "x",
        "yref": "y",
        "x":0.4392188 ,
        "y": 0.5302188,
        "sizex": 0.1,
        "sizey": 0.1,
        "xanchor": "right",
        "yanchor": "bottom"
      },
      {
        "source": "https://cdn-icons-png.flaticon.com/512/185/185291.png",
        "xref": "x",
        "yref": "y",
        "x": 0.57,
        "y": 0.50,
        "sizex": 0.15,
        "sizey": 0.15,
        "xanchor": "right",
        "yanchor": "bottom" 
      },
      {
        "source": "https://cdn-icons-png.flaticon.com/512/3844/3844901.png",
        "xref": "x",
        "yref": "y",
        "x": 0.61,
        "y": 0.56,
        "sizex": 0.15,
        "sizey": 0.15,
        "xanchor": "right",
        "yanchor": "bottom" 
      },
     
    ]
};


var types = ['square','circle','circle'];
var colors = ['#95cf95','#ffbf86','#ea9393'];

var pos=[
    [
        0,
        0,
        1,
        1,
    ],
    [
        -0.90,
        -0.90,
        0.90,
        0.90
    ],
    [
        -0.49,
        -0.49,
        0.49,
        0.49
    ]
  
]

for (var i = 0; i < 3; i +=1) {
    layout.shapes.push({
        type: types[i],
        x0:  pos[i][0],
        y0:  pos[i][1],
        x1:  pos[i][2],
        y1:  pos[i][3],
        fillcolor: colors[i],
        line: {
            color: colors[i]
        },
        layer: 'below'
    })
    console.log(colors[i])
}




var data = [
  
    
    {
    mode: 'markers',
    
    marker:{
        size:10,
        color: 'rgba(17, 157, 255,0.01)'
    },
    x:x,
    y:y,
    text:states,
    customdata:sgdValues,
    hovertemplate:
            "<b>%{text}</b><br><br>" +
            "SGD1: %{customdata[0]}<br>" +
            "SGD2: %{customdata[1]}<br>" +
            "SGD3: %{customdata[2]}<br>" +
            "SGD4: %{customdata[3]}<br>" +
            "SGD5: %{customdata[4]}<br>" +
            "SGD6: %{customdata[5]}<br>" +
            "SGD7: %{customdata[6]}<br>" +
            "SGD8: %{customdata[7]}<br>" +
            "SGD9: %{customdata[8]}<br>" +
            "SGD10: %{customdata[9]}<br>" +
            "SGD11: %{customdata[10]}<br>" +
            "SGD12: %{customdata[11]}<br>" +
            "SGD13: %{customdata[12]}<br>" +
            "SGD14: %{customdata[13]}<br>" +
            "SGD15: %{customdata[14]}<br>" +
            "SGD16: %{customdata[15]}<br>" +
            "<extra></extra>",
            showlegend:false
    
    },
    
]
Plotly.plot(myDiv, data, layout);

})
