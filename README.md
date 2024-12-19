INVESTIGACIÓN

1 ¿Dónde utilizar JSX?
JSX se utiliza principalmente en archivos de componentes de React para definir la estructura y el contenido de la interfaz de usuario (UI). 
Se usa dentro de la función `render()` o como parte del `return` en componentes funcionales y permite combinar HTML con lógica de JavaScript de forma fluida
Ejemplo 
function App() {
  return (
    <div>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un ejemplo </p>
    </div>
  );
}

----------------------------------------------------------------
2 ¿Por qué usar JSX y no solo HTML en React?
JSX no es solo HTML, sino una extensión de JavaScript que permite escribir una sintaxis similar a HTML directamente en los archivos de JavaScript.
Las principales razones para usar JSX son:  
- Legibilidad y Simplicidad: Facilita la escritura de componentes de forma legible y declarativa.  
- Poder de JavaScript: Permite incluir expresiones de JavaScript directamente en el código HTML con llaves `{}`.  
- Transformación en código eficiente: Durante la compilación, JSX se convierte en llamadas a `React.createElement()`, optimizando el rendimiento.  
- Mejor integración con React: Permite definir la lógica y la interfaz en un solo archivo, facilitando el desarrollo.  
-Integra HTML con JavaScript: Permite escribir la estructura del DOM directamente dentro del código lógico de los componentes.
-Optimiza la experiencia de desarrollo: Mejora la legibilidad y mantenibilidad del código.
-Más funcionalidad: Soporta expresiones de JavaScript, permite el uso de funciones dinámicas y facilita la reutilización de componentes.
------------------------------------------------
3 Diferencias en la Sintaxis entre JSX y HTML  
| Concepto           |       HTML            |       JSX                         |
|--------------------|-----------------------|-----------------------------------|
| Atributos          | `class="clase"`       |  `className="clase"`              |
| Cierre de etiquetas| No siempre se cierran |   Todas deben cerrarse (`<br />`) |
| Expresiones        | No se permite JS      | Se permite JS con `{}`            |
| Eventos            | `onclick=""`          | `onClick={funcion}`               |
| Comentarios        | `<!-- -->`            | `{/* Comentario en JSX */}`       |


Ejemplo 

HTML
<div class="container">
  <h1>Hola</h1>
</div>

JSX  
<div className="container">
  <h1>Hola</h1>
</div>

----------------------------------------------------------------------------------------------------

 4 ¿Qué es React?  
React es una biblioteca de JavaScript desarrollada por Meta (Facebook) para crear interfaces de usuario dinámicas y basadas en componentes.
Se centra en la construcción de aplicaciones web rápidas, escalables y modulares utilizando un modelo declarativo.

Principales características de React**  
- Componentes reutilizables: Cada parte de la interfaz se divide en componentes.  
- Virtual DOM: React usa un DOM virtual para hacer actualizaciones rápidas y eficientes.  
- Unidireccionalidad de los datos: Los datos fluyen de arriba hacia abajo en la jerarquía de componentes.  
- Basado en componentes funcionales: Se prefieren componentes funcionales con hooks modernos.  

------------------------------------------------------------------------------
 5 ¿Cuándo apareció React? 
React fue lanzado por Facebook en mayo de 2013.Fue creado inicialmente por Jordan Walke , un ingeniero de software de Facebook.
Inicialmente,se por primera vez en la interfaz de usuario de Facebook internamente en la red social  luego en Instagram, antes de ser liberado como un proyecto de código abierto.

---------------------------------------------------------------------------------

 6 Buenas prácticas de React

1. Dividir la UI en componentes reutilizables 
   - Crea componentes pequeños y reutilizables para evitar duplicar el código.  
2. Utilizar Hooks en lugar de clases
   - Usa Hooks (`useState`, `useEffect`, etc.) para manejar el estado y el ciclo de vida de los componentes.  
3. Nombrar componentes con PascalCase
   - Los nombres de los componentes deben comenzar con mayúscula (`MiComponente`).  
4. Manejar correctamente los estados
   - Mantén los estados lo más simple posible y utiliza lifting state up para compartirlo entre componentes.  
5. Utilizar prop-types o TypeScript
   - Valida las `props` para evitar errores durante el desarrollo.  
6. Evitar lógica compleja en el `return`
   - Extrae la lógica a funciones separadas y limpia el `return`.  
7. Desestructurar las props 
   - Desestructura las `props` en los parámetros de la función.  
   ```javascript
   function Saludo({ nombre }) {
     return <h1>¡Hola, {nombre}!</h1>;
   }
8. Evitar re-renderizados innecesarios  
   - Usa `React.memo()` o `useMemo()` para optimizar la re-renderización.  
9. Organizar la estructura de carpetas
   - Agrupa los componentes, assets y estilos en carpetas de forma coherente.  
10. Usar control de errores (Error Boundaries)*
   - Usa componentes de Error Boundary para capturar errores en la UI.  

