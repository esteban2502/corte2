# 📱 Proyecto Móvil — React Native + Expo + TypeScript

Este es un proyecto desarrollado con **React Native**, **Expo** y **TypeScript** como parte de la asignatura. El objetivo es implementar una aplicación móvil que cumpla con los siguientes requisitos: navegación entre pantallas, una calculadora funcional, tarjetas informativas, uso de estilos personalizados y Context API.

---

## **Estructura general del proyecto**

El proyecto está organizado de la siguiente manera:

```
corte2/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Pantalla de Calculadora
│   │   ├── infographic.tsx    # Pantalla de Infografía
│   ├── _layout.tsx            # Configuración de navegación por pestañas
├── components/
│   ├── Card.tsx               # Componente para mostrar tarjetas informativas
│   ├── Header.tsx             # Componente de encabezado reutilizable
│   ├── ThemeContext.tsx       # Context API para manejar el tema (claro/oscuro)
├── constants/
│   ├── Colors.ts              # Colores personalizados para la aplicación
├── README.md                  # Documentación del proyecto
```

---

## **🔀  Navegación entre pantallas**

La aplicación utiliza **React Navigation** con un **Tabs Navigator** para la navegación entre las dos pantallas principales:

1. **Calculadora**: Una pantalla funcional que permite realizar operaciones básicas (suma, resta, multiplicación, división).
2. **Infografía**: Una pantalla que muestra tarjetas informativas con un título, una imagen y un botón que redirige a una página web relevante.

La navegación está configurada en el archivo `_layout.tsx` utilizando el componente `Tabs.Navigator`. Cada pantalla está registrada como una pestaña:

```tsx
<Tabs.Screen
  name="index"
  options={{
    title: 'Calculadora',
    tabBarIcon: ({ color }) => <Entypo name="calculator" size={24} color="white" />,
  }}
/>
<Tabs.Screen
  name="infographic"
  options={{
    title: 'Infografías',
    tabBarIcon: ({ color }) => <FontAwesome5 name="newspaper" size={24} color="white" />,
  }}
/>



```
#### **Explicación del código:**
- **`Tabs.Screen`**: Registra cada pantalla como una pestaña.
- **`tabBarIcon`**: Define el ícono que se muestra en la barra de navegación para cada pestaña.
- **`name`**: Identifica la ruta de cada pantalla.
- **`options`**: Configura el título y el ícono de cada pestaña.

## **Funcionalidad de la Calculadora**
La pantalla de **Calculadora** permite realizar operaciones básicas como suma, resta, multiplicación y división. La funcionalidad se implementa utilizando `useState` para manejar el estado del input y el resultado, y botones personalizados para interactuar con la calculadora.

### **Características:**
- **Entrada dinámica**: Los números y operadores se agregan al input al presionar los botones.
- **Cálculo del resultado**: Al presionar el botón "=", se evalúa la expresión matemática ingresada.
- **Limpieza del input**: El botón "C" limpia el input y el resultado.
- **Diseño responsivo**: Los botones están organizados en filas para simular una calculadora real.

---

### **Explicación del código**

#### **1. Manejo del estado**
Se utilizan dos estados principales:
- **`input`**: Almacena la expresión matemática ingresada por el usuario.
- **`result`**: Almacena el resultado del cálculo.

```tsx
const [input, setInput] = useState<string>(''); // Guarda la expresión matemática ingresada
const [result, setResult] = useState<string>(''); // Guarda el resultado del cálculo
```

#### **2. Funciones principales**
- **Agregar valores al input**:
  Esta función se ejecuta al presionar un botón numérico o de operador. Agrega el valor correspondiente al estado `input`.

  ```tsx
  const handlePress = (value: string) => {
    setInput((prev) => prev + value); // Agrega el valor presionado al input actual
  };
  ```

