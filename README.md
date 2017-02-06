
A small workflow using [Madoko](https://www.madoko.net/)  for live editing

=> This is intended for illustration only : the Madoko online editor is powerful, you do not need to install anything, and you can already run it locally.
So by using emacs you loose those features : this setting is useful when you need to rebuild assets on the fly and do not have those domain specific visual tools.


 
[Madoko](https://www.madoko.net/) is a simple format to write advanced and beautiful document

Demo
====

[![youtube video](https://img.youtube.com/vi/OLceqXS6czs/0.jpg)](https://www.youtube.com/watch?v=OLceqXS6czs)


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
- run `stack install steeloverseer`
- from the `document` folder run `sos`

now the document displayed in the browser should update automatically


FAQ:
- if images are incompletes, one has to remove `dvisvgm` from the path to force Madoko to use png and not svg


To know all about Madoko itself cf its website but also this video :

[![youtube video](https://img.youtube.com/vi/Aa-ustkfU4Y/0.jpg)](https://www.youtube.com/watch?v=Aa-ustkfU4Y)
