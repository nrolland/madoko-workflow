

Madoko for both local or online live editing 


[Madoko](https://www.madoko.net/) is a simple format to write advanced and beautiful document


installation
==============

you have to install 

- node, which comes with `npm`
- from the project directory do `npm install` (this installs the dependencies described in `package.json`)
- issue `npm install madoko -g` to install madoko proper globally


utilisation
============


- from the `document` directory 
- run `madoko document.mdk` manually (ignore possible errors on dvisvgm..)


to have automatic update :
- from the project root, run `node livereload.js`
- install [stack](https://docs.haskellstack.org/en/stable/README/)
- run 'stack install steeloverseer'
- from the `document` folder run `sos`

now the document displayed in the browser should update automatically


FAQ:
- if images are incompletes, one has to remove `dvisvgm` from the path to force Madoko to use png and not svg
