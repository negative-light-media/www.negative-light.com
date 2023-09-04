import Image from 'next/image'
function Home(){


  return (
  <>
  <head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charSet="UTF-8"/>
<link rel="icon" type="image/x-icon" href="img/favicon.png"/>
<meta name="description" content="Official page for Negative Light Media "/>
<meta name="keywords" content="NLM, media, negative-light, Negative_light, Minecraft, Youtube, Programming, Mods, modding"/>
<meta name="author" content="Negative-light"/>
<meta name="contributors" content="sourabh1111111, crazysmile11012"/>
<meta name="publisher" content="Negative-light-media"/>
<title>negative-light.com</title>
</head>
<body>
<center>
  <header>
    <h2><u>Negative Light Media </u></h2>
	
  </header>
  <div className="topnav">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</div>
  <div className="container">


<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2023</h5>
      <div className="fakeimg">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <div className="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2023</h5>
      <div className="fakeimg">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg"><p>Image</p></div>
      <div className="fakeimg"><p>Image</p></div>
      <div className="fakeimg"><p>Image</p></div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

</div>
<footer>
    <article>
      <h4>This website is under construction</h4>
      <p><sub>Check our github for details <a href="https://github.com/negative-light-media/www.negative-light.com"><u color="blue">here</u></a></sub></p>
    </article>
  </footer>
</center>
</body>
  </>
  );
  }
  export default Home;