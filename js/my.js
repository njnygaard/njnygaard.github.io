console.log('yeah')

(function (window, document) {
    // Shrink images to the width of the article.
    var elements = document.getElementsByTagName("img");
    for (var i=0; i<elements.length; i++)
    {
      var el = elements[i];      
      el.setAttribute( "class", el.getAttribute("class") + " content" );
    }

	const canary = `
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

2018-12-18
I have not given my pgp keys to any government agency of any kind.

George H.W. Bush secretly sponsored a Filipino child for 10 years
https://www.cnn.com/2018/12/18/us/george-hw-bush-sponsored-filipino-child-trnd/index.html

As Facebook Raised a Privacy Wall, It Carved an Opening for Tech Giants
https://www.nytimes.com/2018/12/18/technology/facebook-privacy.html

Ex-Marlins President Brags About Fleecing Fans, Taxpayers in $1.2 Billion Team Sale
https://www.miaminewtimes.com/news/miami-marlins-david-samson-brags-about-12-billion-team-sale-10956381
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCgAdFiEEU7Ts0cQ+iN95YrRdYBIlO0EXtt8FAlwZ5N0ACgkQYBIlO0EX
tt/1Gg/5AYnMC7/2h6Drtmj7tGRKxlbZnNipZOHLiICrFyZSsbuvfI2HqUrwmAop
recHArsoZP3iH+f1BmUcYVBIxVgDPemuuBsbLm0OARvUPajip8blD6okL1TvRdPy
NJ56jdG5II7JEgth5rYjVVKt2qNf1QGjKZNwBjx2upTCtdbyqmB5PnFt5IOb5cPp
r5xWgZ3QVvHQO1RmpUVUYScX95/uTbbCnFcl+lgnHREAoV8H8jh676P0RAjF263+
VYzMZ6t6yfRpVz/tcJT01PZeB43PNIWCG95Nyguos8mdbFBrFx49NB7ZqwrIYD5h
ph0D6/M7WseY1uhQ39oR7znJxrGuL1zHdCy2Q/D5fYl1xbPzNAeQXmjH9CEZZM3R
zM/fZDFWZCQM83ilWgFhU5Vr6Qp2DHBdure8fDomp/P7c0Ic9yME/biyqekuOgab
GRlj6RwkdjEgVsjxirmcHXExznkttqbFPVlBxEsQrA0vPVY3XrCEEwC1IkLnx6F+
qFFmF8DlDu5pKF1M95oUYgJebrSNk5z/Hel5/vlJzFJBymzdJG7sko6C4VJG9ziE
Qcy6FHloUJHhjEmI8h+U2SmK8KawTsUqT2gcj6L55WpVJd9vjevrkDWM+9Xt4rrK
OucgTzXUsrMOIxV9iz+s6Af8wyrQkgn8ShiLqJNOfocpUlGNK7o=
=SF14
-----END PGP SIGNATURE-----

	`;
	console.log(canary);
}(this, this.document));
