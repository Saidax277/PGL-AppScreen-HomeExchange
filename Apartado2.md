**2\.** En este apartado, lo que hice fue modificar la barra de búsqueda para que tuviera un icono. Para ello utilicé un componente llamado *Function Component*. También utilicé tarjetas para mostrar información complementaria y añadí funcionalidad de scroll vertical. Los nombres de los componentes los puse en inglés, y utilicé props para pasar la información entre ellos.

Fragmento de código JSX:

\<View style={styles.container}\>

  \<Image

    source={require('../assets/Lupa.jpg')}

    style={styles.icon}

  /\>

\</View\>

Este fragmento muestra un componente `View` con estilo `styles.container`, que contiene una imagen (`Image`) cargada desde la carpeta de assets (`Lupa.jpg`) y estilizada con `styles.icon`.

