const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

document.getElementById('t-1').innerText = posts[0].title;

var file =document.getElementById('t-1');
file.innerText = posts[0].title; 

 var date = document.createElement("u")
 date.innerText = posts[0].date; 
 file.append(date); 
  
 var n = document.createElement("a")
 n.innerText = posts[0].author;
date.append(n);

var z = document.getElementById('nourhan');
z.innerText = posts [0].contents;

 var nour = document.getElementById("nour");
 nour.innerText = posts[1].title; 

 var r = document.createElement("r"); 
 r.innerText = posts[1].date; 
 nour.append(r); 

 var e = document.createElement("e"); 
 e.innerText = posts[1].author; 
r.append(e); 

var x = document.getElementById("a"); 
x.innerText = posts [1].contents; 

var ma = document.getElementById("ma");
 ma.innerText = posts[2].title; 

 var d = document.createElement("r"); 
 d.innerText = posts[2].date; 
 ma.append(d); 

 var g = document.createElement("e"); 
 g.innerText = posts[2].author; 
d.append(g); 

var n = document.getElementById("n"); 
n.innerText = posts [2].contents;