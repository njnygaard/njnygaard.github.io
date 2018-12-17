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

The FBI has not been here.
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.76
Comment: https://keybase.io/crypto

wsFcBAABCgAGBQJa1mKJAAoJEDHPdMWEZAW3PWAQAKIsl9rPn/KtFWqMF0dkAgyX
z/PR4hbROIDnGU04/bHgLs1c5TPW6vv87Vp0bPYLPz3FJdL0NQud13Bad7W3Hz5D
3c54SI34yrOH2vAXFy2OHrC6g3Tcb4G9YMauaTkZqoUJ2+Q7CYdK3owR6bx+z8p7
NNjJa/ltvNcoLLS971GHFkpiCOSXR6ZohkZJDUhAdF3K9DijXW7SGr1w/DtdR7fF
E9so8d1CJyAQD2HqfwMzy8TmRj1b9JhvdQX3kWIc6nVCRYQiaaYVOid/hGlrA64y
ccjtsgsZ0pOtoPdvnyEpwxFY1/I079ZBxH6Rf3HQhs5mwWR4PNZRuvnt6OnWeirY
DwYasewk0q64bx+Es5ToxFs30upODpi6nz+Gtt2p++WPIGTBWNLTxDTtSz1lIAwL
8hnGRMcA+0Gjdq7JcDnBvj3O/cWydXhM3c9F5DjvGtwfYfew72x7Sx/IU96EdDc9
QriIDl1l+KfitB4iCQq0Xr4DT9bqyKuetFcXIx3N1F56Ao/mYBUSJYJJvhzVRC6M
3axplCWhfQ+IUktOczfyIob71sDbsI/LAqJZt5z4PGa/bB+0l9SZoMj11Fsox4wf
GYDFw7lt8EdwyGSiK2kZsP9Kz5gcxIzpmM2296Xyl+bhqgcJutxouQXUFkjWwLFl
6WYo3AAg91Igh5+PTeh9
=lW3A
-----END PGP SIGNATURE-----

	`;
	console.log(canary);
}(this, this.document));
