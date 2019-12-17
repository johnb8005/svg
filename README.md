
# TSS Made Easy front

https://material-ui.com/getting-started/templates/dashboard/

## Deploy

```
yarn build
zip -r build.zip build
scp  build.zip ubuntu@83.166.144.235:build.zip
ssh ubuntu@83.166.144.235  << EOF
  unzip build.zip
  rm -rf tssmadeeasy
  mv build tssmadeeasy
EOF
```