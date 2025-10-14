# ⚔️ Black Clover App

Este proyecto es una aplicación móvil hecha con **React Native** inspirada en el universo de *Black Clover*.  
Aquí podrás explorar **Reinos mágicos**, conocer a los **Magos que quieren ayudarte** y descubrir a los **Magos destacados de la semana**.  
Además, incluye una **barra de navegación inferior** con iconos personalizados al estilo Black Clover.  

> ✨ Sí, me encanta *Black Clover*. Este proyecto es mi forma de mezclar programación con mi anime favorito.

---

## 🚀 Tecnologías usadas
- **React Native** (Expo o CLI)
- **TypeScript**
- **FlatList** para listas horizontales y verticales
- **Componentes personalizados** para Reinos, Magos y Magos Destacados
- **Assets personalizados** (iconos y personajes de Black Clover)

---

## 🧙‍♂️ Funcionalidades

- 🔍 **Barra de búsqueda**: busca reinos o magos con los que entrenar.  
- 🏰 **Reinos disponibles**: tarjetas horizontales con scroll.  
- 🤝 **Magos que estén interesados en ayudarte**: tarjetas más grandes, también con scroll horizontal.  
- 🌟 **Magos destacados de la semana**: scroll vertical con magos poderosos como Zora, Charmy y Julius.  
- 📱 **Bottom Navigation Bar**: barra inferior con iconos mágicos (grimorio, espadas, Nero y el emblema del Toro Negro).  

---


⚙️ Cómo se hizo cada cosa
- Barra de búsqueda
Creamos un componente BarraBusqueda.tsx con un TextInput y un icono de lupa. Lo colocamos arriba en App.tsx para que siempre sea lo primero que vea el usuario.
- Reinos disponibles
Definimos los datos en src/data/reinos.ts y los mostramos con un FlatList horizontal. Cada reino se renderiza con el componente ReinoCard.tsx, que incluye imagen, nombre y descripción.
- Magos que estén interesados en ayudarte
Creamos src/data/magos.ts con personajes como Asta, Yuno y Noelle. Usamos otro FlatList horizontal, pero con tarjetas más grandes (MagoCard.tsx) para destacar mejor a cada personaje.
- Magos destacados de la semana
Añadimos src/data/magosDestacados.ts con Zora, Charmy y Julius. Aquí usamos un FlatList vertical y un componente MagoDestacado.tsx con diseño tipo “perfil” (imagen a la izquierda, texto a la derecha).
- Bottom Navigation Bar
En lugar de usar navegación real, hacemos una barra fija (View con position: absolute; bottom: 0) que contiene cuatro iconos (Image) y sus textos. Los iconos son personalizados (grimorio, espadas, Nero y Toro Negro) y se guardan en la carpeta assets/.


