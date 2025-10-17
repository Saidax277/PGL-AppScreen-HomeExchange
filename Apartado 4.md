**4\.**  Vale, como todos los iconos pertenecen a una única librería, entonces solo explicaré cómo añadir uno.

Por ejemplo, en `reinos.ts` exporté la constante `REINOS` creando un array de objetos, y lo más importante para esto: la imagen. Escribí esto de aquí:

export const REINOS \= \[

  {

    id: 'trebol',

    nombre: 'Reino del trébol',

    descripcion: 'Lugar donde están los protas, claramente es el reino más roto, osea, Duh',

    imagen: require('../assets/Trebol.png'),

  },

\];

Para que después, en `ReinoCard.tsx` puedas llamarla e imagen, usándolo como export en constante como `REINOS` con el `React.FC` para que incluya imágenes `ImageBackground`. Busca en tu archivo algo así:

export const ReinoCard: React.FC\<Props\> \= ({ nombre, descripcion, imagen }) \=\> {

  return (

    \<View style={styles.card}\>

      \<ImageBackground source={imagen} style={styles.image}\>

        \<Text style={styles.title}\>{nombre}\</Text\>

        \<Text style={styles.description}\>{descripcion}\</Text\>

      \</ImageBackground\>

    \</View\>

  );

};

Y para que puedas aparecer en `App.tsx` donde necesitas que aparezca, puedes poner todos los reinos que quieras, usando el `map` para que se repita y se pueda mostrar todo lo que pusiste en [`reinos.ts`](http://reinos.ts):

\<Text style={styles.sectionTitle}\>Reinos disponibles:\</Text\>

{REINOS.map((item, index) \=\> (

  \<ReinoCard

    keyExtractor={(item) \=\> item.id}

    nombre={item.nombre}

    descripcion={item.descripcion}

    imagen={item.imagen}

  /\>

))}