- **Calcular el resultado**:
  Evalúa la expresión matemática ingresada en el estado `input` y actualiza el estado `result`. Si la expresión no es válida, muestra "Error".

  ```tsx
  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // Evalúa la expresión ingresada
      setResult(evalResult.toString()); // Guarda el resultado como string
    } catch (error) {
      setResult('Error'); // Muestra "Error" si la expresión no es válida
    }
  };
  ```

- **Limpiar el input y resultado**:
  Limpia tanto el estado `input` como el estado `result`.

  ```tsx
  const handleClear = () => {
    setInput(''); // Limpia el input
    setResult(''); // Limpia el resultado
  };
  ```

#### **3. Diseño de la calculadora**
El diseño de la calculadora utiliza un `ScrollView` para organizar los elementos y botones en filas. Cada botón está asociado a una función específica.

```tsx
<ScrollView contentContainerStyle={styles.calculatorContainer}>
  <View style={styles.resultContainer}>
    <Text style={styles.inputText}>{input}</Text> {/* Muestra la expresión ingresada */}
    <Text style={styles.resultText}>{result}</Text> {/* Muestra el resultado */}
  </View>

  <View style={styles.buttonContainer}>
    {/* Fila 1 */}
    <View style={GlobalStyles.row}>
      <Button title="7" onPress={() => handlePress('7')} />
      <Button title="8" onPress={() => handlePress('8')} />
      <Button title="9" onPress={() => handlePress('9')} />
      <Button title="÷" isBlue onPress={() => handlePress('/')} />
    </View>
    {/* Fila 2 */}
    <View style={GlobalStyles.row}>
      <Button title="4" onPress={() => handlePress('4')} />
      <Button title="5" onPress={() => handlePress('5')} />
      <Button title="6" onPress={() => handlePress('6')} />
      <Button title="×" isBlue onPress={() => handlePress('*')} />
    </View>
    {/* Fila 3 */}
    <View style={GlobalStyles.row}>
      <Button title="1" onPress={() => handlePress('1')} />
      <Button title="2" onPress={() => handlePress('2')} />
      <Button title="3" onPress={() => handlePress('3')} />
      <Button title="-" isBlue onPress={() => handlePress('-')} />
    </View>
    {/* Fila 4 */}
    <View style={GlobalStyles.row}>
      <Button title="C" isGray onPress={handleClear} />
      <Button title="0" onPress={() => handlePress('0')} />
      <Button title="=" isBlue onPress={handleCalculate} />
      <Button title="+" isBlue onPress={() => handlePress('+')} />
    </View>
  </View>
</ScrollView>
```

#### **4. Estilos**
Los estilos aseguran que la calculadora sea visualmente atractiva y funcional. Por ejemplo:
- **`resultContainer`**: Muestra el input y el resultado alineados a la derecha.
- **`buttonContainer`**: Organiza los botones en filas.

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro para la calculadora
  },
  calculatorContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  inputText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right', // Alinea el texto a la derecha
  },
  resultText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
```

---

### **Resumen del flujo**
1. El usuario presiona un botón numérico u operador.
2. La función `handlePress` actualiza el estado `input` con el valor presionado.
3. Al presionar "=", la función `handleCalculate` evalúa la expresión y actualiza el estado `result`.
4. Al presionar "C", la función `handleClear` limpia el input y el resultado.


---

## **Funcionalidad de las Tarjetas Informativas**

La pantalla de **Infografía** muestra una lista de tarjetas informativas. Cada tarjeta incluye:
- Un **título** descriptivo.
- Una **imagen** representativa.
- Un **botón** que redirige a una página web relevante.

### **Código destacado**
#### Datos de las tarjetas:
```tsx
const news = [
  {
    title: "Científicos crean un robot con visión 'sobrehumana'",
    imageUrl: "https://example.com/image.jpg",
    pageUrl: "https://example.com/article",
  },
];
```

#### Renderización de las tarjetas:
```tsx
<View style={styles.containerCard}>
  {news.map((newsItem, index) => (
    <Card
      key={index}
      title={newsItem.title}
      imageUrl={newsItem.imageUrl}
      pageUrl={newsItem.pageUrl}
    />
  ))}
