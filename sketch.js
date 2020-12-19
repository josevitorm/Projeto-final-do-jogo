var x = 158;
var y = 165;
var escolhajogo = 1
var escolha = 1;
var tela = 0;
var nivel = 0
var resp = [0, 1, 2, 0, 0, 2, 1, 1, 0, 0]
var contador = 5
var perguntas = [
  {
   pergunta:"Que tipo de trabalhos podemos ver no campo?",
   q1: "A- Agricultura e Pesca", 
   q2: "B- Industrial ", 
   q3: "C- Agropecuário e Industrial"},
  {
   pergunta:"Qual a principal atividade do campo?",
   q1: "A- Pesca", 
   q2: "B- Agricultura", 
   q3: "C- Lazer"},
  {
   pergunta:"Qual a principal fonte de renda da cidade?",
   q1: "A- Agricultura", 
   q2: "B- Pecuária", 
   q3: "C- Comércio "},
  {
   pergunta:"Características do Campo:",
   q1: "A- Áreas verdes e pouco barulho", 
   q2: "B- Muitas escolas e prédios", 
   q3: "C- Muitas indústrias e muito barulho"},
  {
   pergunta:"Principais meios de transporte da cidade?",
   q1: "A- Carro e Moto", 
   q2: "B- Carroça e Moto", 
   q3: "C- Carro e Carroça"},
  {
   pergunta:"Qual animal é mais criado no campo?",
   q1: "A- Hamster", 
   q2: "B- Cachorro", 
   q3: "C- Cavalo"},
  {
   pergunta:"Características da cidade:",
   q1: "A- Calma e com muitas áreas verdes", 
   q2: "B- Barulhenta e com muitas empresas", 
   q3: "C- Calma e sem empresas"},
  {
   pergunta:"Principais animais criados nas cidades?",
   q1: "A- Vaca e cavalo", 
   q2: "B- Cachorro e gato", 
   q3: "C- Coelho e porco"},
  {
   pergunta:"Tipos de lazer na cidade:",
   q1: "A- Teatro e Cinema", 
   q2: "B- Pesca e Cinema", 
   q3: "C- Teatro e Cultivar"},
  {
   pergunta:"Tipos de lazer no campo?",
   q1: "A- Pesca e Cultivo", 
   q2: "B- Cinema e Teatro", 
   q3: "C- Cinema e Parques"},
  
  
  
]
function preload(){
    img = loadImage('fazendacolorida.jpg')
    fontetitulo = loadFont('Letters for Learners.ttf')
}

  function setup() {
createCanvas(550, 550);
}

  function draw() {

  background(img);
  if(tela==0)
    menu();
  if(tela==1)
     Iniciar(nivel);
  if(tela==2)
     Sobre();
  if(tela==3)
    Creditos();
  if(tela==4)
    Pontuacao();
}
  function menu(){
      fill(255, 255, 255)
      rect(x, y, 250, 45, 10)

      textSize(64)
      fill(0,0,5)
      textFont(fontetitulo)
      text('From Farm to City', 75, 75)

      textSize(50)
      fill(0,0,5)
      text('Iniciar', 237, 200)
      text('Sobre o Jogo', 180,300)
      text('Créditos', 215, 400)
}
  function Iniciar(nivel){
    
    fill(255, 255, 255)
    rect(52, y, 480, 45, 10)

    textSize(32)
    fill(0,0,0)
    text(perguntas[nivel].pergunta,50, 100)
    textSize(35)
    text(perguntas[nivel].q1, 80,200)
    text(perguntas[nivel].q2, 80, 300)
    text(perguntas[nivel].q3, 80, 400)
    
}

  function Sobre(){
    textSize(40)
    text('(EF04GE07) Comparar as características do trabalho no campo e na cidade.', 30, 50, 500)
}
  function Creditos(){
    textSize(40)
    text('José Vítor Moreira, Turma 5 de LOP/ECT-UFRN', 30,50,500)
}
  function Pontuacao(){
    fill(10,0,255)
    textSize(30)
    text("PARABÉNS, VOCÊ ACERTOU" +" "+contador+"/10 !", 100 , 100)
    fill(255,0,0)
    textSize(50)
    text("OBRIGADO POR JOGAR!",80, 200)
  }
  function keyPressed(){
  if(tela==1){
  escolha = 0
  if(key=="ArrowUp" && y>200){
  y= y - 100;
  escolha = escolha - 1
  }if(key=="ArrowDown" && y<300){
    y= y + 100;
    escolha = escolha + 1
  }if(key=="Enter"){
    if(escolha === resp[nivel]){
      contador++
    }
    nivel++
    if(nivel > 9){
    tela = 4
    }else{
      Iniciar(nivel)
    }
   
  }
}else{
  if(key=="ArrowUp" && y>200){
  y= y - 100;
  escolha = escolha - 1
  }if(key=="ArrowDown" && y<300){
    y= y + 100;
    escolha = escolha + 1
  }if(key=="Enter"){

    tela=escolha
  }if(key=="Escape"){
    tela=0
  }
}
  
}