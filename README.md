
CHATKIT
Es un chat desarrollado en React que va conectado a una API previamente relacionada y precargada con la información de los participantes creada en Chat Engine, el lenguaje utilizado para la logia es Javascript y para el cuerpo HTML y para los estilos CSS

Installation
Para la installación es importante contar con una cuenta en https://chatengine.io/ donde se creara 1 un proyecto que nos dará el ID para conectar la base de datos y poder agregar y gestionar a los participantes del Chat

luego se debe clonar el siguiente Git: https://github.com/wjulifajarb/CHATKIT.git en consola pude escribir el comando git clone y pegar el link anterior y asi obtendra el proyecto luego por favor dentro del proyecto escriba los siguientes comandos

npm install (para installar react)
npm install @ant-design/icons axios react-chat-engine (para installar las dependencias
necesarias para que el proyecto corra)
npm start (para inicializar el proyecto )

IMPORTANTE 
al crear el usuario en Chatengine.io y optener el ID DEL PROYECTO 
debe ingresar al editor del codigo y cambiar la liena de codigo que diga  const projectID = '6646ee2f-241d-453c-83b4-b0f05042165b'; en el archivo APP.JS e igualmente en el arcicho LoginForm estos se encuentran en la carpeta SRC - COMPONENTS  
esto se debe a que previamente deben estar inscritos los estudiantes para que se puedan logiar e ingresar al chat de la clase ya que el chat su base parte de esta API 

Usos

Es un chat para que le permite al moderador crear la clase y agregar a los estudiantes previamente, estos deben logiarse para ingresar al chat este tiene sonido para las notificaciones y tambien permite enviar imagenes y por ultimo almacenar el historial del chat al menos que el moderador quiera borrarlo del todo 

screen shots

![Captura de pantalla de 2021-05-26 10-13-14](https://user-images.githubusercontent.com/44068486/119689094-300e5f80-be0e-11eb-8ea8-01c8862233f8.png)
![Captura de pantalla de 2021-05-26 10-13-57](https://user-images.githubusercontent.com/44068486/119689127-356baa00-be0e-11eb-96dd-1500aaf9a063.png)
![Captura de pantalla de 2021-05-26 10-14-12](https://user-images.githubusercontent.com/44068486/119689137-37ce0400-be0e-11eb-94b3-4cbb73002979.png)
![Captura de pantalla de 2021-05-26 10-14-40](https://user-images.githubusercontent.com/44068486/119689147-3997c780-be0e-11eb-9587-fc4f9142ebfb.png)
![Captura de pantalla de 2021-05-26 10-15-36](https://user-images.githubusercontent.com/44068486/119689160-3bfa2180-be0e-11eb-94d2-cb6f9f51430f.png)
![Captura de pantalla de 2021-05-26 09-54-36](https://user-images.githubusercontent.com/44068486/119690485-5a145180-be0f-11eb-8067-f11fcb8459f1.png)
![Captura de pantalla de 2021-05-26 09-54-42](https://user-images.githubusercontent.com/44068486/119690495-5c76ab80-be0f-11eb-9a04-0169929ac8b8.png)
![Captura de pantalla de 2021-05-26 09-54-50](https://user-images.githubusercontent.com/44068486/119690527-64365000-be0f-11eb-8972-97c5b4777699.png)
![Captura de pantalla de 2021-05-26 09-55-14](https://user-images.githubusercontent.com/44068486/119690540-67c9d700-be0f-11eb-9dea-1c21c9b8ac6b.png)
![Captura de pantalla de 2021-05-26 09-55-30](https://user-images.githubusercontent.com/44068486/119690559-6a2c3100-be0f-11eb-855a-6efe7d70ac60.png)


Deploy responsivo https://chatkit.netlify.app/
Gracias