</View>
```

#### Componente `Card`:
```tsx
export function Card({ title, imageUrl, pageUrl }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Button title="Leer más" onPress={() => Linking.openURL(pageUrl)} />
    </View>
  );
}
```

#### **Explicación del código:**
- **`news`**: Contiene los datos de las tarjetas, como título, imagen y URL.
- **`Card`**: Es un componente reutilizable que muestra la información de cada tarjeta.
- **`Linking.openURL`**: Abre la URL asociada a la tarjeta en el navegador.

---

## **Uso de Context API en la aplicación**

La aplicación utiliza **Context API** para manejar el estado global del tema (modo claro/oscuro). Esto permite que todas las pantallas compartan el mismo estado del tema sin necesidad de pasar props manualmente.

### **Implementación:**
1. **Archivo `ThemeContext.tsx`**:
   - Define un contexto para manejar el estado del tema (`isDarkMode`) y una función para alternarlo (`toggleTheme`).
   ```tsx
   const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

   export const ThemeProvider: React.FC = ({ children }) => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleTheme = () => setIsDarkMode((prev) => !prev);

     return (
       <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   };
   ```

2. **Uso en las pantallas**:
   - En la pantalla de **Infografía**, el usuario puede alternar entre el modo claro y oscuro utilizando un botón.
   - El estado del tema afecta dinámicamente los estilos de la aplicación.

Ejemplo de uso en una pantalla:
```tsx
const { isDarkMode, toggleTheme } = useTheme();

return (
  <View style={{ backgroundColor: isDarkMode ? '#000' : '#fff' }}>
    <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Modo {isDarkMode ? 'Oscuro' : 'Claro'}</Text>
    <Button title="Cambiar Tema" onPress={toggleTheme} />
  </View>
);
```

**Uso en las pantallas**:
   - En la pantalla de **Infografía**, el usuario puede alternar entre el modo claro y oscuro utilizando un botón.
   - El estado del tema afecta dinámicamente los estilos de la aplicación.

   #### **Explicación del código:**
- **`ThemeContext`**: Proporciona el estado global del tema.
- **`toggleTheme`**: Alterna entre el modo claro y oscuro.
- **`useTheme`**: Permite acceder al contexto desde cualquier pantalla.

---

## **🛠️ Cómo descargar y ejecutar el proyecto**

### **📦  Requisitos previos**
- Tener instalado **Node.js** y **npm** o **yarn**.
- Tener instalado **Expo CLI** globalmente:
  ```bash
  npm install -g expo-cli

  ### **Pasos para ejecutar el proyecto**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd corte2
   ```
3. Instala las dependencias:
   ```bash
   npm install

   ```
4. Instala la librería para las notificaciones:
   ```bash
   npm install react-native-toast-message
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   expo start
   ```
5. Escanea el código QR con la aplicación Expo Go en tu dispositivo móvil o usa un emulador para probar la aplicación.

---

## **🧠 Conclusión**

Este proyecto demuestra el uso de **React Native**, **Expo**, y **TypeScript** para crear una aplicación funcional con navegación, manejo de estado, y diseño dinámico. Los principales puntos destacados incluyen:
- Navegación entre pantallas utilizando un Tabs Navigator.
- Implementación de una calculadora funcional.
- Visualización de tarjetas informativas dinámicas.
- Uso de Context API para manejar el tema globalmente.


## 👨‍💻 Autores

- **Juan Esteban Buritica Garcia** — Desarrollador Full Stack  
    [![GitHub](https://img.shields.io/badge/GitHub-esteban2502-181717?style=flat&logo=github&logoColor=white)](https://github.com/esteban2502)  
  

  🌐 [https://esteban2502.github.io/](https://esteban2502.github.io/estebanPortafolio.github.io/)

- **Andrew Loaiza Guzman** — Desarrollador Full Stack

    [![GitHub](https://img.shields.io/badge/GitHub-Andrew06G-181717?style=flat&logo=github&logoColor=white)](https://github.com/Andrew06G)  


