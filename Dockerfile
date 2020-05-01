from node:12

workdir /app

copy package.json .
copy tsconfig.json .

run npm install

copy . .

