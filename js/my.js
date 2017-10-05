(function (window, document) {
    // Shrink images to the width of the article.
    var elements = document.getElementsByTagName("img");
    for (var i=0; i<elements.length; i++)
    {
      var el = elements[i];      
      el.setAttribute( "class", el.getAttribute("class") + " content" );
    }
}(this, this.document));
