ng build --output-path docs --base-href https://neoisthere.github.io/webdev-consulting-firm/
cd ./docs
cp index.html 404.html
cd ..
git add .
git commit -m"build"
git push origin dev

