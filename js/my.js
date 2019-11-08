
const canary = `
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

As of 2019-10-25 no warrants have ever been served to me.
No searches or seizures of any kind have ever been performed on my assets.
I have no direct or indirect knowledge of any backdoors, or potential backdoors in my server or network and I have not received any requests to implement a backdoor.
I have never disclosed any user communications to any third party.

Noah Berger/AP
National
PG&E Warns Of Power Cuts To More Than 2.5 Million People As Wildfires Rage
October 25, 2019 • The utility says widespread dry northeast winds reaching 45 to 60 mph with gusts of 60 to 70 mph at higher elevations raise the potential for a massive outages to prevent more wildfires.

Pablo Martinez Monsivais/AP
Politics
Democrats Say White House Is Interfering As Russia Review Becomes A Criminal Case
October 25, 2019 • Attorney General Bill Barr commissioned U.S. Attorney John Durham to look into the early phases of the Russia investigation. Democrats say he is turning the Justice Department into a political weapon.

Will Newton/Getty Images
Goats and Soda
Juan Soto Of The Nationals Brings Dominican Zest To The World Series
October 25, 2019 • He's one of many Dominican players in the major leagues. In fact, every team has a training academy in the Dominican Republic.

Alex Brandon/AP
Business
Trump Says He May Put His Washington Hotel On The Market
October 25, 2019 • The hotel was developed at the opulent Old Post Office building and has been at the center of complaints that Trump and his family are profiting off the presidency.

Muhammad Hamed/Reuters
Goats and Soda
UNICEF's Top Syria Official: 'We Have Witnessed Huge Amounts Of Distress' Among Kids
October 25, 2019 • Turkey's invasion of Syria this month has displaced 80,000 children who are "really in deep distress," UNICEF's Fran Equiza tells NPR. "The price children pay is absolutely disproportionate."
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCgAdFiEEy2z044LDARAae+lJbXt5doitEMcFAl2zkhYACgkQbXt5doit
EMdExRAAn3757hPTSU/6RAg5hECSbO5+WEDna6jsW/fMXz4sw5CgmB+L7hxzsKYi
AJfSfrl/PDaB3Gndwn1Gcjp+shWiNkoFrXXNgR5JHv2l+XXatdH9wrYNIh/i7qgA
cHPyNVUiiJbS2VZpdhPBmUbbE13X80b6yqqAXMDjtSAJEXGXLKjpMWIXshXcG/7q
I8rYKm0CYDxGkh/nbtzXi32SeS/BZpzvJhDqqV2Wntm+fHxBRfmExXzXlaWvgUQb
KpUMbpM73DFEUGLBq3MbH46BSQCCGom//uVcGtIRuxmU6PC3hQqQ/gH+7cxG381D
NzGXXsOW7sGrbGRHnHQNFU+7C0QeCbHsazy+htOnv3nZAdTbnDe1pvHnvBz8JOZZ
yPEeHEUkgV3OXSPf+Tpi0/XDDrjODRSYgPSSr6x08YYpk9+VLZ3ZmAj1yUVaVFp3
9tBL2uIGcP6QIBHdF6WvGoNsSlrw1gvW+Izi1ksHukWk4KGDuj77gCW2dgTsnqXb
Zk4rMOwCNWS0mG2sMe2PG8nAkPNA+VwtZp4o6y2lSRgT6ivDGyXkBe857Y3Qtptl
zsvzcwB4sxQuEbE+Ah7AQWqVkzq5aNc1a9P3L2Sal8p6fMiW0naFYpZYQhlz3gU1
DBUusxOqcOQ5DjR/mlMFw2mVjcCFHj630zTrAM8sQGOq0/hXjKE=
=02gO
-----END PGP SIGNATURE-----
`;

(function (window, document) {
  // Shrink images to the width of the article.
  var elements = document.getElementsByTagName("img");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    el.setAttribute("class", el.getAttribute("class") + " content");
  }

  console.log(canary);

}(this, this.document));
