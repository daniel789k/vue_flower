set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:daniel789k/vue_flower.git master:gh-pagess

cd -
