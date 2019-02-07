
const canary = `
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

2019-02-07

Trump furious after Schiff hires former NSC aides
https://www.msn.com/en-us/news/politics/trump-furious-after-schiff-hires-former-nsc-aides-to-help-with-probe/ar-BBTiUSK?li=BBnb7Kz
MSN|2 hours ago

Virginia Mulls Misdeeds of Its Leaders and Braces for More Turmoil
https://www.msn.com/en-us/news/politics/virginia-mulls-misdeeds-of-its-leaders-and-braces-for-more-turmoil/ar-BBTiQSl
MSN|3 hours ago

Frank Robinson, barrier-breaking Hall of Fame baseball player and manager, dies at 83
https://www.washingtonpost.com/local/obituaries/frank-robinson-barrier-breaking-hall-of-fame-baseball-player-and-manager-dies-at-83/2019/02/07/06a258ee-20d2-11e9-8e21-59a09ff1e2a1_story.html
The Washington Post|3 hours ago

Republicans argue against 'weaponizing' tax code as Democrats press for Trump's returns
https://www.marketwatch.com/story/republicans-argue-against-weaponizing-tax-code-as-democrats-press-for-trumps-returns-2019-02-07
MarketWatch|1 hour ago
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCgAdFiEEy2z044LDARAae+lJbXt5doitEMcFAlxcv6AACgkQbXt5doit
EMfzzA//fE6GNr3fyql7MpIqjRyEwo/HJBB3/dHz34loghCaSQLi95cWAVn8Utos
1Pq3vKyTxigvY5yf/zbZNFR5vAdiLDGu+ev1R3Izs6Rpx+6vYdw+HuS4BypOHcVp
xM2YhumZbnl087XqNKxGtx9csq1ElO3pJ+JDMtO53vHbN2MLprb4oZyx+h6NkHAl
C65GHbPRqRjm0cNdT9hftjrt+emqXusWmi8XHWbdSAGPqd2TuRM++3oTsdSQkNo9
SZvY5N7A8MeGRzqwyY2o0sroYYuJ7qDWj78CDTX7+jIMSaMNUJbh7mi0D101j2Xw
q6J17qnA3vxtaf0xHkqIB17d4zyhJ3LvctwAUl30y0UwQ4yLZCkAy9p/uv9POdqi
hqKWSf1X6LBK3HYV/MekUF7o4SO73z0QktacTOQox7FeikuQ6WWe9qiEKhewYX2z
qT1Y7ffQPtUXDVwbBQnKmMfH88iTH12hZ4pTcqxTSGI3Hd/uL+RQ9cTq7oq09eWq
izl8QT1M3Rr/5e+cfSJMZiDRoE0vQMjVFySlh4XL1xSg+KBYtt1vD1f0oohA1yH0
XXu1lqP+UNmqpRcuYD5IO4G4twPafAuo97shgNf+G16JEFQqfrczYQJshn/ebb2+
vtAbkVk1XeT1pJ4AMoCD0lK5baCZnq2aHF20+Pm6PrxDPYLCb5A=
=hKIV
-----END PGP SIGNATURE-----

`;

(function (window, document) {
    // Shrink images to the width of the article.
    var elements = document.getElementsByTagName("img");
    for (var i=0; i<elements.length; i++)
    {
      var el = elements[i];      
      el.setAttribute( "class", el.getAttribute("class") + " content" );
    }

	console.log(canary);

}(this, this.document));
