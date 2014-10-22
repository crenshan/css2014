<aside class="note">
    <section>
        <ul>
            <li>22 out of 24 presenters use SASS</li>
            <li>One user was using LESS but said he was probably going to be moving to SASS soon</li>
            <li>Last use is on Stylus (similar to Coffee Script syntax)</li>
        </ul>
    </section>
</aside>

<hgroup>
    <h2>SASS (Syntactically Awesome StyleSheets)</h2>
</hgroup>
<article class="">
    <img class="sass-logo" src="images/sass.png" alt="">
    <pre class="prettyprint" data-lang="scss" style="width:70%;">
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
nav {
  ul {
    list-style: none;
    li { 
        display: inline-block; 
        a { display: block; }
    }
}
    </pre>
</article>
