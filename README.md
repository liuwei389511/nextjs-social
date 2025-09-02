###启动准备
启动 docker 中 mysql
启动 ngrok 代理本地地址给 clerk 用 命令：ngrok http http://localhost:3000

###启动 prisma 控制台
npx prisma db push
npx prisma studio
