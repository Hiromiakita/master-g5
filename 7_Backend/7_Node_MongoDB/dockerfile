#Aqui van las instrucciones para crear una imagen de docker

#Le decimos que tiene que instalar Node y que version de Node
FROM node:12

#Le decimos a docker en donde van a estar las carpetas/proyectos que voy a usar dentro del contenedor (Esta es mi directorio raiz)
WORKDIR /usr/src/app 


#Le decimos como levantar mi proyecto de Node

#Copiar el package json y ponerlo en la raiz del contenedor
COPY package.json ./

#Instalar dependencias del package
RUN npm install

#Instalar nodemon de manera global
RUN npm install -g nodemon

#Copiar todas las carpetas de mi proyecto en mi computadora hacia el contenedor
COPY . .

#Exponer un puerto desde el contenedor
EXPOSE 3000

#Correr mi proyecto
# CMD ["node",  "app.js"]
CMD ["nodemon", "-L", "--watch", ".", "app.js"]
