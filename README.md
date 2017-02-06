

installation
==============

il faut installer 

- node, qui vient avec `npm`
- faire `npm install`
- faire `npm install madoko -g`


utilisation
============


- faire `cd document`
- lancer `madoko document.mdk` manuellement (ignorer les erreurs sur dvisvgm)


pour avoir une mise a jour automatique
- a partir de la racine du projet, lancer `node livereload.js`
- installer [stack](https://docs.haskellstack.org/en/stable/README/)
- faire 'stack install steeloverseer'
- a partir de document lancer `sos`

le document affiche dans le browser devrait se rafraichir automatiquement


FAQ:
- si les figures sont incompletes, il faut enlever `dvisvgm` du path pour forcer Madoko a faire du rendu en png et non svg
