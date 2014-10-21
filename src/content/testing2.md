<aside class="note">
    <section>
        <ul>
            <li></li>
        </ul>
    </section>
</aside>

<hgroup>
    <h2>Unit Testing</h2>
</hgroup>
<article class="">
    <pre class="prettyprint" data-lang="js">
describe("Calculator Operations", function() {

    it("Should add two numbers", function() {

        Calculator.init();

        var result = Calculator.addNumbers(7,3);

        expect(result).toBe(10);
        expect(result).not.toBe(null);
        
    });
});
    </pre>
</article>
